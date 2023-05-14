module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        if(!interaction.isAutocomplete()) return
        const command = client.commands.get(interaction.commandName)

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.autocomplete(interaction, client);
		} catch (error) {
			console.error(error);
		}
    }
}