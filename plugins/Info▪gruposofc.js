let handler = async (m, { conn }) => {
let msg = `
*👋Hola @${m.sender.split`@`[0]} aquí tienes los grupos oficiales de ⍣YERANDX - BOT࿐*

   *_╭━━━⊜ ⌊• 1 •⌉_*
  *_┃🎋❏ https://chat.whatsapp.com/Hyghlwz556i2CYX3BxaE9n_*
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