module.exports = {
    name : 'ready',
    run : (client) => {
        console.log('Estoy Listo')

        client.application.commands.set(client.commands.map(x => x));
    }
}