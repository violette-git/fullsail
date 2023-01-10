




// tells the user what is happening
alert('I will be prompting you for the name of 2 items to buy, the cost of each item, and the sales tax %. With that information, we will be creating a receipt that will show you the total cost spent for each item, the sales tax amount, the sub-total and the total with tax.')
// prompt the user for each item
let item1 = prompt('Enter your first item')
let item2 = prompt('Enter your second item')
// prompt the user for the price and quantity for each item
let priceFor1 = parseFloat(prompt(`What is the price of ${item1} ?`))
let quan1 = parseInt(prompt(`How many of ${item1} do you want to purchase?`))
let priceFor2 = parseFloat(prompt(`What is the price of ${item2} ?`))
let quan2 = parseInt(prompt(`How many of ${item2} do you want to purchase?`))
// prompt the user for tax in whole number format
let taxed = parseInt(prompt('Enter the sales tax as a whole number; ex: "4"'))
// turning tax value into decimal for easier math
let tax = taxed /  100
// determine cost per item
let costFor1 = (priceFor1 + (priceFor1*tax)) * quan1
let costFor2 = (priceFor2 + (priceFor2*tax)) * quan2
// calculate subtotal
let subTotal = (priceFor1*quan1) + (priceFor2*quan2)
// calculate tax for purchase
let soloTax = ((priceFor1*quan1) + (priceFor2*quan2)) * tax

let totalCost = costFor1 + costFor2

console.log(
    `
    Cost for ${item1} x ${quan1}: $${priceFor1 * quan1} 
    Cost for ${item2} x ${quan2}: $${priceFor2 * quan2} 
    Sub-Total Before Tax: $${subTotal} 
    Tax: ${taxed}% Sales Tax 
    Total Tax: ${soloTax} 
    Total-Cost: $${subTotal + soloTax}
    
    `
)

// remind the user to check the console
alert('Check the console to view your reciept, you may do this by pressing the right button on your mouse, selecting "inspect", and scrolliing to the tab named "console. ')
