const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.MessageEmbed()
    .setDescription("**LiteBot**")
    .setColor(0x00ae86)
    .addField("Mırcık", "Yaşar")
    .addField(
      "Özellikleri",
      `
        *İleri derece boş bilgi birikimi
        *aşırı derece asosyallik
        *Kendini beğenmiş egoist ve pinti
        *Korkak Gamer
   *Bir rivayete göre kendisi fosilmiş :smile:
   `,
      true
    );

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "maytap",
  description: "Hakkında bilgi verir",
  usage: "LiteBot"
};
