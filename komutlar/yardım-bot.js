const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  
    const juke = new Discord.MessageEmbed()
    .setColor('GOLD')
    .setAuthor(`LiteBot | Bot Komutları`, client.user.avatarURL()) 
.setThumbnail(client.user.avatarURL())
      .addField('**Komutlar:**', ' `hesapla`, `avatar`, `havadurumu`, `kitapara`, `oylama`, `rolliste`, `saat`, `tarih`, `sor`, `yapımcım`, `yazdır`,`spotify`, `steam`, `youtube`, `çeviri`, `döviz`, `bitcoin`')
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
    name: 'bot',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
};