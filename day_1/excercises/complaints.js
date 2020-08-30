const consts = require("./consts")
const handler = require("./complaintsHandler")

let complaint1 = {
    text: "I'm not getting enough money",
    type: consts.FINANCE//use the FINANCE type from the consts module
}

let complaint2 = {
    text: "My salary hasn't come in yet",
    type: consts.FINANCE//use the FINANCE type from the consts module
}

let complaint3 = {
    text: "I'm always full of energy",
    type: consts.EMOTIONS//use the EMOTIONS type from the consts module
}

handler.handleComplaints(complaint1.type) //should print "Money doesn't grow on trees, you know."
handler.handleComplaints(complaint2.type) //should print "Money doesn't grow on trees, you know."
handler.handleComplaints(complaint3.type) //should print "It'll pass, as all things do, with time."
