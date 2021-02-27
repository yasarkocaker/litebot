const Discord = require("discord.js");
exports.run = function(client, message, args) {
  const embed = new Discord.MessageEmbed()
    .setAuthor("Lakabım ne biliyomusun ? Kerpeten Aliğğğ niye çaktınmığğ ")
    /*
     * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
     */
    .setColor("RANDOM")
    .setImage(
      "https://cdn.discordapp.com/avatars/763321984921763860/5db4d55ce05ef6838cdd3a3de368f99d.png?size=2048"
    );
  /*
   * Takes a Date object, defaults to current date.
   */

  message.channel.send({ embed });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kerpo"],
  permLevel: 0
};

exports.help = {
  name: "kerpeten",
  description: "kerpeten ali",
  usage: "alkış"
};
