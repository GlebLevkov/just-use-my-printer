import { BotContext } from "@src/context.ts";
import { ADMIN_ID, MEMES_ENABLED } from "@config";
import { getUserFiles } from "@src/db/queries.ts";
import { sendMeme } from "@src/memes/utils.ts";

export const handlePrint = async (ctx: BotContext) => {
  if (!ctx.from?.id) return;

  const filesToPrint = await getUserFiles(ctx.from.id);

  if (filesToPrint.length < 1) {
    ctx.reply("Nothing to print...");

    if (MEMES_ENABLED === "true") await sendMeme(ctx);
    return;
  }

  await ctx.reply("Print request sent to @glebchanskiy");

  if (!ADMIN_ID) {
    console.warn("ADMIN_ID not set");
    return;
  }

  await ctx.api.sendMessage(
    ADMIN_ID,
    `User: ${ctx.from?.username}\nwants to print ${filesToPrint.length} ${
      filesToPrint?.length > 1 ? "files" : "file"
    }`
  );
};
