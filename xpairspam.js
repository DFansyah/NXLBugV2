/*
    If You Want Add Your Name Just Add Not Delete This
    Don't Delete This To Support Creator
    
    Thanks To    
    Baileys [ WhiskeySockets ]
    Base Script [ DGXeon ]
    My Respect [ Zeeone OFC ]
    Developer [ D Fansyah ]
    Recode [ Your Name ]
    
*/

const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const pino = require('pino');
const readline = require("readline");


    const color = [
        '\x1b[31m', 
        '\x1b[32m', 
        '\x1b[33m', 
        '\x1b[34m', 
        '\x1b[35m', 
        '\x1b[36m', 
        '\x1b[37m',
        '\x1b[90m' 
    ];
    const color = color[Math.floor(Math.random() * color.length)];

const xColor = '\x1b[0m';

const question = (text) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    return new Promise((resolve) => { rl.question(text, resolve) });
};

async function project() {
    const { state } = await useMultiFileAuthState('./69/session');
    const NXL = makeWASocket({
        logger: pino({ level: "silent" }),
        printQRInTerminal: false,
        auth: state,
        connectTimeoutMs: 60000,
        defaultQueryTimeoutMs: 0,
        keepAliveIntervalMs: 10000,
        emitOwnEvents: true,
        fireInitQueries: true,
        generateHighQualityLinkPreview: true,
        syncFullHistory: true,
        markOnlineOnConnect: true,
        browser: ["Ubuntu", "Chrome", "20.0.04"],
    });
    try {
        // Ask for phone number
        const phoneNumber = await question(color + 'Enter target number🤙 : ' + xColor);
        
        // Request the desired number of pairing codes
        const code = parseInt(await question(color + 'Amount 😽 : '+ xColor));

        if (isNaN(code) || code <= 0) {
            console.log('example : 20.');
            return;
        }

        // Get and display pairing code
        for (let i = 0; i < code; i++) {
            try {
                let code = await NXL.requestPairingCode(phoneNumber);
                code = code?.match(/.{1,4}/g)?.join("-") || code;
                console.log(color + `${phoneNumber} [${i + 1}/${code}]`+ xColor);
            } catch (error) {
                console.error('Error:', error.message);
            }
        }
    } catch (error) {
                 console.error('error') ;
}

    return NXL;
}
console.log(color + `═╗ ╦┌─┐┌─┐┌┐┌  ╔═╗┌─┐┌─┐┌┬┐  ╔╗╔┌─┐┌┬┐┬┌─┐┬┌─┐┌─┐┌┬┐┬┌─┐┌┐┌
╔╩╦╝├┤ │ ││││  ╚═╗├─┘├─┤│││  ║║║│ │ │ │├┤ ││  ├─┤ │ ││ ││││
╩ ╚═└─┘└─┘┘└┘  ╚═╝┴  ┴ ┴┴ ┴  ╝╚╝└─┘ ┴ ┴└  ┴└─┘┴ ┴ ┴ ┴└─┘┘└┘` + xColor);

project();