const Discord = require("discord.js");
const config = require("/home/pixi/config.json");
const data = require ('data');
const prefix = config.prefix;

module.exports = async (client, message, member) => {
  if (message.author.bot) return; // Ignores bots


// Prefix check (Will need to remove for reply messages)
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.split(/ +/g);
    const command = args.shift().slice(config.prefix.length).toLowerCase();
    const cmd = client.commands.get(command) || 
				client.commands.get(client.aliases.get(command));
        if (cmd) {
        if (!cmd.conf.enabled)  return message.reply("This command is currently disabled");
        if (cmd.conf.guildOnly && message.channel.type == "dm") return message.reply("This commands is only available in a guild!");
		
	cmd.run(client, message, args);
  }
}
