const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

const clientId = '893536541668937728';
const guildId = '888997591130472468';

module.exports = (bot) => {
    bot.handleCommands = async (commands, path) => {
        bot.commandArray = [];
        for (folder of commands) {
            const commandFiles = fs
                .readdirSync(`../${path}/${folder}`)
                .filter((file) => file.endsWith(".js"));

            for (const file of commandFiles) {
                const command = require(`../commands/${folder}/${file}`);
                // Set a new item in the Collection
                // With the key as the command name and the value as the exported module
                bot.commands.set(command.data.name, command);
                bot.commandArray.push(command.data.toJSON());
            }
        }
        


        // Place your client and guild ids here
        


        const rest = new REST({ version: '9' }).setToken('ODkzNTM2NTQxNjY4OTM3NzI4.YVc4wA.W6pbsu_dX3EsuiAOWJVyrDLwbYk');

        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: bot.commandArray },
                );

                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();

    };
};
