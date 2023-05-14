const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("subcommand")
    .setDescription("test subcommand")
    .setDMPermission(false)

    .addSubcommand((options) => options
    .setName("subcommandrun")
    .setDescription("this is run the sub command"))
}