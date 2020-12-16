const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kray Bot`, client.user.avatarURL)
      .setDescription("\n**Ping:** " + client.ping + "ms! \n**Toplam Komut Sayısı: ** "+ client.commands.size +' ')
      .addField(`Eğlence - Yardım`, ` **i!kaçcm**: Malafatın Kaç Cm Olduğunu Gösterir.!\n**i!balık-tut**: Balık Tutarsınız.!\n **i!su-iç**: Su İçersiniz.!\n `)
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};

  
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };
  
  exports.help = {
    name: 'eğlence',
    description: 'eğlence yardım',
    usage: 'eğlence'
  };
   