const { SlashCommandBuilder } = require('discord.js');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('give a number 1-100'),
	async execute(interaction) {
        let num = Math.floor(Math.random() * 100);
		await interaction.reply(num.toString());
	},
};
