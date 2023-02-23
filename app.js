const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended : true}))
app.use(express.json({extended : true}))

app.use(express.static('templates'))
app.use(express.static('static'))

let student1 = {
    name: "Arshad", 
    age: 23,
    college: "City College"
}

let student2 = {
    Name: "Amrooz", 
    Age: 27,
    College: "Quli Qutub Shah College"
}

let student3 = {
    name: "Tauqeer", 
    age: 25,
    college: "Osmania University"
}

// For routing html pages
app.get('/', (req, res) => {
    res.sendFile('index.html', {root: __dirname})
})

app.get('/form', (req, res) => {
    res.sendFile('templates\\form.html', {root: __dirname})
})

// API 
app.get('/data', (req, res) => {
    let data =  [student1, student2, student3]
    res.send(data)
})

app.post('/message', (req, res) => {
    let data =  req.body 
    console.log(data)
    res.status(200).json({success:true})
})





app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})