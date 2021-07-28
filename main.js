const { EILSEQ } = require('constants');
const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '!';

const fs=require('fs');
const kenji = require('./commands/kenji');
const support = require('./commands/support');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith(".js"));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}



client.once('ready', () =>{
    console.log('Delta Bot is online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot ) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'zdrave'){
        client.commands.get('zdrave').execute(message, args);
    } 
    else if(command == 'roleinfo'){
        client.commands.get('roleinfo').execute(message,args);
    }
    else if(command == "commands"){
        client.commands.get('commands').execute(message,args);
    }
    else if(command == 'udri'.toLowerCase()){
        message.channel.send('sirinie');
    } 
    else if(command == 'support'){
        client.commands.get('support').execute(message,args);
    }
    else if(command == 'spotifyaccount'.toLowerCase()){
        client.commands.get('spotifyaccount').execute(message,args);
    }
    else if(command == 'github'){
        client.commands.get('github').execute(message,args);
    }
    else if(command == 'kenji'.toLowerCase()){
        client.commands.get('kenji').execute(message,args);
    }
    else if(command == 'becomeadeveloper'.toLowerCase()){
        client.commands.get('becomeadeveloper').execute(message,args);
    }
}) 

client.login('ODMwODc2NTI1NjQ5ODU0NDY0.YHNEEA.jf-8B5YLBEesWudmUBjcjFoAV5Y');
