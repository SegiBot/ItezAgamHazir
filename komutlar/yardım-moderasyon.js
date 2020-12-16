const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kray Bot`, client.user.avatarURL)
      .setDescription("\n**Ping:** " + client.ping + "ms! \n**Toplam Komut Sayısı: ** "+ client.commands.size +' ')
      .addField(`Moderasyon - Yardım`, ` **i!ban**: Belirttiğiniz Kişiyi  Engeller!\n**i!unban**: Belirttiğiniz Kişinin Engelini Kaldırır!\n**i!mute**: Belirttiğiniz Kişiyi Susturursunuz!\n**i!unmute**: Belirttiğiniz Kişinin Susturulmasını Kaldırır!\n **i!kick**: Belirttiğiniz Kişi Sunucudan Atılır!\n `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ['yetkili'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'moderasyon',
    description: 'yetkili yardım',
    usage: 'moderasyon'
  };
   