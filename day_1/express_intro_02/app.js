const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))


// app.get('/', function (req, res) {
//     res.send("Hi")
//     console.log("Someone has come into the server. Brace yourselves.")
    
// })
app.get('/life', function (req, res) {
    res.send("42")
    console.log("42")
    
})
app.get('/users/:user', function (req, res) {
    res.send(`hello ${users[req.params.user]}`)
    console.log("42")
    
})

app.get('/details' , function(req ,res){
    let params = req.query
    res.send(params)
})

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


const users = {
    tilda: "You've done a wonderful job",
    riva: "You need to improve your form, but good perseverance",
    jeremy: "You're incredible"
}