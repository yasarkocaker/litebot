const Discord = require("discord.js");
const client = new Discord.Client();
const TCMB_Doviz = require("tcmb-doviz");
const Doviz = new TCMB_Doviz();
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;
exports.run = async (client, message, args) => {
  if (!args[0]) {
    let embed = new Discord.MessageEmbed();
    embed.setDescription('Güncel döviz Kuraları')
    embed.setColor("RED");
    message.channel.send({ embed: embed });
  }
  if ((args[0] === "USD", "usd")) {
    const res = await Doviz.getKur("USD");
    const tarih = await Doviz.guncelTarih();
    let embed = new Discord.MessageEmbed();
    embed.setAuthor(
      `${res.isim} Güncel Kur Analizi`,
      message.author.avatarURL()
    );
    embed.setDescription(
      `Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`
    );
    embed.setColor("RED");
    embed.addField(`Alış`, res.alis,);
    embed.addField(`Satış`, res.satis, true);
    embed.addField(`Birim Kodu`, res.kod, true);
    message.channel.send({ embed: embed });
  }
  if ((args[0] === "EUR", "eur")) {
    const res = await Doviz.getKur("EUR");
    const tarih = await Doviz.guncelTarih();
    let embed = new Discord.MessageEmbed();
    embed.setAuthor(
      `${res.isim} Güncel Kur Analizi`,
      message.author.avatarURL()
    );
    embed.setDescription(
      `Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`
    );
    embed.setColor("RED");
    embed.addField(`Alış`, res.alis);
    embed.addField(`Satış`, res.satis, true);
    embed.addField(`Birim Kodu`, res.kod,true);
    message.channel.send({ embed: embed });
  }
  if ((args[0] === "GBP", "gbp")) {
    const res = await Doviz.getKur("GBP");
    const tarih = await Doviz.guncelTarih();
    let embed = new Discord.MessageEmbed();
    embed.setAuthor(
      `${res.isim} Güncel Kur Analizi`,
      message.author.avatarURL()
    );
    embed.setDescription(
      `Bilgiler [Merkez Bankası(TCMB)](https://www.tcmb.gov.tr/kurlar/kurlar_tr.html) Üzerinden Çekilmektedir. \n \`\`${tarih}\`\` tarihinde güncellenmiştir.`
    );
    embed.setColor("RED");
    embed.addField(`Alış`, res.alis);
    embed.addField(`Satış`, res.satis, true);
    embed.addField(`Birim Kodu`, res.kod,true);
    message.channel.send({ embed: embed });
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dolar"],
  permLevel: 0
};
exports.help = {
  name: "döviz",
  description: "Güncel Döviz kurlarını gösterir.",
  usage: "döviz"
};
