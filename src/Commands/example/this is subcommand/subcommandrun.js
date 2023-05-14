module.exports = {
  subCommand: "subcommand.subcommandrun",

  async execute(interaction, client) {
    await interaction.reply("this is subcommand")
  },
};
