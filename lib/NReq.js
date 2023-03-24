const http = require('http')
const https = require('https')
const player = require('./player_data.json')
//const express = require('express')//neww
//const app = express()//new

function request(method,protocal,host,port,path,payload,headers)
{
    if(port === 443){
    const options = {
    host: host,
    port: port,
    path: path,
    method: method,
    headers: headers
    }
    if(method === `POST`){
        payload = JSON.stringify(payload)
    }

    let req = https.request( options , (resp) => 
    {

    let respdata = ``

    resp.on(`data`,(chunk) => {
        respdata += chunk.toString()
    })

    resp.on(`end`, function(){
        let resp= convertStringtoJSON(respdata)
        console.log(resp)
    })
    })
    if(method === `POST`){
        req.write(payload)
    }
req.end()

function convertStringtoJSON(data)
{
    try{  
    return JSON.parse(data) 
    }catch(excp){  
    return data 
    }
}
    }else if(port === 9818){
            const PORT = process.env.PORT || port
    let server = http.createServer(onClientRequest)
    server.listen(PORT)
    console.log('Server started listening in ' + PORT )
    
    function onClientRequest(request, response)
    {
        let method = request.method
        let requrl = request.url
    
        if(method === `GET` && requrl === `/hi`)
        {
                response.write(`Hello on Get`)
        }
        else if(method === `POST` && requrl === `/hi`){
            response.write(`Hello on Post`)
                }
        else{
            response.write(`Nothing...`)
        }
        response.end()
    }
    /*}else if(port === 10001){//new
        
        const PORT = process.env.PORT || port
    let server = http.createServer(onPlayerService)
    server.listen(PORT)
    console.log('Server started listening in player port ' + PORT )

    function onPlayerService(request, response)
    {
        let method = request.method
        let requrl = request.url

        if(app.post('/player')){
            response.player

        }else{
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write(`"code": 4 , "msg": "nothing"`);
            response.end();
        }

    }*/}
    

}


module.exports = {
    http,
    https,
    //player,
    //app,
    request,
}