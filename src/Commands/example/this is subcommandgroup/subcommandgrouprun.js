module.exports = {
  subCommandGroup: "subcommandgroup.subcommandgroups.subcommandgrouprun",

  async execute(interaction, client) {
    await interaction.reply("this is subcommandgroup")
  },
};
