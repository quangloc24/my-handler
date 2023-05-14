const {
  Client,
  GatewayIntentBits,
  Partials,
  Collection,
} = require("discord.js");
const config = require("./config.json");
const ms = require("ms");
const mongoose = require("mongoose");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
  allowedMentions: {
    parse: ["everyone", "users", "roles"],
    repliedUser: false,
  }
});

client.config = config;
client.color = config.color;
client.commands = new Collection();
client.subCommandsGroup = new Collection();
client.subCommands = new Collection();
client.events = new Collection();
client.selectMenus = new Collection();



const Handlers = ["errorHandler"];
Handlers.forEach((handler) => {
  require(`./Handlers/${handler}`)(client);
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
const { loadSelectMenus } = require("./Handlers/selectMenuHandler");



module.exports = client;
client.login(client.config.token).then(async () => {
  loadEvents(client)
  loadCommands(client)
  loadSelectMenus(client)
  mongoose
    .set("strictQuery", false)
    .connect(client.config.mongoUrl)
    .then(() => console.log("Connected to the database."));
});
