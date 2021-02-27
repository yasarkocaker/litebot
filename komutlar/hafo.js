const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.MessageEmbed()
    .setDescription("**LiteBot**")
    .setColor(0x00ae86)
    .addField("Mırcık", "Ahmet")
    .addField(
      "Özellikleri",
      `
        *İleri derece egoist
        *Herşeyde en iyi olma arzusu
        *Beceriksiz Oyuncu
        *Satranç dehası
   *Atanamamış İronman :smile:
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
  name: "hafo",
  description: "Hakkında bilgi verir",
  usage: "LiteBot"
};
