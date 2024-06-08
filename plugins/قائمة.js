let handler = async (m, { conn, args, usedPrefix, command }) => {    
let pp = await this.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/11d8f4ee53b8dd9fe80c6.jpg');   
    conn.relayMessage(m.chat, {
      viewOnceMessage: {
        message: {
          interactiveMessage: {
              header: {
              title: '*قـائـمـة الـاوامــر*',
              thumbnailUrl: pp,
           },
            body: {
              text: '🛡️ افتح القائمة بواسطة الزر\n⚡ لا تلعب كثير في القائمة'
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: 'single_select',
                  buttonParamsJson: JSON.stringify({
                    title: 'دوس هنا ',
                    sections: [
                      {
                        title: 'قوائم البوت',
                        highlight_label: 'اختار',
                        rows: [
                          {
                            header: 'قسم الانمي',
                            title: '.الانمي',
                            description: '',
                            id: 'te'
                          },
                          {
                            header: 'قسم الاوامر',
                            title: '.المهام',
                            description: '',
                            id: 'te'
                          }
                        ]
                      }
                    ]
                  }),
                  messageParamsJson: ''
                }
              ]
            }
          }
        }
      }
    }, {})

}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['قايمه']

export default handler
