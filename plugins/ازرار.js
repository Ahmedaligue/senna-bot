import fs from 'fs';
import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let vn = fs.readFileSync('./src/fg_logo.jpg')

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            image: proto.Message.ImageMessage.create({
              url: 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg'
            })
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `*━⊱│✫ -『 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕 』- ✫│⊱━*\n 
        *𝑾𝒆 𝒔𝒕𝒂𝒏𝒅 𝒘𝒊𝒕𝒉 𝒑𝒂𝒍𝒂𝒔𝒕𝒊𝒏𝒆🇵🇸*
 ╭━━━━⊱『 *𝑴𝒊𝒓𝒛𝒂* 』⊱━━━━━╮
> *👋🏻 مرحباَ:* *%name*\n> *👥 عدد المستخدمين:* *%totalreg*\n> *🟢 وقت النشاط:* %muptime
╯━━━━━━━━━━━━━━━━━╰`,
            subtitle: "text",
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"القوائم 📑\",\"sections\":[{\"title\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"highlight_label\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐ت\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
              },
              {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"المطور\",\"id\":\".owner\"}"
              },
              {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"قناتنا\",\"url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\",\"merchant_url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\"}"
              },
           ],
          })
        })
    }
  },
  mediaMessage: fs.readFileSync('https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg')
}, { contextInfo: { mentionedJid: [m.sender] }, quoted: m })
 
await conn.relayMessage(msg.key.remoteJid, msg.message, vn, { messageId: msg.key.id })

}
handler.command = /^(بوت)$/i

export default handler
