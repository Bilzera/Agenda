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

//app.post('/agenda', (req, res) => {
//  const { name, phone } = req.body || ''
//  const id = lista.length + 1
//  const pessoa = { id, name, phone }
//  lista.push(pessoa)
//  res.send({ pessoa })
//})

app.post('/agenda', (req, res) => {
  const { name, phone } = req.body || ''
  let maiorID = 0
  lista.forEach(x => {
    if (maiorID <= x.id) {
      maiorID = x.id
      maiorID = maiorID + 1
    }
  })

  const pessoa = { maiorID, name, phone }
  lista.push(pessoa)
  res.send({ pessoa })
})


app.get('/agenda/:id', (req, res) => {
  const idParams = req.params.id
  const pessoa = lista.filter(p => p.id == idParams)
  res.send(pessoa)
})

app.delete('/agenda/:id', (req, res) => {
  const idParams = req.params.id
  lista.splice(lista.findIndex(i => i.id == idParams), 1)
  res.send("removido com sucesso")
})



//app.update('/agenda/:id', (req, res) => {
 // const idParams = req.params.id
  //lista.update(lista.findIndex(i => i.id == idParams), 1)
 // res.send("")
//})


