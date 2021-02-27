const Discord = require("discord.js");

exports.run = function(client, message) {
  const embed = new Discord.MessageEmbed()
    .setDescription("**LiteBot**")
    .setColor(0x00ae86)
    .addField("Mırcık", "Alikaya")
    .addField(
      "Özellikleri",
      `
        *İleri derece ingiliz aksanı
        *Kendini beğenmiş totoş
        *Yakışıklı ve fidınıscı erkek
        *1024x768 Gamer
        *Bir rivayete göre az kalsın burun olacakmış :smile:
   `,
      true
    );

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "ali",
  description: "Hakkında bilgi verir",
  usage: "LiteBot"
};
