const { MessageEmbed } = require("discord.js");
exports.run = (Bot, Mesaj, Argüman) => {
  const Sayı = Number(Argüman[0]);

  const Hata = new MessageEmbed()
    .setColor("#7f0000")
    .setTitle("Hata!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL);

  const Başarılı = new MessageEmbed()
    .setColor("#007f00")
    .setTitle("Başarılı!")
    .setFooter(`${Mesaj.author.username} Tarafından İstendi.`,Mesaj.author.avatarURL);
  {
    if (!Mesaj.member.hasPermission("MANAGE_MESSAGES")) {
      Hata.setDescription("Bu komutu kullanmak için Yetkiniz yok!");
      Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
      
    } else {
      if (!Sayı) {
        Hata.setDescription("Bir sayı belirtiniz.");
        Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
      } else {
        if (Sayı < 101) {
          Başarılı.setDescription(`${Sayı} adet mesaj başarıyla silindi!`);
          Mesaj.channel.send(Başarılı).then(msg => msg.delete(5000));
          Mesaj.channel.bulkDelete(Sayı);
        }
        if (Sayı > 100) {
          Hata.setDescription("En fazla 100 adet mesaj silebilirsiniz.");
          Mesaj.channel.send(Hata).then(msg => msg.delete(5000));
        }
      }
    }
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Temizle", "sil", "temizle"],
  permLevel: 0
};

exports.help = {
  name: "Sil"
};