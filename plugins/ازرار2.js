import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg
import { uptime } from '@baileys/core';

 var handler = async (m, { conn, usedPrefix }) => {
 
let users = await conn.fetchBlocklist()
let uptimeMs = uptime()
let uptimeText = (uptimeMs / 1000 / 60 / 60).toFixed(2)+'hours' 

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: ``
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: `*━⊱│✫ -『 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕 』- ✫│⊱━*\n 
        *𝑾𝒆 𝒔𝒕𝒂𝒏𝒅 𝒘𝒊𝒕𝒉 𝒑𝒂𝒍𝒂𝒔𝒕𝒊𝒏𝒆🇵🇸*
 ╭━━━━⊱『 *𝑴𝒊𝒓𝒛𝒂* 』⊱━━━━━╮
> *👋🏻 مرحباَ:* ${m.pushName}\n> *👥 عدد المستخدمين:* ${users.length}\n> *🟢 وقت النشاط:* ${uptimeText}
╯━━━━━━━━━━━━━━━━━╰`,
            subtitle: "text",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"القوائم 📑\",\"sections\":[{\"title\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"highlight_label\":\"𝑴𝒊ܪﺯ𝒂 𝑩𝒐ت\",\"rows\":[{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"},{\"header\":\"header\",\"title\":\"title\",\"description\":\"description\",\"id\":\"id\"}]}]}"
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
  }
}, {})

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(ميرا)$/i

export default handler
