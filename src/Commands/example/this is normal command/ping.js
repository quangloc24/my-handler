const { Client, SlashCommandBuilder } = require("discord.js");
module.exports = {
  //if this is dev or owner command add
  //dev: true
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Get latency of the bot.")
    .setDMPermission(false),

  async execute(interaction, client) {
    await interaction.reply(`Ping: ${client.ws.ping}ms `)
  },
};
