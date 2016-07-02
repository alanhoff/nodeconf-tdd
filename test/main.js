'use strict'

let server = require('../')
let Lab = require('lab')
let lab = exports.lab = Lab.script()
let co = require('co')
let expect = require('code').expect

lab.experiment('GET /', () => {
  lab.test('deve functionar', co.wrap(function * () {
    let res = yield server.inject({ url: '/', method: 'GET' })

    expect(res.statusCode).to.be.equal(200)
    expect(res.result).to.contain('Hello world')
  }))
})

lab.experiment('POST /usuario', () => {
  lab.test('deve criar um usuario', co.wrap(function * () {
    let res = yield server.inject({
      url: '/usuario',
      method: 'POST',
      payload: { nome: 'Alan', sobrenome: 'Hoffmeister' }
    })

    expect(res.statusCode).to.be.equal(200)
    expect(res.result).to.contain('Alan')
  }))
})
