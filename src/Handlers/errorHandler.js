const { Client, EmbedBuilder } = require("discord.js");


module.exports = async (client) => {
  const Embed = new EmbedBuilder().setColor("Red").setTimestamp();
  const ChannelID = client.config.log

  process.on("unhandledRejection", (reason, p) => {
    console.log(reason, p);

    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;

    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Unhandled Rejection/Catch:\n\n** ```" + reason + "```"
        ).setTitle(`⚠ | Error Encountered`),
      ],
    });
  });

  process.on("uncaughtException", (err, origin) => {
    console.log(err, origin);

    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;

    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Uncaught Exception/Catch:\n\n** ```" +
            err +
            "\n\n" +
            origin.toString() +
            "```"
        ).setTitle(`⚠ | Error Encountered`),
      ],
    });
  });

  process.on("uncaughtExceptionMonitor", (err, origin) => {
    console.log(err, origin);

    const Channel = client.channels.cache.get(ChannelID);
    if (!Channel) return;

    Channel.send({
      embeds: [
        Embed.setDescription(
          "**Uncaught Exception/Catch (MONITOR):\n\n** ```" +
            err +
            "\n\n" +
            origin.toString() +
            "```"
        ).setTitle(`⚠ | Error Encountered`),
      ],
    });
  });
};
