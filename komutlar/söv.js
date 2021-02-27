exports.run = async (client, msg, args) => {
  let kufur = [
    "keşke bot olmasamda gelip o salak kafana sıçsam",
    "Geri bas götünü sikerim",
    "fuck yourself",
    "puşt",
    "seni bir sikerim jordi reis ayakta alkışlar he",
    "Oğlum sana sikerek akıl sokuyorum sen osurup geri çıkarıyosun",
    "siktir git kendin et yavşak beni ne günaha sokuyon",
    "Ben doluyum gardaş",
    "Arka odaya geç geliyorum",
    "Seni burda hoplatiyimmi onu mu istiyosun",
    "Hadi hadi dansözlük yapma",
    "Kes lan sıfatsız",
    "Sen var ya ağır şerefsizsin ",
    "tek hücreli öglena seni",
    "Kırarım belini heaa antilob",
    "amip",
    "zıp zıp adam ol",
    "Sen ne oynak şoparsın öyle",
    "Taksi metre kaç para yazıyo egondan iq'una kardeş",
    "Şimdi söyle bana kardeş beynini götüne kim monte etti ?",
    "kaşar",
    "at sikine konmuş kelebek senii",
    "Göt hoşafı seni",
    "Göt lalesi",
    "Kardeşim küfür çok günah şaka lan şaka onun beni götünü sikiyim"
  ];
  let member = msg.mentions.members.first();
  if (!member)
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description:
          ":no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle."
      }
    });
  if (member.id === "576090430855943168")
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description:
          ":no_entry_sign: Sen Kimsin Sahibime Sövüyon Amına Kodumun Jedayı."
      }
    });
  if (member.id === "335413922649604096")
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `:no_entry_sign: Hoop! Birşeyler ters gitti @❅ Raksix#3362  etiketlemişsin yarram!`
      }
    });
  if (member.id === "203116573211230208")
    return msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `:no_entry_sign: Hoop! Orda durucan Yapımcım @LiteUP#7495'ya sövemezsin amını sikerim.`
      }
    });
  if (member.id === client.user.id) {
    msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `:no_entry_sign: Beni mi kandırcan yavşak kendimemi söveyim ?`
      }
    });
  } else {
    msg.channel.send({
      embed: {
        color: Math.floor(Math.random() * (0xffffff + 1)),
        description: `${kufur[Math.floor(Math.random() * 16)]}.`
      }
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["küfür"],
  permLevel: 0
};

exports.help = {
  name: "söv",
  description: "Birine Söver.",
  usage: "söv"
};
