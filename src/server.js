// Padrao de importacao:
// CommomJS => require
// ESModules => import/export

// JSON - JavaScript Object Notation

// Cabecalhos (Requisicao/Resposta) => Metadados

// HTTP Status Code - 


import http from 'node:http'
import { json } from './middlewares/json.js'


const users = []

// Criando server
const server = http.createServer(async( req, res) => {
    const { method, url } = req

    await json(req, res)
    
    if(method === 'GET' && url === '/users'){
        // Early return
        return res
        .setHeader('Content-type', 'aplication/json')
        .end(JSON.stringify(users))
    } 

    if(method === 'POST' && url === '/users'){
        const { name, email } = req.body
        
        users.push({
            id: 1,
            name,
            email,
        })
        return res
        .writeHead(201)
        .end()
    } 

    return res
    .writeHead(404)
    .end('404 Not Found')

    
})

server.listen(3333)