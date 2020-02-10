;
const express = require('express')
let api = express.Router(),
  control = require('../controles/crud')

api.get('/cine', control.getDatos)
api.post('/cine', control.postDatos)
api.put('/cine', control.updateDatos)
api.delete('/cine', control.deleteDatos)

api.post('/login', control.login)

module.exports = api
