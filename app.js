const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

const lista = [
  {
    id: 1,
    name: "Emanuel",
    phone: "988776644"
  },
  {
    id: 2,
    name: "Rodrigues",
    phone: "988776655"
  },
  {
    id: 3,
    name: "Epaminondas",
    phone: "988776666"
  }
]


app.listen(3000, () => console.log('server up'))

app.get('/agenda', (req, res) => {
  res.send(lista)
})

app.post('/agenda', (req, res) => {
  const { name, phone } = req.body || ''
  const id = lista.length + 1
  const pessoa = { id, name, phone }
  lista.push(pessoa)
  res.send({ pessoa })
  console.log(req.body)
  //lista.push()
})

app.get('/agenda/:id', (req, res) => {
  const idParams = req.params.id
  const pessoa = lista.filter(p => p.id == idParams)
  res.send(pessoa)
})

app.delete('/agenda/:id', (req, res) => {
  const idParams = req.params.id
  //percorrer a lista e encontrar o indice baseado no ID fornecido
  //passamdo id 2 ele retornaria in
  lista.pop(1)

})


