const Discord = require("discord.js");
const { stripIndents } = require("common-tags");
const { randomRange, verify } = require("../util/Util.js");

exports.run = async (client, message, args) => {
  this.fighting = new Set();

  let opponent = message.mentions.users.first();
  if (!opponent)
    return message.reply("Oynamak istediğin kişiyi etiketlemelisin!");

  if (opponent.bot) return message.reply("Botlar ile oynayamazsın!");
  if (opponent.id === message.author.id)
    return message.reply("Kendin ile vs atamazsın!");
  if (this.fighting.has(message.channel.id))
    return message.reply("Kanal başına sadece bir düello meydana gelebilir.");
  this.fighting.add(message.channel.id);
  try {
    if (!opponent.bot) {
      await message.channel.send(
        `${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (**evet** veya **hayır** olarak cevap veriniz.)`
      );
      const verification = await verify(message.channel, opponent);
      if (!verification) {
        this.fighting.delete(message.channel.id);
        return message.channel.send(`Düello kabul edilmedi...`);
      }
    }
    let userHP = 100;
    let oppoHP = 100;
    let userTurn = false;
    let guard = false;
    const reset = (changeGuard = true) => {
      userTurn = !userTurn;
      if (changeGuard && guard) guard = false;
    };
    const dealDamage = damage => {
      if (userTurn) oppoHP -= damage;
      else userHP -= damage;
    };
    const forfeit = () => {
      if (userTurn) userHP = 0;
      else oppoHP = 0;
    };
    while (userHP > 0 && oppoHP > 0) {
      // eslint-disable-line no-unmodified-loop-condition
      const user = userTurn ? message.author : opponent;
      let choice;
      if (!opponent.bot || (opponent.bot && userTurn)) {
        await message.channel.send(stripIndents`
						${user}, ne yapmak istersin? \`sık\`, \`cover al\`, \`headshot\`, \`kaç\`?
						**${message.author.username}**: ${userHP} :heartpulse:
						**${opponent.username}**: ${oppoHP} :heartpulse:
					`);
        const filter = res =>
          res.author.id === user.id &&
          ["sık", "cover al", "headshot", "kaç"].includes(
            res.content.toLowerCase()
          );
        const turn = await message.channel.awaitMessages(filter, {
          max: 1,
          time: 30000
        });
        if (!turn.size) {
          await message.reply(`Üzgünüm ama, süre doldu!`);
          reset();
          continue;
        }
        choice = turn.first().content.toLowerCase();
      } else {
        const choices = ["sık", "cover al", "headshot", "kaç"];
        choice = choices[Math.floor(Math.random() * choices.length)];
      }
      if (choice === "sık") {
        const damage = Math.floor(Math.random() * (guard ? 5 : 10)) + 1;
        await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
        dealDamage(damage);
        reset();
      } else if (choice === 'headshot') {
					const miss = Math.floor(Math.random() * 4);
					if (!miss) {
						const damage = randomRange(10, guard ? 20 : 40);
						await message.channel.send(`${user}, Bugüne kadarki fps oyunları tecrübelerinden faydalanarak **${damage}** hasar vurdun!`);
						dealDamage(damage);
					} else {
						await message.channel.send(`${user}, Bir kolsuz olduğunu kanıtladın ve ıskaladın,ne acınası!`);
					}
					reset();
      } else if (choice === "cover al") {
        await message.channel.send(`${user}, Karşındaki bir kolsuz seni ıskaladı şanslısın!`);
        guard = true;
        reset(false);
      } else if (choice === "kaç") {
        await message.channel.send(`${user}, Vs den kaçtı! Korkak!`);
        forfeit();
        break;
      } else {
        await message.reply("Ne yapmak istediğini anlamadım.");
      }
    }
    this.fighting.delete(message.channel.id);
    const winner = userHP > oppoHP ? message.author : opponent;
    return message.channel.send(
      `Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`
    );
  } catch (err) {
    this.fighting.delete(message.channel.id);
    throw err;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["deaglevs"],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: "vs",
  category: "eğlence",
  description: "İstediğiniz bir kişi ile düello atarsınız!",
  usage: "düello <@kullanıcı>"
};
