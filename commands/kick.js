const { SlashCommandBuilder } = require('@discordjs/builders');
const {Permissions} = require('discord.js');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('ban')
        .setDescription('Bans user mentioned!')
        .addMentionableOption(option =>
            option.setName('member')
                .setDescription('Member you want to Ban!')
                .setRequired(true)
                )
        .addStringOption(option => 
            option.)
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        if (member.permissions.has(Permissions.ADMINISTRATOR))  {
            member.kick();
            console.log(`${interaction.user.tag} (UID: ${interaction.user.id}) has kicked ${member.tag} (UID: ${member.id})`)
        }
    }
}