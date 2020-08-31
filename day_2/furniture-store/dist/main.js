const $product          = $("#product")
const $getPrice         = $("#get-price")
const $resContainer   = $("#res-container")
const $toBuy            = $("#product-to-buy")
const $buyProduct       = $("#buy-product")

$getPrice.on("click" , function(){
    $.get(`/priceCheck/${$product.val()}`, function(res){
        console.log(res.price)
        let price = res.price
        $resContainer.empty().append(`<p class='res'>The Price of ${$product.val()} is ${price}$</p>`)
    })
})
$buyProduct.on("click" , function(){
    $.get(`/buy/${$toBuy.val()}`, function(res){
        console.log(res)
        let product = res
        $resContainer.empty().append(`<p class='res'>You just bought ${$toBuy.val()} for ${product.price}$ ther're ${product.inventory} left </p>`)
    })
})