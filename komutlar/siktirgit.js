const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.MessageEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('RANDOM')
    .setTimestamp()
    .addField("**Ben mi Gideyim?**","Sen bana siktir git diyemezsin asıl sen siktir git yayık suratlı götoş")
    message.channel.send(ozelmesajkontrol) }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sg'],
  permLevel: 0
};

exports.help = {
  name: 'siktirgit',
  description: 'bot replik söyler',
  usage: 'siktirgit'
};




