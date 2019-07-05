const Discord = require('discord.js');
const data = require ('data');
const chalk = require('chalk');

    module.exports = async (client, message, oldMessage, newMessage) => {
    
    if(message.author.bot || 
    message.channel.id == message.guild.channels.find('name','staff-discussion').id || 
    message.channel.id == message.guild.channels.find('name','survival-staff').id || 
    message.channel.id == message.guild.channels.find('name','skyblock-staff').id || 
    message.channel.id == message.guild.channels.find('name','development').id || 
    message.channel.id == message.guild.channels.find('name','admin-chat').id || 
    message.channel.id == message.guild.channels.find('name','admin-bot-spam').id || 
    message.channel.id == message.guild.channels.find('name','skyblock-console').id || 
    message.channel.id == message.guild.channels.find('name','survival-console').id) return;
    
        const logChannel = client.guilds.find("id","570872095916163075").channels.find('name', 'discord-message-logs')
    if (!logChannel) return console.log(chalk.redBright("Log Channel doesn't exist!!"));
    
        let editMessageEmbed = new Discord.RichEmbed(data)

        editMessageEmbed.setColor("#cf2bb0");
        editMessageEmbed.setAuthor("Message delete in #" + message.channel.name, message.author.displayAvatarURL);
        editMessageEmbed.setDescription(message.author.tag);
        editMessageEmbed.addField("original message", `Message: ${oldMessage}`);
        editMessageEmbed.addField("edited message", `Message: ${newMessage}`);
        editMessageEmbed.addField("Message ID", message.id);
        editMessageEmbed.setFooter("Author ID: " + message.author.id);
        editMessageEmbed.setTimestamp(new Date());
        
        if(message.attachments.first()) {
        editMessageEmbed.addField("Image: ", message.attachments.first().url);
}
    logChannel.send({embed: editMessageEmbed});
};