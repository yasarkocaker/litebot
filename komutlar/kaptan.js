const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const embed = new Discord.MessageEmbed()
    .setAuthor("Adnan Karadeniz.Başında bir yerlerde kaptan olacaktı.")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor("RANDOM")
    .setImage(
      "https://cdn.discordapp.com/avatars/574498950212485121/7e7f495b5c2c0fbd0fd7afb7d4669f59.png?size=2048"
    );
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["capitan"],
  permLevel: 0
};

exports.help = {
  name: "kaptan",
  description: "adnan sparrow",
  usage: "capitan"
};
