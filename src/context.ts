import { Context } from "@grammy";

interface BotConfig {
  isAdmin: boolean;
  isTrusted: boolean;
}

export type BotContext = Context & {
  config: BotConfig;
};
