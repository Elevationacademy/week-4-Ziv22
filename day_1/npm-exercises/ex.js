const validator = require('validator');
var faker = require('faker');
const { image, company } = require('faker');



//Ex. 1
//Check whether "shoobert@dylan" is a valid email (should be false)
console.log(`Does "shoobert@dylan" is a valid email? Answer: ${validator.isEmail("shoobert@dylan")}`)

//Ex. 2
//Check whether "786-329-9958" is a valid US mobile phone number (should be true) - use the en-US locale
console.log(`Does "shoobert@dylan" is a valid email? Answer: ${validator.isMobilePhone("786-329-9958", "en-US")}` )
//Ex. 3
//Use the following blacklist
let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let input = "!" + "?" + "." + "@" + "~" + "," + "' blsdafsdfnc ksdjnfckjewnw"
console.log(validator.blacklist(input, blacklist))
//Along with validator's `blacklist` method to clean this text:
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist))
//Ultimately, it should print "im so excited"

const makeHuman = num =>{
    let people = []
    for (let index = 0; index < num; index++) {
        people.push({name: faker.name.firstName(),image: image.avatar(), company:company.companyName()})
    }
    return people
}
console.log(makeHuman(5))

