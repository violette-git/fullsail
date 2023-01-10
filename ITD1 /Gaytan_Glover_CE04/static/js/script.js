// Gaytan Glover
// 9 Jan 2023
// Gaytan_Glover_CE01


// ---------------------------------------------------------------------------------------------------
// inform the user
alert('This first program determines your letter grade based off of a number grade between 1-100')
// prompt the user for a number grade
let score = parseInt(prompt('Enter a number grade'))
// function to determine letter grade
function grade(score) {
    if (score < 0 || score > 100) {
      console.log("Error: Score must be between 0 and 100");
    } else if (score >= 90) {
      console.log(`You have a ${score}%, which means you have earned an A in the class!`);
    } else if (score >= 80) {
      console.log(`You have a ${score}%, which means you have earned a B in the class!`);
    } else if (score >= 70) {
      console.log(`You have a ${score}%, which means you have earned a C in the class!`);
    } else if (score >= 60) {
      console.log(`You have a ${score}%, which means you have earned a D in the class!`);
    } else {
      console.log(`You have a ${score}%, which means you have earned an F in the class!`);
    }
}

// run function
grade(score)

// ---------------------------------------------------------------------------------------------------

// inform the user
alert('This second program determines the cost of a pumpkin by weight')
// prompt the user for weight of pumpkin
let weight = prompt("Enter the weight of the pumpkin in lbs:");
// function to determine cost by weight
function calculateCostBy(weight) {
    if (weight <= 0) {
      console.log("Error: Weight must be a positive number");
    } else if (weight < 5.5) {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 1).toFixed(2));
    } else if (weight < 10.75) {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 0.9).toFixed(2));
    } else if (weight < 25) {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 0.8).toFixed(2));
    } else if (weight < 50) {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 0.7).toFixed(2));
    } else if (weight <= 100) {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 0.6).toFixed(2));
    } else {
      console.log("Your" + " " + weight + "lb pumpkin costs" + " " + "$" + (weight * 0.5).toFixed(2));
    }
}

// run function
calculateCostBy(weight)

// ---------------------------------------------------------------------------------------------------

// inform the user
alert('This final program determines the cost of a products in your cart based on your preferred status')
// prompt the user for cost of items
let cost1 = prompt("Enter the cost of the first item: ");
let cost2 = prompt("Enter the cost of the second item: ");
// prompt the user for preferred status
let preferred = prompt("Are you a preferred customer (yes or no)? ");
// function to determine cost and loyalty status
function isPreferred(cost1, cost2, preferred) {
    if (preferred === "yes") {
        var discount = 0.15;
        let total = (parseFloat(cost1) + parseFloat(cost2)) * (1 - discount);
        console.log(`Your total purchase is $${total.toFixed(2)}, which includes your 15% discount.`);
    } else if (preferred === "no") {
        const total = parseFloat(cost1) + parseFloat(cost2);
        console.log(`Your total purchase is $${total.toFixed(2)}`);
    } else {
        console.log("Error: invalid input for preferred customer status.");
    }
}

// run function
isPreferred(cost1, cost2, preferred)