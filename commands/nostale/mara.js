module.exports = {
    name : 'mara',
    description : 'Mara List',
    options : [
        {
            type : 3,
            name : 'raid',
            description :'Raid Name',
            required : true
        },        
        {
            type : 4,
            name : 'players',
            description : 'How many players be needed on the raid',
            required : true,
        },
        {
            type : 3,
            name : 'time',
            description : 'Server Time Start',
            required : true,
        },
    ],
    run: async (client, int) => {
        const nombreRaid = int.options.getString('raid');
        const maxPlayers = int.options.getInteger('players');
        const time = int.options.getString('time');
        let list = [];
        let lpsp = [];
        let lastReact;
        let psp = ['ducat', 'chloe', 'harle', 'laurena', 'ragnar', 'luci', 'test', 'venus'];
        let pspId =  ['1043645316055961610', '1043645314474709032', '1043645317687562240', '1043645319029735536', '1043645321655373944', '1043645320065728573', '1043645323530227722', 'venus'];
        let numeros = "";
        for (let i = 1; i <= maxPlayers; i++){
            numeros += `${i}.\n`
        }

        int.reply("```fix\n" + `Raid ${nombreRaid} Server Time: ${time}\n` + "```\n```CS\n" + `\nRequisitos: 6 Attack potions + 1 Tarot Sun/Devil + 1 Fairy Booster.\nPets: Damage pet, partner\n\n${numeros}` + "\n```");

        const message = await int.fetchReply();
        message.react('✅');
        message.react('❎');        

        const filter = (reaction, user) => {
            return (reaction.emoji.name === '✅' || reaction.emoji.name === '❎' || psp.includes(reaction.emoji.name)) && user.id != message.author.id;
        };
        
        const collector = message.createReactionCollector({ filter, time: 3600_000 });        
        
        collector.on('collect', (reaction, user) => {            
            reaction.users.remove(user.id)            
            if (list.includes(user.username)) {
                if (reaction.emoji.name === '✅') return;
                else {
                    let index = list.indexOf(user.username);
                    indexpsp = psp.indexOf(lastReact);                    

                    switch (reaction.emoji.name){
                        case 'ducat':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = '- Daniel Ducat'
                            message.reactions.cache.get('1043645316055961610').remove();
                        break;

                        case 'chloe':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = '- Chloe';
                            message.reactions.cache.get('1043645314474709032').remove();
                        break;

                        case 'laurena':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = '- Laurena';
                            message.reactions.cache.get('1043645319029735536').remove();
                        break;

                        case 'harle':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = '- Harle';
                            message.reactions.cache.get('1043645317687562240').remove();
                        break;

                        case 'luci':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = "- Lucifer";
                            message.reactions.cache.get('1043645320065728573').remove();
                        break;

                        case 'test':
                            lastReact = reaction.emoji.name;
                            lpsp[index] = "- Test";
                        break;
                        
                        default:
                            list[index] = '';
                            lpsp[index] = '';                                           
                            if (lastReact === psp[indexpsp]){                            
                                message.react(pspId[indexpsp]);
                            }
                        break;
                    }                  
                }              
            }
            else if (list.includes(''))
            {
                if (reaction.emoji.name === '❎') return;
                let index = list.indexOf('');
                list[index] = user.username;                
            }   
            else
            {
                list.push(user.username);
                lpsp.push('- ?');
                console.log(nombreRaid);
                switch (nombreRaid)
                {
                    case 'Fernon':
                    case 'fernon':
                    case 'FERNON':
                    case 'Kirollas':
                    case 'kirollas':
                    case 'KIROLLAS':

                    break;
                    
                    case 'Carno':
                    case 'carno':
                    case 'CARNO':
                    case 'Belial':
                    case 'belial':
                    case 'BELIAL':
                    case 'Laurena':
                    case 'laurena':
                    case 'LAURENA':
                        message.react('1043645320065728573');
                    break;
                }
                message.react('1043645314474709032');
                message.react('1043645316055961610');
                message.react('1043645319029735536');
                message.react('1043645317687562240');                
                message.react('1043645323530227722');
            }            
            numeros = "";
            for (i = 0; i < maxPlayers; i++){
                if (list[i] === undefined)
                {
                    list[i] = '';
                    lpsp[i] = '';
                }
                numeros += `${i+1}. ${list[i]} ${lpsp[i]}\n`
            }

            message.edit("```fix\n" + `Raid ${nombreRaid} ${time}\n` + "```\n```CS\n" + `\nRequisitos: 6 Attack potions + 1 Tarot Sun/Devil + 1 Fairy Booster.\nPets: Damage pet, partner\n\n${numeros}` + "\n```");
        });
        
        collector.on('end', collected => {
            console.log(`Collected ${collected} items`);
        });
    }
}