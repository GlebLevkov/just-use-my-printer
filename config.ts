export const BOT_TOKEN = Deno.env.get("BOT_TOKEN") ?? "gg";
export const ADMIN_ID = Deno.env.get("ADMIN_ID");
export const TRUSTED_USERS = Deno.env.get("TRUSTED_USERS")?.split(",") ?? [];
export const STORAGE_PATH = Deno.env.get("STORAGE_PATH") ?? "./storage";
export const MEMES_PATH = Deno.env.get("MEMES_PATH") ?? "./src/memes/data";
export const MEMES_ENABLED = Deno.env.get("MEMES_ENABLED");
export const KV_DB_PATH = Deno.env.get("KV_DB_PATH") ?? "./kvdata";
