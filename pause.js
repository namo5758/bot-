const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pauses the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("บอทไม่ได้อยู่ในห้องนี่?")

		queue.setPaused(true)
        await interaction.editReply("หยุดเพลงให้ละไอพวกเอ๋อ /resume เพื่อฟังเพลงต่อ")
	},
}