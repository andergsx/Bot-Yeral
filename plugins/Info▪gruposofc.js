let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de ⍣𝑱𝑯𝑶𝑵𝑵𝒀_𝘽𝙊𝙏࿐.*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/L1hwmI0SSFMAmTVWTyOgMW_*
*_╰━━━━━━━━━━━━━━━━⊜_*


   *_╭━━━⊜ ⌊• 4 •⌉_*
  *_┃🌱❏ Vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*

   *_╭━━━⊜ ⌊• 5 •⌉_*
  *_┃🎋❏ Vacío_*
*_╰━━━━━━━━━━━━━━━━⊜_*
 `
conn.sendPayment(m.chat, '99999999', msg, m)
}
handler.command = handler.help = ['gruposofc']
handler.tags = ['info']
export default handler