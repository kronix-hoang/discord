const Discord = require("discord.js");
const {MessageEmbed, MessageAttachment} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
const canvacord = require("canvacord");
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const anime = require('anime-actions');
module.exports = {
  name: "a-bonk",
  aliases: ["abonk", "animebonk", "anime-bonk"],
  category: "😳 Anime-Emotions",
  description: "Shows an Emotion-Expression in an Anime style",
  usage: "a-bonk",
  type: "self",
  run: async (client, message, args, cmduser, text, prefix) => {
    
    let es = client.settings.get(message.guild.id, "embed");let ls = client.settings.get(message.guild.id, "language")
    if(!client.settings.get(message.guild.id, "ANIME")){
        return message.reply({embeds : [new MessageEmbed()
        .setColor(es.wrongcolor).setFooter(client.getFooter(es))
        .setTitle(client.la[ls].common.disabled.title)
        .setDescription(require(`${process.cwd()}/handlers/functions`).handlemsg(client.la[ls].common.disabled.description, {prefix: prefix}))
        ]});
    }
    //send new Message
    message.reply({embeds : [
        new MessageEmbed()
        .setColor(es.color)
        .setImage(await anime.bonk())
        .setAuthor(`${message.author.username} bonks...`, message.author.displayAvatarURL({ dynamic: true }))
    ]}).catch(() => {})
      
  }
}
/**
 * @INFO
 * Bot Coded by Truchorko#5566 | https://discord.gg/utmuExHwyT
 * @INFO
 * Work for Team Arcades | https://team.arcades.ga
 * @INFO
 * Please mention him / Team Arcades, when using this Code!
 * @INFO
 */
