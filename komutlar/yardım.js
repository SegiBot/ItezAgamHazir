const Discord = require("discord.js");

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("İtezArmy Bot")
    .addField("i!moderasyon", "Moderasyon komutlarını atar.", true)
    .addField("i!eğlence", "eğlence komutlarını atar.", true)
    .addField("i!kullanıcı", "Kullanıcı komutları atar.", true)
    .addField("i!hazır-sunucu", "Hazır sunucu komutlarını atar.", true)
    .addField("i!istatistik", "Botun İstatistiklerini Görürsün.", true)
    .addField("i!davet", "Botu Sunucuna Eklemek İçin Bu Komutu Kullan.", true);

  message.channel.sendEmbed(embed).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "The Help Command",
  usage: "yardım"
};
