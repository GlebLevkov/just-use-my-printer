import { KV_DB_PATH, STORAGE_PATH } from "@config";

await Deno.mkdir(STORAGE_PATH, { recursive: true });
await Deno.mkdir(KV_DB_PATH, { recursive: true });

console.log("created: ", STORAGE_PATH);
console.log("created: ", KV_DB_PATH);

export const db = await Deno.openKv(KV_DB_PATH + "/db");
