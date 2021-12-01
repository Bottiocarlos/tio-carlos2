
let { WAConnection, MessageType, Mimetype} = require('@adiwajshing/baileys')
let qrcode = require('qrcode')
const fs = require('fs')
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

listjadibot = [];

const jadibot = async(reply,client,id) => {
	teslagod = new WAConnection()
    teslagod.logger.level = 'warn'
    teslagod.version = [2, 2140, 14]
    teslagod.browserDescription = [ 'EsclaBot-NK', '', '3.0' ]
    teslagod.on('qr', async qr => {
    	let bot = await qrcode.toDataURL(qr, { scale: 8 })
    	let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64')
       	bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'*[ Escanee el codigo QR para que te vuelvas bot ]*\n*NOTA:*\n_Cada codigo QR tiene un tiempo valido de 20 segundos!!!_'})
    	setTimeout(() => {
       	client.deleteMessage(id, bot.key)
       },18000)
    })
    teslagod.on('connecting', () => {
    })
    teslagod.on('open', () => {
    	reply(`*[ Un usuario se convirtio en bot exitosamente ]*✓\n\n*Dispositivo*:\n\n ${JSON.stringify(teslagod.user,null,2)}`)
    })
    await teslagod.connect({timeoutMs: 30 * 1000})
    listjadibot.push(teslagod.user)
//=====================UwU========================//
teslagod.on('group-participants-update', async (anu) => {
		try {
			const mdata = await teslagod.groupMetadata(anu.jid)
			const isGroup3 = anu.jid.endsWith('@g.us')
            const groupDesc2 = isGroup3 ? mdata.desc : ''
			console.log(anu)
			if (anu.action == 'add') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg'
				}
				teks = `⚡ *${tampilWaktuwu} @${num.split('@')[0]}, Bienvenid@ a este grandioso grupo : ${mdata.subject}*\n⚡ _Espero y te agrade tu estancia aqui, no olvides respetar a los participantes y las reglas ;)_\n\n*[ ! ] Reglas Del Grupo:*\n${groupDesc2}`

				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'remove') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${num.split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg'
				}
					teks = `*Adiuuu* @${num.split('@')[0]}`
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				
		} else if (anu.action == 'promote') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg'
				}
				teks = `*@${num.split('@')[0]} fue ascendido a admin* ✓`///Texto si un usuario es convertido a administrador en un grupo
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
				} else if (anu.action == 'demote') {
				num = anu.participants[0]
				try {
					ppimg = await teslagod.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
				} catch {
					ppimg = 'https://i.ibb.co/q70WmhZ/Sin-Perfil-F.jpg'
				}
				teks = `@${num.split('@')[0]} fue degradado de ser admin ✓` ///texto si un usuario pierde su administración
				let buff = await getBuffer(ppimg)
				teslagod.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
			}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
	}
)
//=====================UwU========================//
    teslagod.on('chat-update', async (message) => {
        require('../nkbot.js')(teslagod, message)
    })
}

const stopjadibot = (reply) => {
	teslagod = new WAConnection();
	teslagod.close()
	reply('Se detuvo el multibot con exito ✓')
}

module.exports = {
	jadibot,
	stopjadibot,
	listjadibot
}