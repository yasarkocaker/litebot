const Discord = require("discord.js");

exports.run = (client, message, args) => {
  var replik = [
    "abe neresidir burası hay amına kayayım hemi",
    "püü yiyişiyonuzmu laan siz",
    "Delirttin lan beni lan beni delirttiniz lann",
    "Bana bi vur beni bi gaza getir",
    "Sana fazlada 50 beygir takarım heea adam ol ibnetor",
    "Abe neresidir burasi bea hay anasinin avradinin bacisina koyayim hemi",
    "Sen ne yaylana yaylana konuşuyon yarrram",
    "Sen kimsinde benim yerimde olacan lollipoooop",
    "Bi bitmediniz ammmınna koyuum",
    "Üstüme sıçacak eşşeloğlu eşşek",
    "Herşeyin şuçlusu kabahatlisi benimiğğğimmm",
    "Simay benim karım ulaan",
    "Utanmıyonuz mu lan farat abinizin mektubunu okumaya",
    "Şu halimize bak şu halimize bak!",
    "Benim adım Erşan Kuneri pornocunuyum ben donla sevişicek dedim",
    "Sidikli fikret vitaminsiz asımm",
    "şşşt sarılı titirettin beni titirettiğğn",
    "Götünüzden element uydurmayın",
    "Sevgilini bulamıyacağim bir yere sakla tmmmı",
    "Kim kimi koparıyo kendi payının amuakoyim",
    "Bizi bitirdin bee bizi bitirdin bee",
    
  ];
  var replik =replik[Math.floor(Math.random(1) * replik.length)];
  const replikembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Efsane Replikler`, message.author.avatarURL())
    .setDescription(`${replik}`);
  return message.channel.send(replikembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [""],
  permLevel: 0
};

exports.help = {
  name: "replik",
  description: "Dizilerden replik söyler",
  usage: "replikler"
};
