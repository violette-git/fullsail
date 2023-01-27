





let img = document.createElement('img')


var weightLossFacts = [
    "Weight loss is not just about eating less, it's also about making healthier food choices and increasing physical activity.",
    "Drinking water before meals can help with weight loss by making you feel fuller and reducing the amount of food you eat.",
    "Eating a high-protein breakfast can help with weight loss by reducing hunger and increasing feelings of fullness throughout the day.",
    "Eating slowly and savoring each bite can help with weight loss by increasing feelings of fullness and reducing the amount of food you eat.",
    "Eating a diet rich in fruits, vegetables, and whole grains can help with weight loss by providing essential nutrients and reducing the risk of chronic diseases.",
    "Eliminating added sugars and refined carbohydrates from your diet can help with weight loss by reducing calories and increasing feelings of fullness.",
    "Regularly engaging in physical activity, such as cardio and strength training, can help with weight loss by burning calories and building muscle.",
    "Keeping a food diary or using a food tracking app can help with weight loss by increasing awareness of what and how much you're eating.",
    "Getting enough sleep is important for weight loss as lack of sleep can increase hunger and cravings.",
    "Stress can cause weight gain and make weight loss more difficult, so managing stress through techniques such as meditation and yoga can be beneficial.",
    "Eating a diet high in fiber can help with weight loss by increasing feelings of fullness and reducing the amount of food you eat.",
    "Eating lean protein can help with weight loss by building muscle and reducing hunger.",
    "Eating a diet high in healthy fats can help with weight loss by reducing hunger and improving nutrient absorption.",
    "Consuming healthy carbs like fruits, vegetables, and whole grains can help with weight loss by providing essential nutrients and reducing the risk of chronic diseases.",
    "Eating a diet that is high in protein and low in carbohydrates can help with weight loss by reducing hunger and increasing feelings of fullness.",
    "Eating a diet that is high in protein and healthy fats can help with weight loss by reducing hunger and increasing feelings of fullness.",
    "Eating a diet that is high in protein and low in carbohydrates can help with weight loss by reducing hunger and increasing feelings of fullness.",
    "Eating a diet that is high in protein and healthy fats can help with weight loss by reducing hunger and increasing feelings of fullness.",
    "Eating a diet that is high in protein and low in carbohydrates can help with weight loss by reducing hunger and increasing feelings of fullness.",
    "Eating a diet that is high in protein and healthy fats can help with weight loss by reducing hunger and increasing feelings of fullness."
];

setInterval(displayFact, 7000)


function calculator(){
    let graphic = document.getElementById('graphic');
    graphic.appendChild(img)
    let inches = document.getElementById('hIn');
    let feet = document.getElementById('hFt');
    let weight = document.getElementById('w');
    let height = parseInt(feet.value*12) + parseInt(inches.value);
    let cats = document.getElementById('cats');
    let cats2 = document.getElementById('cats2');
    let category = document.getElementById('category');

    console.log(feet.value, feet.value*12, inches.value)
    console.log(height, parseFloat(weight.value))

    let answ = ((weight.value / height) / height) * 703
    let answe = answ.toFixed(1)
    let answer = parseFloat(answe)

    console.log(answer)
    // img.width = '200px'
    if(answer < 18.5){
        category.innerText = 'Under Weight'
        img.src = 'images/underWeight.jpg'
    }if(answer < 24.9 && answer > 18.5){
        category.innerText = 'Healthy Weight'
        img.src = 'images/healthyWeight.jpg'
        
    }if(answer < 29.9 && answer > 25){
        category.innerText = 'Over Weight'
        img.src = 'images/overWeight.jpg'
        
    }if(answer < 34.9 && answer > 30.0){
        category.innerText = 'Obese Weight'
        img.src = 'images/obeseWeight.jpg'
        
    }if(answer > 35){
        category.innerText = 'Extreme Obese Weight'
        img.src = 'images/extremeObeseWeight.jpg'
        
    }

    let results = document.getElementById('results');
    results.innerHTML = answer
    cats.hidden = false
    cats2.hidden = false
    
};
let calculate = document.getElementById('calculate');
calculate.addEventListener('click', calculator);

function getFact(){
    var randomIndex = Math.floor(Math.random() * weightLossFacts.length);
    return weightLossFacts[randomIndex]
}

function displayFact(){
    let footer = document.getElementById('footer');
    var fact = getFact();
    footer.innerText = fact;
}

