module.exports = (bot) => {
    bot.handleEvents = async (event,path) => {
        for (const file of event) {
            const event = require(`../event/${file}`);
            if (event.once) {
                bot.once(event.name, (...args) => event.execute(...args,bot));
            } else {
                bot.on(event.name, (...args) => event.execute(...args,bot));
            }
        }
    }
}