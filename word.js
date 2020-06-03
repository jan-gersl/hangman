const Letter = require("./letter.js");

class Word{
    constructor(word){
        if(word === undefined) throw("input missing");
        //if(!(isNaN(word))){ console.log(word); throw("wrong input type");}
        if(word === "") throw("input missing");
        if(word.includes('_')) throw("invalid character '_' used");

        this.letters = this.buildLetterArrayFrom(word);
        this.resolution = word;
    }

    toString(){
        return this.letters.join(" ");
    }

    buildLetterArrayFrom(word){
        return word.split("").map(item => new Letter(item));
    }

    guess(letter){
        let isGuessSuccessful = false;
        this.letters.filter(element => !element.isVisible).forEach(element => {
            if(element.guess(letter)) isGuessSuccessful = true;
        });
        return isGuessSuccessful;
    }

    get isDone(){
        return !this.toString().includes('_');
    }
}

module.exports = Word;