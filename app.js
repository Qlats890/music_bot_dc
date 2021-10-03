require('dotenv').config({})

const Discord   = require('discord.js'),
      {Intents} = require('discord.js')
const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS] })

bot.on("ready",()=>{
  console.log("ON !");
})

bot.on("messageCreate",message=>{
  console.log(message.content);
  // if(message.content[0] == '!'){
  //   console.log(message);
  //   switch(message.content.slice(1,-1)){
  //     case "ping" : 
  //       message.reply("kaget")
  //   }
  // }
});

bot.login(process.env.TOKEN)