// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
require('dotenv').config({})
// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);









// require('dotenv').config({})

// const Discord   = require('discord.js'),
//       {Intents} = require('discord.js')
// const bot = new Discord.Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

// bot.on("ready",()=>{
//   console.log("ON !");
// })

// prefix = '!'

// bot.on("messageCreate",(message)=>{
//   console.log(message.content)
//   if(message.content[0] === prefix){
//     console.log(message.content)
//     switch(message.content.substring(1,message.content.length)){
//       case "ping" : 
//         message.reply("kaget")
//     }}});

// bot.login(process.env.TOKEN)