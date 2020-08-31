const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/books/:bookId', function (req, res) {
    let bookId = req.params.bookId
    res.send(data[bookId])
    
})


const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}

const port = 3000
app.listen(port, function(){
    console.log(`Running server on port ${port}`)
})


