import { BotContext } from "@src/context.ts";
import { getIdByUsername, getUserFiles } from "@src/db/queries.ts";
import { addToPrintQueue } from "@src/printer/commands.ts";

const usernameRegex = /User: (.+)/;

export const ok = async (ctx: BotContext) => {
  if (
    !ctx.config.isAdmin ||
    !ctx.message?.reply_to_message?.text ||
    ctx.message?.text !== "ok"
  )
    return;

  const username = usernameRegex.exec(ctx.message.reply_to_message.text)?.at(1);
  if (!username) return ctx.reply("Username not found");

  const userId = await getIdByUsername(username);

  if (!userId) return ctx.reply(`Id for Username=${username} not found`);

  console.log(`user @${username} approved`);

  const files = await getUserFiles(userId);

  for (const file of files) {
    await addToPrintQueue({ filepath: file });
    console.log(`File printed:\n${file}\n`);
  }

  await ctx.api.sendMessage(userId, "Confirmed and sent to print");
};
