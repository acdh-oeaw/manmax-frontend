import { query } from "@solidjs/router";
import { TPerson } from "../modelDefs";

export const getPerson = query(async (id: string): Promise<TPerson> => {
  const resp = await fetch(`http://localhost:8000/person/${id}`)
  const data = await resp.json()
  return data

}, "person");

export const getPersonList = query(async (q: string | undefined) => {
  if (typeof q === "undefined") {
    const resp = await fetch(`http://localhost:8000/person`)
    const data = await resp.json()
    return data
  }

  const resp = await fetch(`http://localhost:8000/person/?q=${q}`)
  const data = await resp.json()
  return data
}, "personList")
