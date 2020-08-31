const express = require("express")
const app = express() 
const path = require("path")
const url = require("urllib")
const jquery = require("jquery")

// app.get("/" , function(req,res){
//     res.send("Welcome!")
// })

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))



app.get("/priceCheck/:productName", function(req,res){
    const item = req.params.productName
    const product = store.find(i => i.name == item )  || { price:null } 
    res.send({price:product.price})
})

app.get("/buy/:name", function(req,res){
    const item = req.params.name
    const product = store.findIndex(i => i.name === item )  || { price:null } 
    store[product].inventory--
    res.send(store[product])
})

app.get("/sale/", function(req,res){
    const params = req.query
    if(params.admin === "true"){
        store.forEach(p => {
            if(p.inventory > 10){
                p.price /= 2
            }
        })
        res.send(store)
    }
    
    res.send(store[product])
})
const store = [
    { name: "table", inventory: 3, price: 800 },
    { name: "chair", inventory: 16, price: 120 },
    { name: "couch", inventory: 1, price: 1200 },
    { name: "picture frame", inventory: 31, price: 70 }
]


const port = 3000
app.listen(port, function(req,res){
    console.log(`Server is up and running smoothly on port ${port}`)
})