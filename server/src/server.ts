import express from 'express'

const app = express()

app.get('/ads', (request, response) => {
  return response.json([
    {"id": 1, "name": "Anuncio1"},
    {"id": 1, "name": "Anuncio2"},
    {"id": 1, "name": "Anuncio3"},
  ])
})

app.listen(3333)