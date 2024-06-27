import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    m.react('📃')
    if (device !== 'desktop' || device !== 'web') {      
        var mirzaimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg'}}, { upload: conn.waUploadToServer })
        const mentionId = m.key.participant || m.key.remoteJid;
        const interactiveMessage = {
            body: { text: `╭╌┄┄『 معلوماتك 』
┊ ▢ الرقم : 
┊ ▢ الاسم : 
╯ ┄┬┄┄┄◯
╭┄ ┴┄『 معلومات البوت 』
┊ ▢  الاسم : 𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕
┊ ▢  الرقم : 733772709
┊ ▢  المنصه : هيروكو 
┊ ▢  المتصفح : كروم
╯┄┬┄╌╌╌┄◯
╭┄┴┄┄『 معلومات النظام 』
┊ ▢  المفتاح : .
┊ ▢  الوقت : *%time
┊ ▢  التاريخ : *%date
┊ ▢  الرام : 80.62MB / 63277MB
╯┄┄┄┄┄┄┄┄┄◯`.trim() },
            footer: { text: `© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍʀ ʜᴀᴍᴢᴀ`.trim() },  
            header: {
                title: `╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸
                 QUEEN ELISA LIST MENU
╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸╸
`,
                subtitle: `test`,
                hasMediaAttachment: true,
                imageMessage: mirzaimg.imageMessage,
            },
            nativeFlowMessage: {
  						buttons: [
                       {
                "name": "single_select",
                "buttonParamsJson": "{\"title\":\"القوائـــــــــم📑\",\"sections\":[{\"title\":\"𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕\",\"highlight_label\":\"𝙼𝚛 𝙷𝚊𝚖𝚣𝚊\",\"rows\":[{\"header\":\"القسم الأول\",\"title\":\"معلومات المطور\",\"id\":\".وهمي\"},{\"header\":\"القسم الثاني\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الثالث\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الرابع\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم الخامس\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم السادس\",\"title\":\"title\",\"id\":\"id\"},{\"header\":\"القسم السابع\",\"title\":\"title\",\"id\":\"id\"}]}]}"
                       },
                       {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"المطـــور\",\"id\":\".owner\"}"
                        },
                        {
                 "name": "cta_url",
                 "buttonParamsJson": "{\"display_text\":\"قنــاتــي\",\"url\":\"https://whatsapp.com/channel/0029VagsoU12kNFlfXWaPf0L\",\"merchant_url\":\"\"}"
                        },
  			  		],
                messageParamsJson: ''
            }
        };        
        
        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});
        
    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
//handler.help = ['imgboton'];
//handler.tags = ['For Test'];
handler.command = /^(تست)$/i;
export default handler;
