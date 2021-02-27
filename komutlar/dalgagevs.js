const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

var prefix = ayarlar.prefix;




exports.run = (bot, message, args) => {
    if (args.length < 1) return message.channel.send("**dalga geçmek haram kardeş kullanma bu komutu**")
    message.channel.send(args.map(randomizeCase).join(':point_right::ok_hand:'));
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dalgageç',
  description: 'Başkaları ile dalga geçer.',
  usage: 'dalgageç <mesaj>'
};