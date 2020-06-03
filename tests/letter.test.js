const Letter = require("../letter.js");

describe("Letter constructors", () => 
{
    test("empty input", () =>
    {
        expect(() => x = new Letter()).toThrow();
    });

    test("invalid input - number", () =>
    {
        expect(() => x = new Letter(5)).toThrow();
    });

    test("invalid input - multiple letters", () =>
    {
        expect(() => x = new Letter("lalala")).toThrow();
    });

    test("invalid input - '_'", () =>
    {
        expect(() => x = new Letter("_")).toThrow();
    });

    test("valid input", () =>
    {
        expect((new Letter("X")).toString()).toEqual('_');
    });

});

describe("Letter operations", () => 
    {
    test("valid input, undiscovered", () =>
    {
        let x = new Letter("X");
        x.guess("Y");
        expect(x.toString()).toEqual('_');
    });

    test("valid input, discovered", () =>
    {
        let x = new Letter("X");
        x.guess("X");
        expect(x.toString()).toEqual("X");
    });

    test("valid input, discovered, then second guess wrong", () =>
    {
        let x = new Letter("X");
        x.guess("X");
        x.guess("Y");
        expect(x.toString()).toEqual("X");
    });
});
