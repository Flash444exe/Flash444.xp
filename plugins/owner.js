import fetch from 'node-fetch'
let handler = async (m, { conn }) => {
  let caption = `
*「 معلومات عن صاحب البوت 」*

*Number :*\nwa.me/212714249761
*instagram:*\ninstagram.com/flash.xiiit

*youtube:*\nhttps://youtube.com/@flashffx

*facebook page:*\ninstagram.com/flash.xiiit

*script bot :* github.com/noureddineouafy

`.trim()
  m.reply(caption)
}
handler.help = ['owner']
handler.tags = ['infobot']
handler.command = /^(owner)$/i
handler.limit = false

export default handler
