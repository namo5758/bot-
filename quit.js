const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("quit").setDescription("Stops the bot and clears the queue"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("บอทไม่ได้อยู่ในห้องนี่?")

		queue.destroy()
        await interaction.editReply("ไปละไอพวกไก่!")
	},
}