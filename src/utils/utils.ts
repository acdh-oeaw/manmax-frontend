import { modelDefs, TypeMap } from "../modelDefs";



export function removeBrackets(str: string): string {
  return str
    .replace(/\[[^\]]*\]/g, '')  // remove [...] and its contents
    .replace(/\s+/g, ' ')        // collapse multiple spaces into one
    .trim();                     // trim leading/trailing spaces
}



export function linkifyUrls(text: string) {
  const urlPattern = /\b(?:https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/g;

  return text.replace(urlPattern, (url) => {
    // strip common trailing punctuation not part of the URL
    const trailing = /[.,;:!?)\]]+$/;
    const match = url.match(trailing);
    const cleanUrl = match ? url.slice(0, -match[0].length) : url;
    const suffix = match ? match[0] : '';

    // www.-only URLs need a protocol added for the href to work
    const href = /^www\./i.test(cleanUrl) ? `https://${cleanUrl}` : cleanUrl;
    return `<a class="text-blue-700 hover:text-blue-800" target="_blank" href="${url}"><span class="text-xl text-blue-800 hover:text-blue-900 font-bold">⎘</span> ${url}</a>`;
  });
}


type ValueType = number | boolean | string | (TypeMap[keyof TypeMap])[]

export function determineFieldTypeFromValue(value: ValueType): "Literal" | "Entities" | "Statements" | undefined {

  value

  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return "Literal"
  }
  else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && "type" in value[0] && modelDefs[value[0].type].metatype === "entity") {
    return "Entities"
  }
  else if (Array.isArray(value) && value.length > 0 && typeof value[0] === "object" && "type" in value[0] && modelDefs[value[0].type].metatype === "statement") {
    return "Statements"
  }
}
