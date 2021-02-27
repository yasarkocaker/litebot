const Discord = require('discord.js')
exports.run = (client, message, args) => {
	try {
		const embed = new Discord.MessageEmbed()
			.addField(`Sunucuda, bulunmakta olan roller;`, message.guild.roles.cache.filter(r => r.name !== "@everyone").map(r => r).join(' , '))
      .setFooter('LiteBot, iyi eğlenceler diler :D', client.user.avatarURL())
			.setColor(0x808080)
			.setTimestamp()
		message.channel.send({embed})
	} catch (err) {
		const embed = new Discord.MessageEmbed()
			.addField(`Sunucuda, bulunmakta olan roller;`, 'Çok fazla rol bulunmakta veya rol bulunmamakta!')
			.setColor(0x00ffff)
			.setTimestamp()
		message.channel.send({embed})
	}
}
exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['roles'],
	permLevel: 2,
	kategori: 'kullanıcı'
}
exports.help = {
	name: 'roller',
	description: 'Sunucuda bulunan rolleri gösterir.',
	usage: 'roller'
}
