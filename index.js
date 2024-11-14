require ('dotenv').config();
const { Bot } = require('grammy');
console.log("123");
const bot = new Bot(process.env.BOT_API_KEY);

bot.command('start', async (ctx) => {
  //  await ctx.reply('Шалом!')
  await ctx.reply('Privet'+ctx.chatId, ctx.chatId);
})
//123/
bot.start();