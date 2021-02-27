const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send( 'Botun Pingi Hesaplanıyor! ').then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ws.ping).toFixed(2)
        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Bot Pingim !`)
        .setColor(0xff2f2f)
        .addField("📶 Mesaj Gecikmesi", `${diff}ms`, true)
        .addField("💻 Bot Gecikmesi", `${API}ms`, true)
        message.edit(embed);
      
    });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'ping',
    category: 'INFO'
} 