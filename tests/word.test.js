const Word = require("../word.js");

describe("Word constructors", () => 
{
    test("empty input", () =>
    {
        expect(() => x = new Word()).toThrow();
    });

    test("invalid input - number", () =>
    {
        expect(() => x = new Word(5)).toThrow();
    });

    test("invalid input - '_'", () =>
    {
        expect(() => x = new Word("He_lo")).toThrow();
    });

    test("valid input", () =>
    {
        expect((new Word("Hello")).toString()).toEqual('_____');
    });

    test("valid input", () =>
    {
        expect((new Word("H3llo")).toString()).toEqual('_____');
    });

    test("valid input", () =>
    {
        var x = new Word("Hello");
        expect(x.letters.length).toEqual(5);
    });
});

describe("Word operations", () => 
{
    test("guess full", () =>
    {
        var x = new Word("Hi");
        x.guess("H");
        x.guess("i");
        expect(x.toString()).toEqual("Hi");
    });

    test("guess partial", () =>
    {
        var x = new Word("Hi");
        x.guess("H");
        expect(x.toString()).toEqual("H_");
    });

    test("guess invalid - empty", () =>
    {
        var x = new Word("Hi");
        expect((x) => x.guess()).toThrow();
    });

    test("guess invalid - num", () =>
    {
        var x = new Word("Hi");
        expect((x) =>x.guess(6)).toThrow();
    });

    test("guess invalid - multiple", () =>
    {
        var x = new Word("Hi");
        expect((x) =>x.guess("Hi")).toThrow();
    });

    test("isDone - F", () =>
    {
        var x = new Word("Hello");
        expect(x.isDone).toEqual(false);
    });

    test("isDone - T", () =>
    {
        var x = new Word("Hi");
        x.guess("H");
        x.guess("i");
        expect(x.isDone).toEqual(true);
    });
});