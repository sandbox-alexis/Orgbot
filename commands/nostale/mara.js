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
        let lsp = [];
        let lastpspReact;
        let lastspReact;
        let psp = ['ducat', 'chloe', 'harle', 'laurena', 'ragnar', 'luci', 'test', 'freya'];
        let pspId =  ['1043645316055961610', '1043645314474709032', '1043645317687562240', '1043645319029735536', '1043645321655373944', '1043645320065728573', '1043645323530227722', '1043907567224631296'];
        let sp = ['destro', 'serker', 'dg', 'scout', 'blade', 'sader', 'am', 'wk', 'tl', 'holy'];
        let spId = ['1043944342458466356', '1043944959516094496', '1043944343578349649', '1043944958475894965', '1043944337886674984', '1043944625913737377', '1043944333474275328', '1043944962691170436', '1043944961193807872', '1043944621979488326'];
        let numeros = "";
        for (let i = 1; i <= maxPlayers; i++){
            numeros += `${i}.\n`
        }

        int.reply("```fix\n" + `Raid ${nombreRaid} Server Time: ${time}\n` + "```\n```CS\n" + `\nRequisitos: 6 Attack potions + 1 Tarot Sun/Devil + 1 Fairy Booster.\nPets: Damage pet, partner\n\n${numeros}` + "\n```" + `\n<@&818903555301310543>`);

        const message = await int.fetchReply();
        message.react('✅');
        message.react('❎');        

        const filter = (reaction, user) => {
            return (reaction.emoji.name === '✅' || reaction.emoji.name === '❎' || psp.includes(reaction.emoji.name) || sp.includes(reaction.emoji.name)) && user.id != message.author.id;
        };
        
        const collector = message.createReactionCollector({ filter, time: 3600_000 });        
        
        collector.on('collect', (reaction, user) => {            
            reaction.users.remove(user.id);
            indexpsp = psp.indexOf(lastpspReact);
            indexsp = sp.indexOf(lastspReact);
            let index = list.indexOf(user.username);                       
            if (list.includes(user.username)) {                
                if (reaction.emoji.name === '✅') return;
                else if (psp.includes(reaction.emoji.name)) {                    
                    let pId = '';
                    if (lastpspReact != undefined){
                        message.react(pspId[indexpsp]);
                    }           

                    switch (reaction.emoji.name){
                        case 'ducat':                                                  
                            lpsp[index] = '- Daniel Ducat'
                            pId = '1043645316055961610'
                            message.reactions.cache.get(pId).remove();                            
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'chloe':
                            lpsp[index] = '- Chloe';
                            pId = '1043645314474709032';
                            message.reactions.cache.get(pId).remove();                            
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'laurena':
                            lpsp[index] = '- Laurena';
                            pId = '1043645319029735536';
                            message.reactions.cache.get(pId).remove();                            
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'harle':
                            lastpspReact = reaction.emoji.name;
                            lpsp[index] = '- Harle';
                            pId = '1043645317687562240';
                            message.reactions.cache.get(pId).remove();                            
                        break;

                        case 'luci':
                            lpsp[index] = "- Lucifer";
                            pId = '1043645320065728573';
                            message.reactions.cache.get(pId).remove();                            
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'freya':                            
                            lpsp[index] = "- Freya";
                            pId = '1043907567224631296';
                            message.reactions.cache.get(pId).remove();                            
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'test':                            
                            lpsp[index] = "- Test";
                            lastpspReact = reaction.emoji.name;
                        break;                        
                    }                  
                }
                else if (sp.includes(reaction.emoji.name)) {                    
                    let sId = '';
                    if (lastspReact != undefined){
                        message.react(spId[indexsp]);
                    }
                    
                    switch (reaction.emoji.name)
                    {
                        case 'destro':
                            lsp[index] = '- Destroyer'
                            sId = '1043944342458466356'
                            message.reactions.cache.get(sId).remove();                            
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'dg':
                            lsp[index] = '- DG'
                            sId = '1043944343578349649'
                            message.reactions.cache.get(sId).remove();                            
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'serker':
                            lsp[index] = '- Serker'
                            sId = '1043944959516094496'
                            message.reactions.cache.get(sId).remove();                            
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'scout':
                            lsp[index] = "- Scout";
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'blade':
                            lsp[index] = "- Blade";
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'wk':
                            lsp[index] = "- WK";
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'sader':
                            lsp[index] = "- Sader";
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'tl':
                        case 'blue':
                            lsp[index] = "- Mago";
                            lastspReact = reaction.emoji.name;
                        break;

                        case 'am':
                            lsp[index] = '- AM';
                            lastpspReact = reaction.emoji.name;
                        break;

                        case 'am':
                            lsp[index] = '- Holy';
                            lastpspReact = reaction.emoji.name;
                        break;
                    }
                }
                else {
                    list[index] = '';
                    lpsp[index] = '';
                    lsp[index] = '';
                    if (lastpspReact != undefined){                        
                        message.react(pspId[indexpsp]);
                    }
                    if (lastspReact != undefined) {
                        message.react(spId[indexsp])
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
                lsp.push('- ?');
                message.react('1043645314474709032'); //Chloe
                message.react('1043645316055961610'); //Ducat
                message.react('1043645319029735536'); //Laurena
                message.react('1043645317687562240'); //Harle
                message.react('1043645323530227722'); //Test
                switch (nombreRaid)
                {
                    case 'Fernon':
                    case 'fernon':
                    case 'FERNON':
                    case 'Kirollas':
                    case 'kirollas':
                    case 'KIROLLAS':
                    case 'Kiro':
                    case 'kiro':
                    case 'KIRO':
                        message.react('1043907567224631296'); //Freya
                        message.react('1043944958475894965'); //Scout
                        message.react('1043944337886674984'); //Blade
                        message.react('1043944961193807872'); //TL

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
                        message.react('1043645320065728573'); //Luci
                        message.react('1043944333474275328'); //Archimago
                        message.react('1043944962691170436'); //WK
                        message.react('1043944621979488326'); //Holy
                    break;
                }
                message.react('1043944625913737377'); //Sader
                message.react('1043944342458466356'); //Destro
                message.react('1043944959516094496'); //Serker
                message.react('1043944343578349649'); // DG              
            }            
            numeros = "";
            for (i = 0; i < maxPlayers; i++){
                if (list[i] === undefined)
                {
                    list[i] = '';
                    lpsp[i] = '';
                    lsp[i] = '';
                }
                numeros += `${i+1}. ${list[i]} ${lsp[i]} ${lpsp[i]}\n`
            }

            message.edit("```fix\n" + `Raid ${nombreRaid} Server time: ${time}\n` + "```\n```CS\n" + `\nRequisitos: 6 Attack potions + 1 Tarot Sun/Devil + 1 Fairy Booster.\nPets: Damage pet, partner\n\n${numeros}` + "\n```\n\n" +  `<@&818903555301310543>`);
        });
        
        collector.on('end', collected => {
            console.log(`Collected ${collected} items`);
        });
    }
}