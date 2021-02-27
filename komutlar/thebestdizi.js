const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setColor('Gold')
    .setTimestamp()
    .addField(`Tarihteki En iyi Dizi`,'**Dark**')
    message.channel.send(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['thebest'],
  permLevel: 0
};

exports.help = {
  name: 'en-iyi-dizi',
  description: 'Yapimcimi Gosterir.',
  usage: 'yapimcim'
};




