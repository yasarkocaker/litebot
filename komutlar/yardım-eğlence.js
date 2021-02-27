const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  const juke = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setAuthor(`LiteBot | Eğlence Komutları`, client.user.avatarURL())
    .setThumbnail(client.user.avatarURL())
    .addField(
      "**Genel Komutlar**",
      "`afew`, `ara155`, `ateşle`, `dans`, `fbi`, `kafasalla`, `kaçcm`, `sigarayak`,`pixel`, `galatasaray` , `beşiktaş`, `fenerbahçe`, `siktirgit`, `romen`, `kuş-dili`"
    )
    .addField(
      "**Oyun Komutları**",
      "`1v1`, `aşkölçer`,`efkarölçer` `balıktut`, `boks`, `desteaç`, `doğrulukcesaret`, `kasaaç`, `soygunyap`, `zarat`, `deaglevs`, `slot`"
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
  name: "eğlence",
  category: "Yardım",
  description: "Yardım kategorilerini gösteir."
};
