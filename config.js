import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk' 
import { fileURLToPath } from 'url' 

global.owner = [
  ['212658594530', '𝑴𝒓 SENKU', true],
  ['212658594530']
] //Numeros de owner 

global.mods = ['212658594530'] 
global.prems = ['212658594530']
global.APIs = { // API Prefix
  // name: 'https://website' 
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api.fgmods.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.fgmods.xyz': 'm2XBbNvz' //-- 100 de límite diario --- Regístrese en https://api.fgmods.xyz/
}

// Sticker WM
global.packname = 'SENKU 𝑩𝒐𝒕' 
global.author = 'SENKU ISHIGAMI' 

//--info FG
global.botName = 'SENKU'
global.fgig = 'https://instagram.com/rnj_.6' 
global.fgsc = 'https://github.com/FG98F/dylux-fg' 
global.fgyt = 'https://youtube.com/fg98f'
global.fgpyp = 'https://paypal.me/fg98f'
global.fglog = 'https://i.ibb.co/1zdz2j3/logo.jpgs' 

//--- Grupos WA
global.id_canal = '120363287489532700@newsletter' //-ID de canal de WhatsApp
global.fgcanal = 'https://whatsapp.com/channel/0029VaaeCWx0G0XghCHtCU1d'
global.bgp = 'https://chat.whatsapp.com/EqSA2YASEDx71WoU9pMWs5'
global.bgp2 = 'https://chat.whatsapp.com/EqSA2YASEDx71WoU9pMWs5'
global.bgp3 = ''

global.wait = '⌛ جاري التحميل..._\n*▬▬▬▭*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // máxima advertencias

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
