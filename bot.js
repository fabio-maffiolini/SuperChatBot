const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NDU4NjcyODU2NzI1OTc5MTc5.Dg0v-Q.CZB4zKnMZwXt70PzlSnm40tmGZg);
