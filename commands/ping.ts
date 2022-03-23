import { Message } from "discord.js";

export default {
    callback: (message: Message, ...args: string[]) => {
        console.log(`ping command\n user: ${message.author.tag}\n userID: ${message.author.id}\n ping: ${args}`)
        message.reply('pong')
    }
}