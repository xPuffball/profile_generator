const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name?', (answer1) => {
  rl.question("What's your hobby?", (answer2) => {
    rl.question("What's a really cool song?", (answer3) => {
      rl.question("Which meal is your favourite?", (answer4) => {
        rl.question("Then what's your favourite food?", (answer5) => {
          rl.question("What's your favourite sport?", (answer6) => {
            rl.question("Finally, what's your superpower?", (answer7) => {
              console.log(`So, your name is ${answer1}, and you like doing ${answer2}. Your favourite song is ${answer3}, you love eating ${answer5}, ideally at ${answer4}. You love watching or playing ${answer6} and you're a god at ${answer7}!`)

              rl.close()
            })
          })
        })
      })
    })
  })
});



// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!