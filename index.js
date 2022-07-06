const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
const prefix = '!';
const dotenv = require('dotenv');
	dotenv.config();

const helpembed = new Discord.MessageEmbed()
    .setColor('#ffc83d')
    .setTitle('Commands')
    .addField(`${prefix}**youtube**`, '*Watch some YouTube videos with friends!*')
    .addField(`${prefix}**poker**`, '*Play some poker with friends!*')
    .addField(`${prefix}**betrayal**`, '*Wanna play Among Us in Discord?*')
    .addField(`${prefix}**fishing**`, '*Catch some fish with friends!*')

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity(`${prefix}help`, {
        type: "WATCHING"
    });
});

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;

    var args = message.content.match(/[^_\W]+/g);
    args = (args == null) ? "" : args.join(' ').toLowerCase().trim().split(/ +/g);
    var cmd = (args != "" && message.content.charAt(0) === prefix) ? args.shift() : false;

    if (cmd === `youtube`) {
        if (!message.channel.permissionsFor(message.guild.me).has("CREATE_INSTANT_INVITE")) return message.channel.send("❌ | Missing permission: `Create Invite`");
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755600276941176913",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
			✅ **Party created!**\nUse the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
			`);
        }).catch(e => {
            message.channel.send("❌ | Could not start **YouTube Together**!");
        })
    }

    if (cmd === `poker`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "755827207812677713",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
			✅ **Party created!**\nUse the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
			`);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Poker Night**!");
        })
    }

    if (cmd === `betrayal`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "773336526917861400",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
            ✅ **Party created!**\nUse the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
            `);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Betrayal.io**!");
        })
    }

    if (cmd === `fishing`) {
        if (!message.member.voice.channel) return message.channel.send("To use this command, you must join a voice channel.")
        fetch(`https://discord.com/api/v8/channels/${message.member.voice.channelID}/invites`, {
            method: "POST",
            body: JSON.stringify({
                max_age: 86400,
                max_uses: 0,
                target_application_id: "814288819477020702",
                target_type: 2,
                temporary: false,
                validate: null
            }),
            headers: {
                "Authorization": `Bot ${client.token}`,
                "Content-Type": "application/json"
            }
        }).then(response => response.json()).then(data => {
            message.channel.send(`
            ✅ **Party created!**\nUse the Referral link to join the party and invite your friends.\n\nReferral Link: https://discord.gg/${data.code}
            `);
        }).catch(e => {
            message.channel.send("❌ | Could not start **Fishington.io**!");
        })
    }

    if (cmd === `help`) {
        if (!message.channel.permissionsFor(message.guild.me).has("EMBED_LINKS")) return message.channel.send("❌ | Missing permission: `EMBED_LINKS`");
        message.channel.send(helpembed)
    }

});

client.login(process.env.TOKEN);