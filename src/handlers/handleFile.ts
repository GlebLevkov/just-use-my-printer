import { BotContext } from "@src/context.ts";
import { addUserFiles, updateIdByUsername } from "@src/db/queries.ts";
import { STORAGE_PATH } from "@config";
import { File } from "@grammy/types";

export const handleFile = async (ctx: BotContext) => {
  if (!ctx.config.isTrusted || !ctx?.from || !ctx?.from.username) {
    await ctx.reply("Request access from @glebchanskiy");
    return;
  }

  const file = (await ctx.getFile()) as ExtFile;
  const path = await file?.download(`${STORAGE_PATH}/${file.file_id}`);

  console.log(`user @${ctx.from.username} upload file`);

  await addUserFiles(ctx.from.id, [path]);
  await updateIdByUsername(ctx.from.username, ctx.from.id);
};

type ExtFile = File & {
  download: (url: string) => Promise<string>;
};
