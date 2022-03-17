const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("resume").setDescription("Resumes the music"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("ไม่มีบอทอยู่ในห้องนี่?")

		queue.setPaused(false)
        await interaction.editReply("เล่นเพลงให้ต่อละ /pause เพื่อหยุดเพลงน่ะถ้าพวกมึงเบือ")
	},
}