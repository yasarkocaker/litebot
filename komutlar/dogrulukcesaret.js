const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  var dogruluk = [
    "Telefonunda arattığın en son şey nedir ?",
    "Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?",
    "Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?",
    "Sevdiğini itiraf etmekten utandığın film hangisidir?",
    "En utan verici kişisel bakım alışkanlığın nedir?",
    "En son ne zaman ve ne için özür diledin?",
    "utanç verici kokularınızın çoğu nereden geliyor?",
    "Hiç sevgilini anlatmayı düşündün mü?",
    "Hiç sevgilini biriyle aldattın mı?",
    "Boxer mı yoksa külot mu?",
    "Hiç havuza veya denize işedin mi?",
    "Kimsenin bilmeyeceği garanti olsa kimi öldürmek isterdin?",
    "Başkası için aldığın en ucuz hediye nedir?",
    "Zamanının çoğunu en çok hangi uygulamada harcıyorsun?",
    "Otobüste yaptığın en tuhaf şey nedir?",
    "Hiç toplum içinde çıplak kaldın mı?",
    "Çıkmak isteyeceğin en genç kişi kaç yaşında olurdu?",
    "Hiç toplum içindeyken burnunu karıştırdın mı?",
    "Hiç yaşın hakkında yalan söyledin mi?",
    "Gece geç saatte yaptığın en utanç verici şey nedir?",
    "Duş almadan en uzun süre ne kadar durdun?",
    "Milli oldunmu ?",
    "Hiç terkedildinmi ?",
    "çıktığın en yaşlı yaş ?",
    "Hiçbir sonucu olmayacağını bilsen ne yapmak isterdin?",
    "Bugün şansın olsa lise aşkınla çıkar mısın?",
    "Sence bu sunucuda en kötü giyinen kişi kimdir?",
    "Hiç asansörde osurdun mu?",
    "Hiç aynada öpüşmeyi denedin mi?",
    "Hiç seksi bir fotoğrafını çekmeyi denedin mi?",
    "Hayalindeki erkek/kız nasıl birisi?",
    "Şu an hangi renk iç çamaşırı giyiyorsun?"
  ];
  var cesaret = [
    "İğrenç bir ses tonuyla şarkı söyle",
    "Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat",
    "Whatsappındaki son mesajlaşmanı bize oku",
    "Çok yüksek bir sesle 3 saniye bağır",
    "3 dakika boyunca  bebek taklidi yap ",
    "Tiktok indir :)",
    "Discord adını utanç verici bir şey ile değiş",
    "Sevgilinin adını yaz",
    "Beş dakikalığında discord'da birinin kölesi ol",
    "Bir köpek gibi havla",
    "En iyi LiteUP de :)",
    "Çıktığın en kötü ve en iyi kişiyi açıkla.",
    "Youtuebeden rastgele bir kanala abone ol",
    "Telegramda +18 bir gruba katıl",
    "Boydan bir fotoğrafını at :)",
    
    
  ];
  var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
  var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)];

  message.channel.send("**doğruluk(d)** mu yoksa **cesaret(c)** mi?");
  let uwu = false;
  while (!uwu) {
    const response = await message.channel.awaitMessages(
      neblm => neblm.author.id === message.author.id,
      { max: 1, time: 30000 }
    );
    const choice = response.first().content;
    if (choice == "doğruluk" || choice == "d")
      return message.channel.send(`${dogrulukcevap}`);
    if (choice !== "cesaret" && choice !== "c") {
      message.channel.send(
        `Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`
      );
    }
    if (choice == "cesaret" || choice == "c") uwu = true;
  }
  if (uwu) {
    message.channel.send(`${cesaretcevap}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["doğruluk-cesaret", "dogrulukcesaret","dc"],
  permLevel: 0
};

exports.help = {
  name: "doğrulukcesaret",
  description: "Doğruluk cesaret oynarsınız",
  usage: "doğrulukcesaret"
};