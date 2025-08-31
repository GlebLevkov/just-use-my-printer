import type { BotContext } from "@src/context.ts";

import { Middleware } from "@grammy";
import { checkUserIsAdmin } from "@src/utils/checkUserIsAdmin.ts";
import { checkUserIsTrusted } from "./utils/checkUserIsTrusted.ts";

export const middleware: Middleware<BotContext> = async (ctx, next) => {
  ctx.config = {
    isAdmin: checkUserIsAdmin(ctx.from?.id),
    isTrusted: checkUserIsTrusted(ctx.from?.username),
  };

  await next();
};
