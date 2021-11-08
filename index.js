// Imports
const fs = require('fs')
const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');

// Code
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', c => {
    console.log(`Logged in as ${c.user.tag} | Administrative Admin Login: Approved`);
});

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command)
}

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command! Check console for details!', ephemeral: true});
    }
})

client.login(token);