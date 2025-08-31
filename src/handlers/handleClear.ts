import { BotContext } from "@src/context.ts";
import { cleanUserFiles } from "@src/db/queries.ts";
import { removeFiles } from "@src/storage/utils.ts";

export const handleClear = async (ctx: BotContext) => {
  if (!ctx.from?.id) return;

  const toBeRemoved = await cleanUserFiles(ctx.from?.id);
  await removeFiles(toBeRemoved);

  await ctx.reply("the files were consigned to oblivion...");
};
