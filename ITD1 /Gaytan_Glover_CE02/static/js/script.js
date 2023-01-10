// Gaytan Glover
// 9 Jan 2023
// Gaytan_Glover_CE01


// explanation
alert('Hello, This is a small program for a MadLib short story. I will prompt you for different types of words and at the end will present you with a short story')

// declaring variables generated from a users input
let named = prompt('A Unique Name')
let colour = prompt('A Made Up Colour')
let number = prompt('A Reasonable Number')
let movie = prompt('Your Favourite Movie')
let animal = prompt('A Type Of Imaginary Animal')
let adj = prompt('A Descriptive Adjective')

// printing the story to the console.
console.log(`${named} was a scientist on a mission to explore a distant planet called ${colour}. She had been studying the planet for years, and was convinced that it was home to a rare and valuable mineral that could revolutionize energy production on Earth. As ${name} and her team of ${number} scientists landed on the planets surface, they were immediately struck by its beauty. The sky was a deep ${colour} colour, and the landscape was dotted with ${adj} plants and strange, ${animal}-like animals. As they set up camp and began their research, ${name} couldnt shake the feeling that they were being watched. She kept catching glimpses of movement out of the corner of her eye, and several times she heard strange noises in the night. Despite her unease, ${name} was determined to complete her mission. She worked tirelessly, day and night, using the advanced technology at her disposal to search for the rare mineral. Finally, after what seemed like an eternity, ${name} hit pay dirt. She had found a massive deposit of the ${adj} mineral, and she knew it would be worth a fortune back on Earth. As they prepared to leave the planet and return home, ${name} couldnt help but feel a twinge of sadness. She had grown to love the strange and wondrous world of ${colour}, and she knew she would never forget her time there.`)


let madlib = document.getElementById('madlib')

madlib.innerText = `${named} was a scientist on a mission to explore a distant planet called ${colour}. She had been studying the planet for years, and was convinced that it was home to a rare and valuable mineral that could revolutionize energy production on Earth. As ${name} and her team of ${number} scientists landed on the planets surface, they were immediately struck by its beauty. The sky was a deep ${colour} colour, and the landscape was dotted with ${adj} plants and strange, ${animal}-like animals. As they set up camp and began their research, ${name} couldnt shake the feeling that they were being watched. She kept catching glimpses of movement out of the corner of her eye, and several times she heard strange noises in the night. Despite her unease, ${name} was determined to complete her mission. She worked tirelessly, day and night, using the advanced technology at her disposal to search for the rare mineral. Finally, after what seemed like an eternity, ${name} hit pay dirt. She had found a massive deposit of the ${adj} mineral, and she knew it would be worth a fortune back on Earth. As they prepared to leave the planet and return home, ${name} couldnt help but feel a twinge of sadness. She had grown to love the strange and wondrous world of ${colour}, and she knew she would never forget her time there.`

alert('Check the console to see your short story, you may do this by pressing the right button on your mouse, selecting "inspect", and scrolliing to the tab named "console."')