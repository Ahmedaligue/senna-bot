let handler  = async (m, { conn }) => { 
 let name = conn.getName(m.sender) 
 let teks = ` 
 ${pickRandom([`'.☀🌹 أذكارالصباح🌹☀

🌴 حصن نفسك حصن نفسك🌴
💐 الحمد لله وحده ، والصلاة والسلام على من لا نبي بعده:

♡[ آية الكرسي]
♡ سورة الإخلاص-ثلاث مرات]
♡[ سورة الفلق-ثلاث مرات]
♡ سورة الناس-ثلاث مرات]

💐 اشهد ان لا اله الا الله وان محمد رسول الله 

💐 "اللهم بك أصبحنا وبك أمسينا وبك نحيا وبك نموت  وإليك النشور

💐 "سبحان الله بحمده سبحان الله العظيم  (مائة مرات)

💐 اللهم إني أصبحت أشهدك وأشهد حملة عرشك ، وملائكتك وجميع خلقك ، أنك أنت الله لا إله إلا أنت وحدك لا شريك لك ، وأن محمداً عبدك ورسولك"( أربع مرات)

💐 "اللهم ما أصبح بي من نعمة أو بأحد من خلقك فمنك وحدك لا شريك لك ، فلك الحمد ولك الشكر "

💐 "اللهم عافني في بَدَني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت .اللهم إني أعوذ بك من الكفر، والفقر، اللهم إني أعوذ بك من عذاب القبر لا إله إلا أنت"( ثلاث مرات)

💐 ؛" حسبي الله لا إله إلا هو عليه توكلت وهو رب العرش العظيم "( سبع مرات )

💐 "اللهم إني أسألك العافية في الدنيا والآخرة،اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي،اللهم استر عوراتي وآمن روعاتي، اللهم أحفظني من بين يديَّ ومن خلفي وعن يميني وعن شمالي ومن فوقي وأعوذ بعظمتك أن أغتال من تحتي" .  

💐 "اللهم عَالِمَ الغيب والشَّهادة، فاطر السموات والأرض، رب كل شيء ومليكه، أشهد أن لا إله إلا أنت أعوذ بك من شر نفسي ومن شر الشيطان وشركه وأن اقترف على نفسي سوءًا أو أجُره إلى مسلم"

💐 "بسم الله الذي لا يضرُّ مع اسمه شيء في الأرض ولا في السماء وهو السميع العليم( "ثلاث مرات)

💐 "رضيت بالله رباً ، وبالإسلام ديناً وبمحمد صلى الله عليه وسلم نبياً"( ثلاث مرات)

💐 "يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كُله ولا تَكِلْني إلى نفسي طرفة عين"

💐 "أصبحنا وأصبح الملك لله رب العالمين ، اللهم إني أسألك خير هذا اليوم : فتحه ، ونصره ،ونوره ،وبركته، وهداه، وأعوذ بك من شر ما فيها وشر ما بعده"

💐 "(أصبحنا على فطرة الإسلام وكلمة الإخلاص، ودين نبيَّنا محمد صلى الله عليه وسلم وملَّة أبينا إبراهيم حنيفاً مسلماً وما كان من المشركين"

💐 "لا إله إلا الله وحده لا شريك له ،له الملك وله الحمد وهو على كل شيء قدير"( عشر مرات)

💐 "لا إله إلا الله وحده لا شريك له ،له الملك وله الحمد وهو على كل شيء قدير" 
( مائة مرة )

💐 "سبحان الله وبحمده عدد خلقهِ ورِضَا نفسِهِ وزِنُة عَرشِهِ ومِداد كلماته"( ثلاث بعد صلاة الفجر)
💐 عوذ بكلمات الله التامات من شر ماخلق ( ثلاث مرات)
💐 "أستغفر الله وأتوب إليه "(  مائة مرة في اليوم)

💐 الصلاه على النبي (عشر مرات)
ً'`])} 
 `.trim() 
 conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }}) 
 } 
 handler.help = ['اذكار الصباح']
 handler.tags = ['islam']
 handler.customPrefix = /اذكار الصباح|أذكار الصباح/i 
 handler.command = new RegExp 
  
 export default handler 
  
 function pickRandom(list) { 
     return list[Math.floor(Math.random() * list.length)] 
 }
