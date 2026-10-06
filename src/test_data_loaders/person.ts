import { query } from "@solidjs/router";
import { TPerson } from "../modelDefs";

import { BASE_URL } from "../settings";

export const getPerson = query(async (id: string): Promise<TPerson> => {
  const resp = await fetch(`${BASE_URL}/persons/${id}`)
  const data = await resp.json()
  return data

}, "person");

export const getPersonList = query(async (q: string | undefined) => {
  if (typeof q === "undefined") {
    const resp = await fetch(`${BASE_URL}/persons`)
    const data = await resp.json()
    return data
  }

  const resp = await fetch(`${BASE_URL}/persons/?q=${q}`)
  const data = await resp.json()
  return data
}, "personList")
