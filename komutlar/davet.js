const Discord = require('discord.js');
//DarknessCode
exports.run = (client, message) => {
  
  const botdavet = new Discord.RichEmbed()
  .setColor('#FFFF00')
.setTimestamp()
.setFooter (`${message.author.username} Tarafından Kullanıldı. `)
  .setDescription(`Botu bu linkten sunucunuza ekleyebilirsiniz!

[Bot Davet Link](https://discord.com/oauth2/authorize?client_id=788784903940472844&scope=bot&permissions=805314622) 
 
[Destek Sunucusu Linki](https://discord.gg/u77vmgS8cM)`)
  message.channel.send(botdavet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
//ottoman code
exports.help = {
  name: "davet",
description: "botu davet etmenizi sağlar ",
 usage: "davet"
}
 