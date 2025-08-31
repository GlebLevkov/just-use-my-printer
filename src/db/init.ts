import { KV_DB_PATH } from "@config";

await Deno.mkdir(KV_DB_PATH, { recursive: true });
await Deno.mkdir(KV_DB_PATH, { recursive: true });

export const db = await Deno.openKv(KV_DB_PATH + "/db");
