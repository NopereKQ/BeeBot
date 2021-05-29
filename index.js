require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "!";
const TOKEN = process.env.TOKEN;

bot.on('ready', () => {
    console.info(`Połączono z botem ${bot.user.tag}!`)
})

bot.on('message', msg => {
    if (msg.content === `${prefix}help`) {
        msg.reply('BeeBot!');
    }
})

bot.on('message', (msg) => {
    if (msg.channel.type === "dm") {
        if (!msg.author.bot) {
            let embed = new Discord.MessageEmbed()
            .setTitle("Blokada DM!")
            .setDescription("Przestań do mnie pisać! \n Pisz do <@734148477445079162>")
            .setColor("#f14b4b")
            msg.reply(embed)
        }
    }
})

bot.login(TOKEN);