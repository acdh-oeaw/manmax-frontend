import { modelDefs, TypeMap } from "../modelDefs";

export function removeBrackets(str: string): string {
  if (typeof str !== "string") {
    return `[ERROR] Should be string but is ${typeof str}`;
  }
  return str
    .replace(/\[[^\]]*\]/g, "") // remove [...] and its contents
    .replace(/\s+/g, " ")
    .replace("←", " ") // collapse multiple spaces into one
    .trim(); // trim leading/trailing spaces
}

export function linkifyUrls(text: string) {
  const urlPattern = /\b(?:https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/g;

  return text.replace(urlPattern, (url) => {
    // strip common trailing punctuation not part of the URL
    const trailing = /[.,;:!?)\]]+$/;
    const match = url.match(trailing);
    const cleanUrl = match ? url.slice(0, -match[0].length) : url;
    const suffix = match ? match[0] : "";

    // www.-only URLs need a protocol added for the href to work
    const href = /^www\./i.test(cleanUrl) ? `https://${cleanUrl}` : cleanUrl;
    return `<a class="text-blue-700 hover:text-blue-800" target="_blank" href="${url}"><span class="text-xl text-blue-800 hover:text-blue-900 font-bold">⎘</span> ${url}</a>`;
  });
}

type ValueType = number | boolean | string | TypeMap[keyof TypeMap][];

export function determineFieldTypeFromValue(
  value: ValueType,
): "Literal" | "Entities" | "Statements" | undefined {
  value;

  if (
    typeof value === "string" ||
    typeof value === "number" ||
    typeof value === "boolean"
  ) {
    return "Literal";
  } else if (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === "object" &&
    "type" in value[0] &&
    modelDefs[value[0].type].metatype === "entity"
  ) {
    return "Entities";
  } else if (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === "object" &&
    "type" in value[0] &&
    modelDefs[value[0].type].metatype === "statement"
  ) {
    return "Statements";
  }
}


/**
 * Each "statement" is an object with exactly one top-level key (the type of
 * statement, e.g. "genannte_Person"), whose value is an object that may
 * contain a `start_date_written` field (which can be null).
 *
 * Example:
 * {
 *   "genannte_Person": {
 *     "id": 162720,
 *     "start_date_written": null,
 *     ...
 *   }
 * }
 */

/**
 * Extracts the "relevant" date string from a start_date_written value.
 * Handles:
 *   YYYY-MM-DD
 *   YYYY-MM
 *   YYYY
 *   "ab <date> bis <date>"  -> uses the "ab" date
 *   "ab <date>"             -> uses the "ab" date
 *   "bis <date>"            -> uses the "bis" date
 */
function extractRelevantDate(dateStr) {
  if (!dateStr) return null;

  const str = dateStr.trim();

  const abBisMatch = str.match(/^ab\s+(.+?)\s+bis\s+(.+)$/i);
  if (abBisMatch) return abBisMatch[1].trim();

  const abMatch = str.match(/^ab\s+(.+)$/i);
  if (abMatch) return abMatch[1].trim();

  const bisMatch = str.match(/^bis\s+(.+)$/i);
  if (bisMatch) return bisMatch[1].trim();

  return str; // plain date, no prefix
}

/**
 * Pads a partial date (YYYY or YYYY-MM) out to YYYY-MM-DD
 * so that string comparison sorts correctly.
 */
function normalizeForSort(dateStr) {
  if (/^\d{4}$/.test(dateStr)) return `${dateStr}-01-01`;
  if (/^\d{4}-\d{2}$/.test(dateStr)) return `${dateStr}-01`;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  return dateStr; // unrecognized format, fall back to raw string
}

/**
 * Extracts the 4-digit year from a normalized/relevant date string.
 */
function extractYear(dateStr) {
  const match = dateStr.match(/^(\d{4})/);
  return match ? match[1] : null;
}

/**
 * Given a statement object like { genannte_Person: {...} }, returns
 * { key: "genannte_Person", value: {...} }.
 * Assumes exactly one top-level key per statement (uses the first one
 * found if there happen to be more).
 */
function getOuterEntry(statement) {
  const keys = Object.keys(statement || {});
  if (keys.length === 0) return null;
  const key = keys[0];
  return { key, value: statement[key] };
}

/**
 * Groups an array of statement objects by year, based on the
 * `start_date_written` field nested inside each statement's single
 * top-level value. Items within each year are sorted chronologically
 * (ascending) by their resolved date.
 *
 * Statements with no usable date (null, missing, or unparsable) are
 * collected under the "unknown" key, in their original order.
 *
 * Each bucket entry has the shape:
 *   { key: <outer key name>, statement: <original statement object> }
 *
 * @param {Array<Object>} statements
 * @returns {Object} map of year (or "unknown") -> array of entries,
 *                    years given in ascending order, "unknown" last
 */
export function groupStatementsByYear(statements) {
  const buckets = {};
  const unknown = [];

  for (const statement of statements) {
    const outer = getOuterEntry(statement);
    if (!outer) continue;

    const { key, value } = outer;
    const dateStr = value ? value.start_date_written : null;
    const relevantDate = extractRelevantDate(dateStr);

    const entry = { key, statement };

    if (!relevantDate) {
      unknown.push(entry);
      continue;
    }

    const year = extractYear(relevantDate);
    if (!year) {
      unknown.push(entry);
      continue;
    }

    if (!buckets[year]) buckets[year] = [];
    buckets[year].push({ ...entry, sortKey: normalizeForSort(relevantDate) });
  }

  const sortedYears = Object.keys(buckets).sort();
  const result = {};

  for (const year of sortedYears) {
    buckets[year].sort((a, b) => a.sortKey.localeCompare(b.sortKey));
    result[year] = buckets[year].map(({ key, statement }) => ({ key, statement }));
  }

  if (unknown.length > 0) {
    result.unknown = unknown;
  }

  return result;
}



// ---------------------------------------------------------------------
// Example usage
// ---------------------------------------------------------------------
/*
const statements = [
  {
    genannte_Person: {
      id: 162720,
      type: "naming",
      start_date_written: null,
    },
  },
  {
    genannte_Person: {
      id: 1,
      type: "naming",
      start_date_written: "1923-05-02",
    },
  },
  {
    someOtherType: {
      id: 2,
      start_date_written: "ab 1901-06 bis 1902-01",
    },
  },
];

console.log(groupStatementsByYear(statements));
// {
//   "1901": [ { key: "someOtherType", statement: {...} } ],
//   "1923": [ { key: "genannte_Person", statement: {...} } ],
//   "unknown": [ { key: "genannte_Person", statement: {...} } ]
// }
*/
