const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
	 .setName("subcommandgroup")
    .setDescription("test subcommandgroup")
    .setDMPermission(false)

    .addSubcommandGroup((options) => options
    .setName("subcommandgroups")
    .setDescription("this is sub command group")
    .addSubcommand((options) => options
   	.setName("subcommandgrouprun")
   	.setDescription("this is run the sub command group ")))

 }