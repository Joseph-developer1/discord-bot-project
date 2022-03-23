import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const prefix = ';'

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    let handler = require('./command-handler')
    if (handler.default) handler = handler.default
    handler(client)
    console.log('the bot is ready')
})



client.login(process.env.TOKEN)