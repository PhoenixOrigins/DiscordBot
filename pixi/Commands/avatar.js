const Discord = require("discord.js");
const data = require ('data');

exports.run = (bot, message, args) => {
    if (message.author.id !== '227637597667721217') // if not owner, check room.  var member
      if (message.channel.id == message.guild.channels.find('name','lounge').id) return message.reply("Sorry. I can't use that command here, please use #bot-spam.");
  var member
  let userText = args.join(" ").toLowerCase()
  if (!userText) member = message.member
  else {
     member = message.mentions.members.first() || message.guild.members.filter(m => m.displayName.toLowerCase() == userText).first() || message.guild.members.filter(m => m.user.username.toLowerCase() == userText).first() || message.guild.members.find('id', args[0]) || message.guild.members.filter(m => m.displayName.toLowerCase().indexOf(userText) != -1).first() || message.guild.members.filter(m => m.user.username.toLowerCase().indexOf(userText) != -1).first()
  }
  if (!member) return message.reply("Sorry I couldn't find the user you are looking for!");

  const embed = new Discord.RichEmbed(data)
    .setColor(" #eb0054 ")
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL}`)
    .addField("Avatar", "\u200B")
    .setImage(member.user.displayAvatarURL)
    .setFooter(`Requested by: ${message.author.username}`);
  message.channel.send({embed});
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ava"],
  cat: "utilities"
};

exports.help = {
  name: 'avatar',
  description: 'Displays a user\'s avatar.',
  usage: 'avatar @user'
};
