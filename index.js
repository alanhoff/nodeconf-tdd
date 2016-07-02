'use strict'

let Hapi = require('hapi')
let server = module.exports = new Hapi.Server()

server.connection({ port: 8080 })

server.route({
  path: '/',
  method: 'GET',
  handler: (request, reply) => reply('Hello world')
})

server.route({
  path: '/usuario',
  method: 'POST',
  handler: (request, reply) => reply(`Olá ${request.payload.nome}!`)
})

server.start()
