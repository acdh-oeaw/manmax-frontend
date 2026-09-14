import { query } from "@solidjs/router";

export type TEgoNet = {
  nodes: {
    [key: number]: { id: number; size: number; label: string; color: string };
  };
  edges: { source: number; target: number; label: string }[];
};

export const getEgonet = query(async (id: string): Promise<TEgoNet> => {
  const resp = await fetch(`http://localhost:8000/egonet/${id}`);
  const data = await resp.json();

  return data;
}, "egonet");
