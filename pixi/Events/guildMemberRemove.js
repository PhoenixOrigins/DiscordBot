const moment = require('moment');
const Discord = require('discord.js');
const data = require ('data');

module.exports = (client, member, guild) => {
	
	const PO = client.guilds.get('570872095916163075');
    const logChannel = PO.channels.find('name','new-members');
	let mtag = member.user.tag;
	if (!logChannel) return console.log(chalk.redBright("Log Channel doesn't exist!!"));
	
	let leaveEmbed = new Discord.RichEmbed(data)
		.setColor("#eb0054")
		.setAuthor("User Left")
		.setDescription(`${member.user} (${mtag})`)
		.setThumbnail(member.user.displayAvatarURL)
		.setFooter("Member ID:  " + member.id)
		.setTimestamp(new Date())
		logChannel.send({embed: leaveEmbed});
};
