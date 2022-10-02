const Discord = require('discord.js');

const guildOnlyCmd = new Discord.EmbedBuilder()
    .setTitle('Error')
    .setDescription('This command cannot be executed in Direct Messages.')
    .setColor('#ff5555');

module.exports = [guildOnlyCmd];