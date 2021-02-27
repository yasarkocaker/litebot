const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const juke = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setAuthor(`LiteBot | Yetkili Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "**Komutlar**",
      "`yetkiler`,`bot-kontrol`, `ping`, `icon`, `id`, `stats`, `user`, `linkkısalt`, `çek`, `ban`, `restart`, `temizle`, `üyedurum`, `duyuru`"
    )
    .setFooter(``, client.user.avatarURL())
    .setTimestamp();
  message.channel.send(juke).catch();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yetkili",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};