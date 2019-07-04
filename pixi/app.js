const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();
const fs = require("fs");
const chalk = require('chalk');
const set = new Set();
const Enmap = require("enmap");

client.commands = new Enmap();
client.aliases = new Enmap();

client.config = config;

client.on("ready", () => {
    console.log("I am ready!");
});

    fs.readdir('./Commands/', (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
    if(f.split(".").slice(-1)[0] !== "js") return;
        let props = require(`./Commands/${f}`);
        client.commands.set(props.help.name, props);
    if(props.init) props.init(client);
    props.conf.aliases.forEach(alias => {
    client.aliases.set(alias, props.help.name);
    });
  });
        console.log(chalk.yellow(`Loading a total of ${files.length} commands`))
});

    fs.readdir('./Events/', (err, files) => {
        if (err) console.error(err);
        files.forEach(file => {
            const eventName = file.split(".")[0];
            const event = require(`./events/${file}`);
            client.on(eventName, event.bind(null, client));
            delete require.cache[require.resolve(`./events/${file}`)];
        });
        console.log(chalk.yellow(`Loading a total of ${files.length} events.`));
    });

console.log(chalk.greenBright(` Start Time: ${new Date().toLocaleTimeString()}`));
console.log(chalk.green(" ---------------------------------------------"))


client.login(config.botToken);