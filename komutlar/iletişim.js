const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {
  const embedyardim = new Discord.RichEmbed()
  .setTitle("Vooxy Bot")
  .setDescription('**İletişim Adreslerimiz**')
  .setColor("BLUE")
  .addField("**✉️ Mail Adresimiz**", "** `eyhabrawl@gmail.com ``**",)
  .addField("**🌐 Sitemiz**", "** `[TIKLA](itezarmyglitch.me) `**",)
  .addField("**🌀 Destek Sunucumuz**", "** `[TIKLA](https://discord.gg/u77vmgS8cM) `**",)
  
  
  .setFooter('Vooxy Bot İletişim Menüsü')

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.channel.send(embedyardim);
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.send('Vooxy Bot', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }
};

exports.conf = {                             
  enabled: true,                             
  guildOnly: false,
  aliases: ['iletişim',],
  permLevel: 0
};

exports.help = {
  name: 'iletişim',
  description: 'Tüm komutları gösterir.',
  usage: 'iletişim'
};   