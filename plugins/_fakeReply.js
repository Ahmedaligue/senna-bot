
import fetch from 'node-fetch';
export async function before(m, { conn, text, participants }) {
   let users = participants.map(u => conn.decodeJid(u.id))
   let q = m.quoted ? m.quoted : m || m.text || m.sender
   let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
   let messageType = m.quoted ? q.mtype : 'extendedTextMessage'
   let messageContent = m.quoted ? c.message[q.mtype] ?? {} : { text: '' || c }
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; // تعريف المتغير who

   if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`; // فحص ما إذا كان المستخدم موجودًا في قاعدة البيانات

   let { name } = global.db.data.users[who]; // تعريف المتغير name من قاعدة البيانات
   
   let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg');

  let nam = "✨  𝑴𝒊𝒓𝒛𝒂 𝑩𝒐𝒕  ✨"
   
  // Respuesta con enlace de WhatsApp
  global.rpl = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: bgp,
        mediaType: 'VIDEO',
        description: 'support group',
        title: packname,
        body: 'grupo de soporte',
        thumbnailUrl: pp,
        sourceUrl: bgp
      }
    } 
  };

  // Respuesta con enlace de Canal de WhatsApp
  global.rcanal = {
    contextInfo: { 
    mentionedJid: users,
       isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
    }
  }
  
    // Forwarded
  global.fwc = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }
    }
  };

  // Respuesta con enlace de PayPal
  global.rpyp = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgpyp,
        mediaType: 'VIDEO',
        description: 'Donate',
        title: 'PayPal',
        body: 'ayuda a mantener el bot activo',
        thumbnailUrl: pp,
        sourceUrl: fgpyp
      }
    }
  };

  // Respuesta con enlace de Instagram
  global.rpig = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        mediaUrl: fgig,
        mediaType: 'VIDEO',
        description: 'Sigueme por Instagram',
        title: 'Instagram',
        body: 'sigueme por Instagram',
        thumbnailUrl: pp,
        sourceUrl: fgig
      }
    }
  };

  // Respuesta con enlace de YouTube
  global.rpyt = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: id_canal,
      serverMessageId: 100,
      newsletterName: nam,
    }, 
      externalAdReply: {
        showAdAttribution: true,
        mediaUrl: fgyt,
        mediaType: 'VIDEO',
        description: 'Suscribete: ' + fgyt,
        title: 'FG YouTube',
        body: 'aprende a crear tus propios bots',
        thumbnailUrl: pp,
        sourceUrl: fgyt
      }
    }
  }
  
  
  
}
