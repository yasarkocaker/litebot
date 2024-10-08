const Discord = require ('discord.js');
module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first() || message.author;
    if (!args[0]) return message.channel.send("**Şarkı bilgisini bulmam için Spotify'dan şarkı dinleyen birisini etiketlemen lazım.**")
  
    if (user.presence.activites.name === 'Spotify' && user.presence.activites.type === 2) {
        try {
            var trackImg = user.presence.activites.assets.largeImageURL();
            var trackUrl = `https://open.spotify.com/track/${user.presence.activites.syncID}`;
            var trackName = user.presence.activites.details;
            var trackAlbum = user.presence.activites.assets.largeText;
            var trackAuthor = user.presence.activites.state;

            const embed = new Discord.MessageEmbed()
                .setAuthor('Spotify Şarkı Bilgisi', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2000px-Spotify_logo_without_text.svg.png')
                .setColor(0xdb954)
                .setThumbnail(trackImg)
                .setFooter(`LiteBot Spotify Sistemi ${message.author.username} tarafından istendi.`, "https://cdn.discordapp.com/emojis/515260605347659777.png?v=1")
                .setDescription(`
\ **Spotify**'da dinlediği şarkı;  \**${trackName}**\n
\ **Spotify**'da dinlediği albüm;  \**${trackAlbum}**\n
\ **Spotify**'da dinlediği sanatçı;  \**${trackAuthor}**\n
`)
                .addField('Spotify\'da Dinlediği Şarkı Linki;', `**[${trackUrl}](${trackUrl})**`, false);
                
            return message.channel.send(embed);

        } catch (error) {
            return message.channel.send(` **${user.tag}** kullanıcısı şuanda **Spotify**<:spotify:515260605347659777>'dan şarkı dinlemiyor.`);
        }

    } else {
        return message.channel.send(`**${user.tag}** kullanıcısı şuanda Discord'una **Spotify**<:spotify:515260605347659777>'ı eklememiş`);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['spo', 'spoti', 'soti', 'spotif', 'spotifyy'],
  permLevel: 0
};

exports.help = {
  name: 'spotify',
  description: '',
  usage: 'spotify'
};
