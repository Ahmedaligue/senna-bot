//import db from '../lib/database.js'

let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    global.db.data.chats[m.chat].sBye = text
    m.reply(`✅ ${msg.leaMsgOn}`)
  } else throw `✳️ ${mssg.leaMsg}`
}
handler.help = ['تعديل المغادرة']
handler.tags = ['group']
handler.command = ['تعديل المغادرة'] 
handler.admin = true
handler.owner = false

export default handler
