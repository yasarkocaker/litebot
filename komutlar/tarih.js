const Discord = require('discord.js');
const useful = require('useful-tools')

exports.run = async (client, message, args) => {
  if(message.author.bot || message.channel.type === "dm") return;
  const tarih = new Date()
 
  const arrifentembed = new Discord.MessageEmbed()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField("Tarih", useful.tarih(tarih, 'G 0A Y'), true)
  .setThumbnail("http://www.orjinalsaat.org/wp-content/uploads/2015/10/cropped-icon.png")
  .setFooter("Tarih | Tarih", client.user.avatarURL())
  return message.channel.send(arrifentembed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tarih',
  description: 'Tarihi gösterir.',
  usage: 'tarih'
};