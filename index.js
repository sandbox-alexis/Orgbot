require('http').createServer((req, res) => res.end('webServer')).listen();
require('colors');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 32767 });

const fs = require('fs');
const path = require('path');

const config = require(`${process.cwd()}/config.json`);

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));
const dirCommands = fs.readdirSync(path.join(__dirname, 'commands'));

for (const fileEvent of dirEvents){
    const event = require(path.join(__dirname, 'events', fileEvent));
    client.on(event.name, (...args) => event.run(client, ...args));
}

client.commands = new Discord.Collection();
for (const subFolder of dirCommands) {
    const filesCommands = fs.readdirSync(path.join(__dirname, 'commands', subFolder));

    for (fileCommand of filesCommands) {
        const command = require(path.join(__dirname, 'commands', subFolder, fileCommand));
        console.log(`Comando ${command.name} cargado correctamente...`);

        client.commands.set(command.name, command);
    }       
}

client.login(config.token)