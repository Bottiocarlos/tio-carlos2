const fetch = require('node-fetch')
const axios = require('axios')
const cfonts = require('cfonts')
const spin = require('spinnies')
const Crypto = require('crypto')
console.log('Ejecutando el Bot mas shidori tercer mundista.\nComenzando ejecucion del script...')
let package = require('../package.json')
cfonts.say('Ejecutando...', {
  font: 'tiny',
    color: 'candy',
    align: 'center',
  gradient: ['red', 'yellow']
})
cfonts.say(`${package.name}\nProyecto de bot muy simple echo con amor nwn\n\No te agrada este bot, usa este comando en termux:\n\nrm -rf NK-BOT\n\nMatt_M. ✓`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

const h2k = (number) => {
    var SI_POSTFIXES = ["", " K", " M", " G", " T", " P", " E"]
    var tier = Math.log10(Math.abs(number)) / 3 | 0
    if(tier == 0) return number
    var postfix = SI_POSTFIXES[tier]
    var scale = Math.pow(10, tier * 3)
    var scaled = number / scale
    var formatted = scaled.toFixed(1) + ''
    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2)
    return formatted + postfix
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

const randomBytes = (length) => {
    return Crypto.randomBytes(length)
}

const generateMessageID = () => {
    return randomBytes(10).toString('hex').toUpperCase()
}

const getGroupAdmins = (participants) => {
	admins = []
	for (let i of participants) {
		i.isAdmin ? admins.push(i.jid) : ''
	}
	return admins
}

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`
}

const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 3000) 
}

const spinner = { 
  "interval": 120,
  "frames": [
    "=           [NeKosmic ✓] 🕛",
    "===         [NeKosmic ✓] 🕐",
    "=====       [NeKosmic ✓] 🕑",
    "=======     [NeKosmic ✓] 🕒",
    "=====       [NeKosmic ✓] 🕓",
    "===         [NeKosmic ✓] 🕔",
    "=           [NeKosmic ✓] 🕕",
    "===         [NeKosmic ✓] 🕖",
    "=====       [NeKosmic ✓] 🕗",
    "=======     [NeKosmic ✓] 🕙",
    "=====       [NeKosmic ✓] 🕚",
    "===         [NeKosmic ✓] 🕛"
  ]}

        let globalSpinner;


        const getGlobalSpinner = (disableSpins = false) => {
        if(!globalSpinner) globalSpinner = new spin({ color: 'blue', succeedColor: 'green', spinner, disableSpins});
        return globalSpinner;
        }

        spins = getGlobalSpinner(false)

        const start = (id, text) => {
	       spins.add(id, {text: text})
	       }
        const info = (id, text) => {
	       spins.update(id, {text: text})
        }
const pickRandom = (list) => {
  return list[Math.floor(Math.random() * list.length)]
}
        const success = (id, text) => {
	       spins.succeed(id, {text: text})

	       }

        const close = (id, text) => {
	       spins.fail(id, {text: text})
        }

const banner = cfonts.render((`UwU`), {
    font: 'simple3d',
    color: 'candy',
    align: 'center',
    gradient: ["red","magenta"],
    lineHeight: 3
  });
const CFonts  = require('cfonts')
CFonts.say(`NK|Bot`, {
  font: 'pallet',
    color: 'candy',
    align: 'center',
    gradient: ["red","blue"]
})

function convertSticker(base64, author, pack){
 return new Promise((resolve, reject) =>{
axios('https://sticker-api-tpe3wet7da-uc.a.run.app/prepareWebp', {
    method: 'POST',
    headers: {Accept: 'application/json, text/plain, */*','Content-Type': 'application/json;charset=utf-8','User-Agent': 'axios/0.21.1','Content-Length': 151330},
    data: `{"image": "${base64}","stickerMetadata":{"author":"${author}","pack":"${pack}","keepScale":true,"removebg":"HQ"},"sessionInfo":{"WA_VERSION":"2.2106.5","PAGE_UA":"WhatsApp/2.2037.6 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36","WA_AUTOMATE_VERSION":"3.6.10 UPDATE AVAILABLE: 3.6.11","BROWSER_VERSION":"HeadlessChrome/88.0.4324.190","OS":"Windows Server 2016","START_TS":1614310326309,"NUM":"6247","LAUNCH_TIME_MS":7934,"PHONE_VERSION":"2.20.205.16"},"config":{"sessionId":"session","headless":true,"qrTimeout":20,"authTimeout":0,"cacheEnabled":false,"useChrome":true,"killProcessOnBrowserClose":true,"throwErrorOnTosBlock":false,"chromiumArgs":["--no-sandbox","--disable-setuid-sandbox","--aggressive-cache-discard","--disable-cache","--disable-application-cache","--disable-offline-load-stale-cache","--disk-cache-size=0"],"executablePath":"C:\\\\Program Files (x86)\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe","skipBrokenMethodsCheck":true,"stickerServerEndpoint":true}}`
  }).then(({data}) =>{resolve(data.webpBase64)
  }).catch(reject)}) 
}

module.exports = { getBuffer, isFiltered, addFilter, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close, pickRandom, convertSticker }
