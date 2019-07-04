/* global wait */

const chalk = require('chalk');

module.exports = async client => {
  console.log(chalk.green(`The bot is up`));
  client.user.setPresence({ activity: { name: `Hiding in the closet`, type: 3} });
  /* Note: client.users.size only provides the amount of cached users
     VS the line below providing the amount of memebers on your server specificly.
     ${client.guilds.find("id","378185647346941963").membercount}*/
  try {
      let link = await client.generateInvite(["ADMINISTRATOR"]);
      console.log(link);
  } catch(e) {
      console.log(e.stack);
  }
  client.guilds.find("id","570872095916163075").channels.find("name","admin-bot-spam").send("**(╯°□°）╯︵ ┻━┻!**");
};
