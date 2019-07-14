const Discord = require('discord.js');
const data = require ('data');
const chalk = require('chalk');

    module.exports = async (client, oldMessage, newMessage) => {
		
		
    
    if(oldMessage.author.bot || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','staff-discussion').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','survival-staff').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','skyblock-staff').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','development').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','admin-chat').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','admin-bot-spam').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','skyblock-console').id || 
    oldMessage.channel.id == oldMessage.guild.channels.find('name','survival-console').id) return;
    
        const logChannel = client.guilds.find("id","570872095916163075").channels.find('name', 'discord-message-logs')
    if (!logChannel) return console.log(chalk.redBright("Log Channel doesn't exist!!"));
    
        let editMessageEmbed = new Discord.RichEmbed(data)

        editMessageEmbed.setColor("#cf2bb0");
        editMessageEmbed.setAuthor("Message edited in #" + oldMessage.channel.name, oldMessage.author.displayAvatarURL);
        editMessageEmbed.setDescription(oldMessage.author.tag);
        editMessageEmbed.addField("original message", `Message: ${oldMessage}`);
        editMessageEmbed.addField("edited message", `Message: ${newMessage}`);
        editMessageEmbed.addField("Message ID", oldMessage.id);
        editMessageEmbed.setFooter("Author ID: " + oldMessage.author.id);
        editMessageEmbed.setTimestamp(new Date());
        
        if(oldMessage.attachments.first()) {
        editMessageEmbed.addField("Image: ", oldMessage.attachments.first().url);
}
    logChannel.send({embed: editMessageEmbed});
};