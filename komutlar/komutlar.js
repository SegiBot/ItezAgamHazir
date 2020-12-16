/////chypercode
const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    try {
        await message.channel.send(`Komutlar: \n${client.commands.map(props => `\`${props.help.name}\`i!yardım`).join(" | ")}`);
    } catch (e) {
        throw e;
    }
}
/////chypercode
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["commands"],
  permLevel: 0
};
/////chypercode
module.exports.help = {
  name: 'komutlar',
  description: 'Botta bulunan tüm komutları gösterir',
  usage: 'komutlar'
};
/////chypercode