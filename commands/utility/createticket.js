const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createticket')
		.setDescription('Create a work ticket')
        .addStringOption(option =>
		    option.setName('ticketname')
			    .setDescription('main ticket issue')
                .setRequired(true))
		.addStringOption(option =>
			option.setName('description')
				.setDescription('extra details on the ticket')),
	async execute(interaction) {
		//get this ticket number by seeing how many tickets there are already
		const ticketNum = fs.readdirSync('./tickets/').length + 1;
		//get name of ticket 
		const tname = interaction.options.getString('ticketname');
		const tdesc = interaction.options.getString('description') ?? ('');

		buildJSON(ticketNum, tname, tdesc)
		await interaction.reply('ticket created!');
	},
};

function buildJSON(ticketNum, tname, tdesc) {
	fs.appendFile(`./tickets/${ticketNum}.json`, `${makeContents(tname,tdesc)}`, (err, data) => {
		if (err) throw err;
	});
}

function makeContents(tname, tdesc) {
	return `{
		"name":"${tname}",
		"description":"${tdesc}"
}`;
}