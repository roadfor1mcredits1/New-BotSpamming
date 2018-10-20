var ServerID = "501706352234856449"; //اي دي السيرفر
var ChannelID = "501707166189748225";// اي دي الروم

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

client.on('ready', () => {
    client.channels.get("501724551231701003").join();
    }); 



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
