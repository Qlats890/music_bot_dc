require('dotenv').config({})

const Discord   = require('discord.js'),
      {Intents} = require('discord.js')
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

bot.on("ready",()=>{
  console.log("ON !");
})

prefix = '!'

bot.on("messageCreate",(message)=>{
  console.log(message.content)
  if(message.content[0] === prefix){
    console.log(message.content)
    switch(message.content.substring(1,message.content.length)){
      case "ping" : 
        message.reply("kaget")
    }}});

bot.login(process.env.TOKEN)