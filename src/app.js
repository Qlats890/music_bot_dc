require('dotenv').config({})

const Discord   = require('discord.js'),
      {Intents} = require('discord.js'),
      {Collection} = require('discord.js')

const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
//modul untuk membaca file
bot.commands = new Collection();
const fs = require('fs')

const functions = fs.readdirSync('../src/function').filter(file => file.endsWith('.js'))
const events = fs.readdirSync('../src/event').filter(file => file.endsWith('.js'))
const commands = fs.readdirSync('../src/commands')

for(file of functions){
  require(`./function/${file}`)(bot)
}


bot.handleEvents(events,"./src/event")
bot.handleCommands(commands,"./src/commands")
// bot.login(process.env.TOKEN)
bot.login('ODkzNTM2NTQxNjY4OTM3NzI4.YVc4wA.W6pbsu_dX3EsuiAOWJVyrDLwbYk')


//---------------------------------------------------------------------------------------------------------------







// prefix = '!'

// bot.on("messageCreate",(message)=>{
//   console.log(message.content)
//   if(message.content[0] === prefix){
//     console.log(message.content)
//     switch(message.content.substring(1,message.content.length)){
//       case "ping" : 
//         message.reply("kaget")
//     }}});