const { loadFiles } = require("../Functions/fileLoader");

async function loadCommands(client) {
  console.time("Commands Loaded");

  await client.commands.clear();
  await client.subCommands.clear();
  await client.subCommandsGroup.clear();

  client.commands = new Map();
  client.subCommand = new Map();
  client.subCommandGroup = new Map();
  
  const commands = new Array();
  const commandsArray = new Array();

  const files = await loadFiles("Commands");
  files.forEach((file) => {
    try {
      const command = require(file);

      if (command.subCommandGroup)
        return client.subCommandsGroup.set(command.subCommandGroup, command);
      if (command.subCommand)
        return client.subCommands.set(command.subCommand, command);

      client.commands.set(command.data.name, command);

      commands.push({ Command: command.data.name, Status: "✅" });
      commandsArray.push(command.data.toJSON());
    } catch (error) {
      commands.push({
        Command: file.split("/").pop().slice(0, -3),
        Status: "❌",
      })
      console.log(error);
    }
  });
  client.application.commands.set(commandsArray);
  console.table(commands, ["Command", "Status"]);
  console.info("\n\x1b[36m%s\x1b[0m", "Loaded Commands.");
  console.timeEnd("Commands Loaded");
}

module.exports = { loadCommands };

