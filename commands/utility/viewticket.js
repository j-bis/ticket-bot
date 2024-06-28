const { SlashCommandBuilder } = require('discord.js');
const fs = require('node:fs');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('viewticket')
		.setDescription('View a work ticket')
        .addStringOption(option =>
		    option.setName('ticketnumber')
			    .setDescription('ticket number to open')
                .setRequired(true)),
	async execute(interaction) {


		//get number of ticket 
		const tnum = interaction.options.getString('ticketnumber');
		console.log(tnum);
		//const response = openJSON(tnum);
		//console.log(response);
		
		//functions here to test
		// const data = fs.readFileSync(`./tickets/${tnum}.json`, {encoding:'utf8'});

		// ticket = JSON.parse(data);
		// const response = `Ticket #${tnum}\nIssue: ${ticket.name}\nDescription: ${ticket.description}`;	
		//
		
		//console.log(openJSON(tnum));

		await interaction.reply(openJSON(tnum));
	},
};

function openJSON(tnum) {
	return buildResponse(tnum, fs.readFileSync(`./tickets/${tnum}.json`, {encoding:'utf8'}));
}


function buildResponse(tnum, data) {
	ticket = JSON.parse(data);
	return `Ticket #${tnum}\n**Issue:** ${ticket.name}\n**Description:** ${ticket.description}`;
}