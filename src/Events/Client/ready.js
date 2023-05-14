const { loadCommands } = require("../../Handlers/commandHandler");
const { loadSelectMenus } = require("../../Handlers/selectMenuHandler");

module.exports = {
  name: "ready",
  once: true,
  async execute(client) {

    console.log(`Logged in as ${client.user.username}`);

    //loadCommands(client);
    //loadSelectMenus(client);

  },
};
