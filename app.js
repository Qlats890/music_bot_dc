require('dotenv').config({})

const Discord   = require('discord.js'),
      {Intents} = require('discord.js')
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

bot.on("ready",()=>{
  console.log("ON !");
})

bot.on("messageCreate",(message)=>{
  // console.log(message.content);
  if(message.content == '!ping'){
    message.channel.send('Pong')
    // console.log(message.channel);
  }
});

bot.login(process.env.TOKEN)