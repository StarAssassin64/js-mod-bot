const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('unban')
        .setDescription('Unbans user by their UserID!'),
    async execute(interaction) {
        const id = interaction.option.get('target')?.value;
        guild.members.unban(id)
    }
}