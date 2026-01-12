const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "أهلاً بيك 🌟\nاختار من القائمة:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "🛒 الشوب", callback_data: "shop" }],
        [{ text: "📞 تواصل", callback_data: "contact" }]
      ]
    }
  });
});

bot.on('callback_query', (query) => {
  if (query.data === "shop") {
    bot.sendMessage(
      query.message.chat.id,
      "🛍 المنتجات:\n\n1️⃣ حساب شهر = 5$\n2️⃣ حساب 3 أشهر = 10$"
    );
  }

  if (query.data === "contact") {
    bot.sendMessage(
      query.message.chat.id,
      "📞 تواصل ويا الأدمن:\n@username"
    );
  }
});
