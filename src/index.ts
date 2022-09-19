import tmi from 'tmi.js';

const client = new tmi.Client({
	channels: [ 'my_name' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	// "Alca: Hello, World!"
	console.log(`${tags['display-name']}: ${message}`);
});
					