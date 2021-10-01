require('dotenv').config({})

const Discord   = require('discord.js'),
      {Intents} = require('discord.js')
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] })

bot.on("ready",()=>{
  console.log("ON !");
})

// console.log(process.env.TOKEN);
bot.login(process.env.TOKEN)