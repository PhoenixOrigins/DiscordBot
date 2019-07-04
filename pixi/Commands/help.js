const config = require("/home/pixi/config.json");
const prefix = config.prefix;

function upFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.run = (client, message, params) => {
	var messageSend = ""
	
	if (!params[0]) {
		const commandNames = Array.from(client.commands.keys());
		const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
		
		var category = []
		client.commands.map(c => {
			if (!category[c.conf.cat]) category[c.conf.cat] = "";
			category[c.conf.cat] += `\n${client.config.prefix}${c.help.name}${' '.repeat(longest - c.help.name.length)} :: ${c.help.description}`
		})
		messageSend = (`= Command List =\n\n[Use ${client.config.prefix}help <commandname> for details]\n`)
		for (var key in category) {
			if (category.hasOwnProperty(key)) {
        if ((messageSend.length+`\n= ${upFirst(key)} =${category[key]}`.length)<2000){
          messageSend += `\n= ${upFirst(key)} =${category[key]}`
        }else{
          message.author.send(messageSend, {
      			code: 'asciidoc'
      		}).catch(error => message.channel.send(`Please ${message.author}, you need to enable messages from server members!`));
          messageSend = `\n= ${upFirst(key)} =${category[key]}` 
          message.channel.send("Help has been sent to your DM's").then(message => {setTimeout(() => message.delete().catch(console.error), 5000)});
        }
			}
		}
	} else {
		let command = params[0];
		if (client.commands.has(command)) {
			command = client.commands.get(command);
			messageSend = (`= ${upFirst(command.help.name)} = \nDesc  :: ${command.help.description}\nUsage :: ${client.config.prefix}${command.help.usage}`);
		}
	}
	if (messageSend != "") {
		message.author.send(messageSend, {
			code: 'asciidoc'
		}).catch(error => message.channel.send(`Please ${message.author}, you need to enable messages from server members!`));
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  cat: "utilities"
};

exports.help = {
  name: 'help',
  description: 'Displays all the available commands or specific command\'s help.',
  usage: 'help [command]'
};
