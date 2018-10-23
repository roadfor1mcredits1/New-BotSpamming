var ServerID = "502892621048578048"; //اي دي السيرفر
var ChannelID = "502893066487857172";// اي دي الروم

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '1';

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 }); 




//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
