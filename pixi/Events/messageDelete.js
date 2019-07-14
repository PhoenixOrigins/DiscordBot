const Discord = require('discord.js');
const data = require ('data');
const chalk = require('chalk');

    module.exports = async (client, message) => {
    
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
    
        let deleteMessageEmbed = new Discord.RichEmbed(data)

        deleteMessageEmbed.setColor("#eb0054");
        deleteMessageEmbed.setAuthor("Message deleted in #" + message.channel.name, message.author.displayAvatarURL);
        deleteMessageEmbed.setDescription(message.author.tag);
        deleteMessageEmbed.addField("Text", `Message: ${message.content}`);
        deleteMessageEmbed.addField("Message ID", message.id);
        deleteMessageEmbed.setFooter("Author ID: " + message.author.id);
        deleteMessageEmbed.setTimestamp(new Date());
        
        if(message.attachments.first()) {
        deleteMessageEmbed.addField("Image: ", message.attachments.first().url);
}
    logChannel.send({embed: deleteMessageEmbed});
};