module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return
        const command = client.commands.get(interaction.commandName)
        if(!command) return interaction.reply({ content: `This command is outdated.`, ephemeral: true})

        if (command.dev && command.dev === true && !client.config.developer.includes(interaction.user.id))
        return interaction.reply({ content: `This command is only available to the developers.`, ephemeral: true})

        const subCommand = interaction.options.getSubcommand(false)
        const subCommandGroup = interaction.options.getSubcommandGroup(false)
        if(subCommandGroup) {
            const subCommandFile = client.subCommandsGroup.get(`${interaction.commandName}.${subCommandGroup}.${subCommand}`)
            if(!subCommandFile) return interaction.reply({ content: `This sub command is outdated.`, ephemeral: true})
            subCommandFile.execute(interaction, client)
        } else if(subCommand) {
            const subCommandFile = client.subCommands.get(`${interaction.commandName}.${subCommand}`)
            if(!subCommandFile) return interaction.reply({ content: `This sub command is outdated.`, ephemeral: true})
            subCommandFile.execute(interaction, client)
        } else command.execute(interaction, client)
    }
}