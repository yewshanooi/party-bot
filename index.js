const dotenv = require('dotenv');
	dotenv.config();
const chalk = require('chalk');
global.errors = require('./errors.js');

const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.DirectMessages, GatewayIntentBits.DirectMessageReactions, GatewayIntentBits.DirectMessageTyping], partials: [Partials.Channel] });
client.commands = new Collection();

const command = require(`./youtube.js`);
client.commands.set(command.data.name, command);

if (!process.env.TOKEN) throw new Error(`${chalk.redBright.bold('[Error]')} The enviromental variable ${chalk.bold('TOKEN')} is not set`);
if (!process.env.CLIENT_ID) throw new Error(`${chalk.redBright.bold('[Error]')} The enviromental variable ${chalk.bold('CLIENT_ID')} is not set`);


require('./event')(client);

client.login(process.env.TOKEN);