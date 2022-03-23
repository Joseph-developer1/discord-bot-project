import { Message } from "discord.js";

export default {
    callback: (message: Message, ...args: string[]) => {
        let sum = 0

        for (const arg of args) {
            sum += parseInt(arg)
        }

        console.log(`add command\n user: ${message.author.tag}\n userID: ${message.author.id}\n add: ${args}`)

        message.reply(`the sum is ${sum}`)
    },
}