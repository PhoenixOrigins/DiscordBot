const moment = require('moment');
const tz = require('moment-timezone');
const Discord = require('discord.js');
const data = require ('data');

module.exports = (client, member, guild) => {

	const PO = client.guilds.get('570872095916163075');
	const greetChannel = PO.channels.find('name','new-members');
    const logChannel = PO.channels.find('name','new-members');
	let mtag = member.user.tag;
    let newRole = member.addRole(client.guilds.find('id','570872095916163075').roles.find('name','Member'));
    var serverMoment = moment(member.joinedAt);
    var DiscordMoment = moment(member.user.createdAt);
	if (!logChannel) return console.log(chalk.redBright("Log Channel doesn't exist!!"));

    let logEmbed = new Discord.RichEmbed(data)
        .setColor("#eb0054")
        .setAuthor("User Joined")
        .setDescription(`${member.user} (${mtag})`)
        .setThumbnail(member.user.displayAvatarURL)
        .addField("Joined Server", `${serverMoment.tz('Europe/Amsterdam').format("llll")} CET`, true)
        .addField("Joined Discord", `${DiscordMoment.tz('Europe/Amsterdam').format("llll")} CET`, false)
        .setFooter("Member ID: " + member.id)
        logChannel.send({embed: logEmbed});

	    let joinEmbed = new Discord.RichEmbed(data)
        	.setColor("#eb0054")
		.setAuthor(member.user.tag, member.user.displayAvatarURL)
		.setDescription(`Welcome to **Phoenix Origins**, ${member.user}. \r\nHave a fun time here`)
		.setFooter("Member ID: " + member.id)
		.setTimestamp(new Date());
		greetChannel.send({embed: joinEmbed})
		.then(message => {setTimeout(() => message.delete().catch(console.error), 15000)});
};

