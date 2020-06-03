class Letter
{
    constructor(letter){
        this.validateInput(letter);

        this.letter = letter;
        this.isVisible = !letter.match(/^[A-Z0-9]$/gi);
    }

    validateInput(letter){
        if(letter === undefined) throw("input missing");
        //if(!(isNaN(letter))) throw("wrong input type");
        if(letter === "") throw("input missing");
        if(letter.length > 1) throw("input one letter only");
        if(letter.includes('_')) throw("invalid character '_' used");
    }

    guess(letterToCheck){
        this.validateInput(letterToCheck);
        if(this.isVisible) return false;

        this.isVisible = (this.letter === letterToCheck);
        return this.isVisible;
    }

    toString(){
        return this.isVisible ? this.letter : this.placeholder;
    }

    get placeholder() {
        return '_';
      }
}

module.exports = Letter;