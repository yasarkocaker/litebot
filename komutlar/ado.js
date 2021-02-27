const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.MessageEmbed()
    .setDescription("**LiteBot**")
    .setColor(0x00ae86)
    .addField("Mırcık", "Adnan")
    .addField(
      "Özellikleri",
      `
        *İleri derece tarih profesörü
        *Aşırı derecede yakışıklı
        *Sivri zekalı
        *Oyun prosu
   *Johny Deep'e ondan daha çok benziyor :smile:
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
  name: "ado",
  description: "Hakkında bilgi verir",
  usage: "LiteBot"
};
