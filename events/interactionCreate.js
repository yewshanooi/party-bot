/* eslint-disable no-sync */
const { InteractionType } = require('discord.js');

module.exports = async interaction => {
    const { client } = interaction;
    if (interaction.type !== InteractionType.ApplicationCommand) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	if (command.guildOnly && interaction.channel.type === 1) {
		return interaction.reply({ embeds: [global.errors[0]] });
	}


	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'Error: There was an error while executing this command!' });
	}
};