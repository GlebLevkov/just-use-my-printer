import { BotContext } from "@src/context.ts";
import { cleanUserFiles, getIdByUsername } from "@src/db/queries.ts";
import { removeFiles } from "@src/storage/utils.ts";

const usernameRegex = /User: (.+)/;

export const clean = async (ctx: BotContext) => {
  if (
    !ctx.config.isAdmin ||
    !ctx.message?.reply_to_message?.text ||
    ctx.message?.text !== "clean"
  )
    return;

  const username = usernameRegex.exec(ctx.message.reply_to_message.text)?.at(1);
  if (!username) return ctx.reply("Username not found");

  const userId = await getIdByUsername(username);

  if (!userId) return ctx.reply(`Id for Username=${username} not found`);

  const toBeRemoved = await cleanUserFiles(userId);
  await removeFiles(toBeRemoved);

  ctx.reply("cleaned");
};
