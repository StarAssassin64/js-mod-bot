const { SlashCommandBuilder } = require('@discordjs/builders');
const { Permissions, Guild } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans user mentioned!'),
    async execute(interaction) {
        const user = interaction.option.getUser('target');
        if (member.permissions.has(Permissions.ADMINISTRATOR)) {
            Guild.members.ban(user);
        }
    }
}