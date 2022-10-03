const { REST, Routes } = require('discord.js');
const dotenv = require('dotenv');
	dotenv.config();
const chalk = require('chalk');

const commands = [];
const command = require(`./youtube.js`);
commands.push(command.data.toJSON());

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: commands })
	.then(() => console.log(`\nSuccessfully deployed ${chalk.bold('youtube')} command\n`))
	.catch(console.error);