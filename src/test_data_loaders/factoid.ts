import { query } from "@solidjs/router";
import { TFactoid } from "../modelDefs";

export const getFactoid = query(async (id: string): Promise<TFactoid> => {
  const resp = await fetch(`http://localhost:8000/factoid/${id}`)
  const data = await resp.json()
  return data

}, "factoid");

export const getFactoidList = query(async (q: string | undefined) => {
  if (typeof q === "undefined") {
    const resp = await fetch(`http://localhost:8000/factoid`)
    const data = await resp.json()
    return data
  }

  const resp = await fetch(`http://localhost:8000/factoid/?q=${q}`)
  const data = await resp.json()
  return data
}, "factoidList")
