const Discord = require("discord.js");
const { prefijo, token } = require("./configuracion/config.json");
const ytdl = require("ytdl-core");
const LibraryManager = require("./database/LibraryManager.js");
const UserManager = require("./database/UserManager.js");
const { forEach } = require("async");
//const {Player} = require('discord-player');
//const Client = require('./client/Client');

const client = new Discord.Client();
const libraryManager = new LibraryManager();
const userManager = new UserManager();
//const player = new Player(client);

const queue = new Map();

/* player.on('error', (queue, error) => {
  console.log(`[${queue.guild.name}] Error emitted from the queue: ${error.message}`);
});

player.on('connectionError', (queue, error) => {
  console.log(`[${queue.guild.name}] Error emitted from the connection: ${error.message}`);
});

player.on('trackStart', (queue, track) => {
  queue.metadata.send(`▶ | Started playing: **${track.title}** in **${queue.connection.channel.name}**!`);
});

player.on('trackAdd', (queue, track) => {
  queue.metadata.send(`🎶 | Track **${track.title}** queued!`);
});

player.on('botDisconnect', queue => {
  queue.metadata.send('❌ | I was manually disconnected from the voice channel, clearing queue!');
});

player.on('channelEmpty', queue => {
  queue.metadata.send('❌ | Nobody is in the voice channel, leaving...');
});

player.on('queueEnd', queue => {
  queue.metadata.send('✅ | Queue finished!');
}); */

client.once("ready", () => {
  console.log(`Bot ${client.user.tag}\nEn linea nwn ✓`);
});

client.once("reconnecting", () => {
  console.log(`${client.user.tag} reconectando...\nu.u`);
});

client.once("disconnect", () => {
  console.log(`${client.user.tag}\nDesconectado unu`);
});

client.on("message", async message => {
  if (message.author.bot) return;
  let prefix=false;

  prefijo.forEach((p) => {
    if (message.content.startsWith(p)) prefix=p;
  });
  if(!prefix) return;

  const serverQueue = queue.get(message.guild.id);
  const arguments= message.content.split(" ")
  const command =arguments[0];
  switch (command) {
    case `${prefix}play`:
      execute(message, serverQueue);
      break;
    case `${prefix}skip`:
      skip(message, serverQueue);
      break;
    case `${prefix}stop`:
      stop(message, serverQueue);
      break;
    case `${prefix}registro`:
      registerUser(message, serverQueue);
      break;
    case `${prefix}add`:
      (message, serverQueue);
      break;
    default:
      message.channel.send("**[!] Este comando no existe [!]**\n~~Debes ingresar un comando válido~~");
  }
});

async function execute(message, serverQueue) {
  const args = message.content.split(" ");

  const voiceChannel = message.member.voice.channel;
  if (!voiceChannel)
    return message.channel.send(
      "**¡Necesitas estar en un canal de voz para reproducir música!**"
    );
  const permissions = voiceChannel.permissionsFor(message.client.user);
  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send(
      "_**¡Necesito los permisos para unirme y hablar en su canal de voz!**_"
    );
  }
  const songs=[];
  if(args[1]=="songs"){
    songsURL = libraryManager.getAllSongs();
    for (i=0;i<songsURL.length;i++){
      let song = songsURL[i];
      let songInfo = await ytdl.getInfo(song);
      songs.push({
            title: songInfo.videoDetails.title,
            url: songInfo.videoDetails.video_url,
           });
     }
  }
  else{
    // TO DO: ZAOBALIT do try, ked das zly argument tak padne
    const songInfo = await ytdl.getInfo(args[1]);
    songs.push({
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     })
     addToLibrary(message, serverQueue)
   }
   if (!serverQueue) {
    const queueContruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true
    };

    queue.set(message.guild.id, queueContruct);
    songs.forEach((song) => {
      queueContruct.songs.push(song);
    });
    var counter=5;
    async function startPlaing (){
      try {
        var connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        counter--;
        if(counter>0) startPlaing()
        else {
          console.log(err);
          queue.delete(message.guild.id);
          await voiceChannel.leave();
          return message.channel.send(err);
        }
      }
    }
    startPlaing();
  } 
  else {
    songs.forEach(song => serverQueue.songs.push(song))
  /*   serverQueue.songs.concat(songs); */
    return message.channel.send(`${JSON.stringify(serverQueue.songs)}`);
  }
}

function skip(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "**¡Tienes que estar en un canal de voz para detener la música!**"
    );
  if (!serverQueue)
    return message.channel.send("_¡No hay canción que pueda saltarme!_");
  serverQueue.connection.dispatcher.end();
}

async function addToLibrary(message, serverQueue) {
  const args = message.content.split(" ")
  const songInfo = await ytdl.getInfo(args[1])
  libraryManager.addToLibrary(message.author.id,songInfo.videoDetails.video_url)
}

function writeIntoFile(file,string) {
  const fs = require('fs');
  fs.writeFile(file, string, err => {
    if (err) {
      console.error(err)
      return
    }
})
}

function stop(message, serverQueue) {
  if (!message.member.voice.channel)
    return message.channel.send(
      "**¡Tienes que estar en un canal de voz para detener la música!**"
    );

  if (!serverQueue)
    return message.channel.send("_¡No hay canción que pueda detener!_");

  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url,{filter: 'audioonly', quality: 'highestaudio', highWaterMark: 1<<25 }), {highWaterMark: 1})
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`Empezar a reproducir: **${song.title}**`);
}

function registerUser(message, serverQueue) {
  const args = message.content.split(" ");
  user=userManager.registerNewUser(message.author.id, message.author.username,args[1])
  if (user) {
    return message.channel.send(`_Usuario ${message.author.username} ha sido registrado_`);
  }
}

client.login(token);
