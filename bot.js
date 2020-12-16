////chyper code
const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');

////chyper code
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////chyper code
var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};
////chyper code
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});

////chyper code
////chyper code
////chyper code
client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('guildMemberAdd', async (member) => {

let otorol = db.fetch(`${member.guild.id}_otorol`)

let otorolkanal = db.fetch(`${member.guild.id}_otorolkanal`)

let kanal = member.guild.channels.get(otorolkanal)

if(!otorol) return

if(!otorolkanal) return

kanal.send(':inbox_tray: Sunucuya yeni katılan **'+member.user.username+'** kullanıcısına otorol verildi !')

member.addRole(otorol)

})

client.on('guildMemberAdd', async(member) => {

  

    const sayi = await db.fetch(`sayacsayi_${member.guild.id}`)

  const kanal = await db.fetch(`sayackanal_${member.guild.id}`)

  

  const gmsj = await db.fetch(`sayacgirismesaj_${member.guild.id}`)

  const cmsj = await db.fetch(`sayaccikismesaj_${member.guild.id}`)

  

  const knl = client.channels.get(kanal)

  

  const skisi = member.guild.members.size

  const kkisi = parseInt(parseInt(sayi) - parseInt(member.guild.memberCount))

  

    if(!gmsj) {

knl.send(`***${member}*** Sunucumuza katıldı! Toplam ***${skisi}*** kişiyiz! ${sayi} kişiye toplam ${kkisi} Kaldı!`)

  }

  

 else{

     const msjjj = gmsj.replace(".gelenkisi.", member)

    .replace(".sunucuisim.", member.guild.name)

    .replace('.toplamkisi.', member.guild.memberCount)

    .replace(".hedef.", sayi)   

     knl.send(msjjj)

 } 

  })

client.on('guildMemberRemove', async(member) => {

  

    const sayi = await db.fetch(`sayacsayi_${member.guild.id}`)

  const kanal = await db.fetch(`sayackanal_${member.guild.id}`)

  

  const gmsj = await db.fetch(`sayacgirismesaj_${member.guild.id}`)

  const cmsj = await db.fetch(`sayaccikismesaj_${member.guild.id}`)

  

  const knl = client.channels.get(kanal)

  

  const skisi = member.guild.members.size

  const kkisi = parseInt(parseInt(sayi) - parseInt(member.guild.memberCount))

  

    if(!cmsj) {

knl.send(`***${member}*** Sunucumuzdan ayrıldı! Toplam ***${skisi}*** kişiyiz! ${sayi} kişiye toplam ${kkisi} Kaldı!`)

  }

  

 else{

     const msjjj = cmsj.replace(".gidenkisi.", member)

    .replace(".sunucuisim.", member.guild.name)

    .replace('.toplamkisi.', member.guild.memberCount)

    .replace(".hedef.", sayi)   

     knl.send(msjjj)

 } 

  })
 
client.on("guildMemberAdd", member => {

 let gelengiden = JSON.parse(fs.readFileSync('./ayarlar/gelengiden.json', 'utf8'));

  var asd = db.fetch(`hgbb_${member.guild.id}`)

     let guild = member.guild;

       var Durum = member.user.presence.status;

        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))

        var durm = (Durum == "online" ? ("Çevrimiçi", `<:online:665133829949751296> Çevrimiçi`) : (Durum == "offline" ? ("Çevrimdışı", `<:offline:665133830000345111> Çevrimdışı`) : (Durum == "idle" ? ("Boşta", `<:idle:665133829945819176> Boşta`) : (Durum == "dnd" ? ("Rahatsız Etmeyin", `<:dnd:665133829584846859> Rahatsız Etme`) : ("Bilinmiyor/bulunamadı.")))))

  const channel = member.guild.channels.find("id", asd.id);

  if (!channel) return;

  const embed = new Discord.RichEmbed()

    .setColor("GREEN")

    .setAuthor(

      member.user.tag,

      member.user.avatarURL || member.user.defaultAvatarURL

    )

    .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)

    .setTitle(`**${member.user.username}** **${guild.name}** Adlı sunucumuza giriş yaptı! ${client.emojis.get("673495921144889344")}`)

    .setDescription(`**${member.guild.memberCount}** Üyeye Ulaştık!`)

    .addField("`kullanıcı`", `${member.user.tag}`)

    .addField("`ID`", `${member.user.id}`)

    .addField("`Durum`", `${durm}`)

    .setTimestamp();

  channel.send(embed);

});

client.on("guildMemberRemove", member => {

    let gelengiden = JSON.parse(fs.readFileSync('./ayarlar/gelengiden.json', 'utf8'));

    var asd = db.fetch(`hgbb_${member.guild.id}`)

         let guild = member.guild;

         var Durum = member.user.presence.status;

        var Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))

        var durm = (Durum == "online" ? ("Çevrimiçi", `<:online:665133829949751296> Çevrimiçi`) : (Durum == "offline" ? ("Çevrimdışı", `<:offline:665133830000345111> Çevrimdışı`) : (Durum == "idle" ? ("Boşta", `<:idle:665133829945819176> Boşta`) : (Durum == "dnd" ? ("Rahatsız Etmeyin", `<:dnd:665133829584846859> Rahatsız Etme`) : ("Bilinmiyor/bulunamadı.")))))

  const channel = member.guild.channels.find("id", asd.id);

  if (!channel) return;

  const embed = new Discord.RichEmbed()

    .setColor("RED")

    .setAuthor(

      member.user.tag, 

      member.user.avatarURL || member.user.defaultAvatarURL

    )

    .setThumbnail(member.user.avatarURL || member.user.defaultAvatarURL)

    .setTitle(`**${member.user.username}** **${guild.name}** Sunucumuzdan ayrıldı! ${client.emojis.get("673495981005864960")}`)

    .setDescription(`**${member.guild.memberCount}** Üyeye düştük!`)

    .addField("`kullanıcı`", `${member.user.tag}`)

    .addField("`ID`", `${member.user.id}`)

    .addField("`Durum`", `${durm}`)

    .setTimestamp();

  channel.send(embed);

});

client.login(ayarlar.token);