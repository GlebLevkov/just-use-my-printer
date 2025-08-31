import { Bot } from "@grammy";
import { BotContext } from "@src/context.ts";
import { middleware } from "@src/middleware.ts";
import { handleFile } from "@src/handlers/handleFile.ts";
import { hydrateFiles } from "@grammy/files";
import { handlePrint } from "@src/handlers/handlePrint.ts";
import { handleClear } from "@src/handlers/handleClear.ts";
import { BOT_TOKEN } from "@config";
import { clean } from "@src/handlers/admin/clean.ts";
import { ok } from "@src/handlers/admin/ok.ts";

const bot = new Bot<BotContext>(BOT_TOKEN);

bot.api.config.use(hydrateFiles(BOT_TOKEN));

bot.use(middleware);
bot.on(":file", handleFile);
bot.command("print", handlePrint);
bot.command("clear", handleClear);
bot.on("message", (ctx) => clean(ctx) || ok(ctx));

bot.start();
