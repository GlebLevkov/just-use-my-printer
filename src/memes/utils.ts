import { InputFile } from "@grammy";
import { BotContext } from "@src/context.ts";
import { MEMES_PATH } from "@config";

const memes = [
  "bebe.mp4",
  "bebe-2.mp4",
  "eto-heh.gif",
  "fedya.mp4",
  "what.gif",
];

export const sendMeme = async (ctx: BotContext) => {
  const mem = memes[getRandomIntInclusive(0, memes.length - 1)];
  const file = new InputFile(`${MEMES_PATH}/${mem}`);

  if (mem.endsWith("gif")) {
    await ctx.replyWithAnimation(file);
  } else if (mem.endsWith("mp4")) {
    await ctx.replyWithVideo(file);
  }
};

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
