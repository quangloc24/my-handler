module.exports = {
  name: "interactionCreate",

  async execute(interaction, client) {
    if (!interaction.isStringSelectMenu()) return;

    const selectMenu = client.selectMenus.get(interaction.customId);

    if (!selectMenu) return;

    if (selectMenu == undefined) return;

    await selectMenu.execute(interaction, client);
  },
};
