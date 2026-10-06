import { query } from "@solidjs/router";
import { TFactoid } from "../modelDefs";
import { BASE_URL } from "../settings";

export const getFactoid = query(async (id: string): Promise<TFactoid> => {
  const resp = await fetch(`${BASE_URL}/factoids/${id}`)
  const data = await resp.json()
  return data

}, "factoid");




export type ItemList = { id: number, label: string }[];
export type ListResult = { items: ItemList, count: number };

export const getFactoidList = query(async (q: string | undefined): Promise<ListResult> => {
  if (typeof q === "undefined") {
    const resp = await fetch(`${BASE_URL}/factoids`)
    const data = await resp.json()
    return data
  }

  const resp = await fetch(`${BASE_URL}/factoids?q=${q}`)
  const data = await resp.json()
  return data
}, "factoidList")
