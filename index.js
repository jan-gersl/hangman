const inquirer = require('inquirer');
const words = require('./movies.js');
const Word = require('./word.js');

const randomIndex = Math.floor(Math.random() * 10000) % words.length-1;
console.log(randomIndex);

function printWord(word){
    console.log(`word: '${word}'`);
}

async function askUser(){
    return inquirer.prompt({
        name:'letter', 
        message:'Guess a letter', 
        validate: function(value) {
            if(!value.match(/^.+$/i)){
              return 'Please enter a single letter.';
            }
            return true;
          }});
}

async function execute(maxAttempts){
    const wordToGuess = new Word(words[randomIndex]);
    printWord(wordToGuess);
    let i = maxAttempts;
    while(i > 0)
    {
        console.log('Remaining guesses: ' + i);

        input = await askUser();
        if(!wordToGuess.guess(input.letter)){
            i--;
        }
        printWord(wordToGuess);
        
        if(wordToGuess.isDone){
            console.log("You win!");
            return;
        }
    }
    console.log("You lost!");
    console.log(wordToGuess.resolution);
}
execute(10).catch((err) => {console.log(err);});;