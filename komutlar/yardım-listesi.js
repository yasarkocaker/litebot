const Discord = require("discord.js");
const loglar = require("../loglar.json");

var prefix = loglar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.MessageEmbed()
    .setTitle("Komut Listesi")
    .setDescription("")
    .setColor(0x00ffff)
    .setDescription("**•** **.yetkili** Sunucuyu yönetmek için gerekli olan komutlar.\n**•** **.eğlence** Eğlenmek için bulunan komutlar.\n**•** **.kullanıcı** Kullanıcılar için komutlar.\n**•** **.bot** Bot ile alakalı komutlar.\n**•** **.mırcık** Üyelerle alakalı bilgi komutları."
    )
    
    .setFooter("LiteBot | Yardım Komutları");

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send(
        "asciidoc",
        `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` +
          prefix +
          `${command.help.usage}`
      );
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Tüm komutları gösterir.",
  usage: "yetkili "
};
