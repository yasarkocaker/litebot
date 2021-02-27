const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`LiteBot | Mırcık Komutları`, client.user.avatarURL()) 
.setThumbnail(client.user.avatarURL())
      .addField('**Üye Komutları**','`ado`, `ali`, `hafo`, `maytap`, `kaptan`, `kerpeten`,')
    .setFooter(``, client.user.avatarURL())
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'mırcık',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};