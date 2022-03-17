const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const { QueryType } = require("discord-player")

module.exports = {
	data: new SlashCommandBuilder()
		.setName("create")
		.setDescription("create anything")
		.addSubcommand((subcommand) =>
			subcommand
				.setName("channel")
				.setDescription("channel")
				.addStringOption((option) => option.setName("name").setDescription("name").setRequired(true))
		)
		.addSubcommand((subcommand) =>
			subcommand
				.setName("voicechannel")
				.setDescription("voicechannel")
				.addStringOption((option) =>
					option.setName("name").setDescription("name").setRequired(true)
				)
		),
	run: async ({ client, interaction }) => {
        if(interaction.options.getSubcommand() === "channel"){
            let name = interaction.options.getString("name")
            interaction.guild.channels.create(name, {
                type: 'GUILD_TEXT',
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            })
        }
        if(interaction.options.getSubcommand() === "voice channel"){
            let name = interaction.options.getString("name")
            interaction.guild.channels.create(name, {
                type: 'GUILD_VOICE',
                permissionOverwrites: [{
                    id: interaction.guild.id,
                    allow: ['VIEW_CHANNEL'],
                }]
            })
        }
    }
}