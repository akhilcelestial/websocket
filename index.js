const webSocket = require('ws');


const wss = new webSocket.Server({port:5001});

wss.on('connection',ws=>{
    console.log("new client connected")
    ws.on('message',data=>{
        console.log(`client send${data}`)
        ws.on(data.toUpperCase())
    })
    ws.on('close',()=>{console.log("close connection... ")})
})