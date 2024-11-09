require ('dotenv').config();
const { Bot } = require('grammy');

const bot = new Bot(process.env.BOT_API_KEY);

bot.command('start', async (ctx) => {
  //  await ctx.reply('Шалом!')
  await ctx.reply('Privet'+ctx.chatId, ctx.chatId);
})

bot.start();