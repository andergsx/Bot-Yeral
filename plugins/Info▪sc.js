let handler = async (m, {conn, usedPrefix}) => {
    var doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']
    var document = doc[Math.floor(Math.random() * doc.length)]
    let texto1 = `https://github.com/andergsx`
    let buttonMessage = {
        'document': {url: 'https://github.com/andergsx'},
        'mimetype': `application/${document}`,
        'fileName': `⍣ʏᴇʀᴀɴᴅx ʙᴏᴛ࿐`,
        'fileLength': 99999999999999,
        'pageCount': 200,
        'contextInfo': {
            'forwardingScore': 200,
            'isForwarded': true,
            'externalAdReply': {
                'mediaUrl': script,
                'mediaType': 2,
                'previewType': 'pdf',
                'title': ``,
                'body': global.author,
                'thumbnail': global.imgmenu,
                'sourceUrl': 'https//wa.me/51912332440'
            }
        },
        'caption': texto1,
        'footer': '\n⍣ᴊʜᴏɴᴀᴛᴀɴ࿐',
        'buttons': [
            {buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'Menú 📒'}, type: 1},
            {buttonId: `${usedPrefix}infobot`, buttonText: {displayText: 'Info 📌'}, type: 1}],
        'headerType': 6
    }
    conn.sendMessage(m.chat, buttonMessage, {quoted: m})
}
handler.tags = ['info']
handler.help = ['script']
handler.command = ['sc', 'script']
handler.register = true
export default handler
