const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`LiteBot | Kullanıcı Komutları`, client.user.avatarURL()) 
.setThumbnail(client.user.avatarURL())
      .addField('**Genel Komutlar:**','`atasözü`, `banneryazı`, `dalgageç`, `dcdekiyıkık`, `espri`, `ilginçbilgi`, `yaş`, `lafsok`,`tdk`, `replik`, `spoiler`, `küfür`, `tekerleme`')
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
    name: 'kullanıcı',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};