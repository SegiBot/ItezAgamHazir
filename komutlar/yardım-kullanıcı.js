const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Kray Bot`, client.user.avatarURL)
      .setDescription("\n**Ping:** " + client.ping + "ms! \n**Toplam Komut Sayısı: ** "+ client.commands.size +' ')
      .addField(`Kullanıcı - Yardım`, ` **i!sunucu-bilgi**: Sunucu Hakkında Bilgi Verir!\n**i!davet**: Botun Davet Linkini Gösterir!\n **i!ping**: Botun Pingini Gösterir!\n `)
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
    name: 'kullanıcı',
    description: 'kullanıcı yardım',
    usage: 'kullanıcı'
  };
   