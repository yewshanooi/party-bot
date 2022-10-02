const chalk = require('chalk');

module.exports = client => {
	console.log(`\nConnected to Discord as ${chalk.bold(`${client.user.tag}`)}\nServing ${chalk.bold(`${client.users.cache.size}`)} user(s) and ${chalk.bold(`${client.channels.cache.size}`)} channel(s) in ${chalk.bold(`${client.guilds.cache.size}`)} guild(s)\n`);
};