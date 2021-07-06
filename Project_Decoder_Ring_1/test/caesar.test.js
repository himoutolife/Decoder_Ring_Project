// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

//these tests should test for all potential errors, null, undefined, -25, 25, 0, shifts properly, sends to all lower case, splits, preserves white spaces, properly decoding, wrap around


describe("caesar", ()=>{
    it("if shift is null or undefined or empty", ()=>{
        const actual = caesar();
        expect(actual).to.be.false;
});
    it("if shift is <-25", ()=>{
        const actual= caesar("", -26)
        expect(actual).to.be.false;
});
    it("if shift is >25", ()=>{
        const actual = caesar("", 26) 
        expect(actual).to.be.false;
});
    it("if shift is 0", ()=>{
        const actual = caesar("", 0)
        expect(actual).to.be.false;
});
    it("should check if input is sent to lowercase", ()=>{
        const actual = caesar("HELLO", 1)
        const expected= "ifmmp"
        expect(actual).to.equal(expected)
});
    it("properly decodes a message", ()=>{
        const actual =caesar("BPQA qa I amkzmb umaaiom!", 8, false)
        const expected=("this is a secret message!")
        expect(actual).to.equal(expected)
});
    it("properly shifts foward", ()=>{
        const actual= caesar("thinkful", 3)
        const expected= ("wklqnixo")
        expect(actual).to.be.equal(expected)
});
    it("properly shifts backwards", ()=>{
        const actual= caesar("thinkful", -3)
        const expected= ("qefkhcri")
        expect(actual).to.be.equal(expected)
});
    it("properly encodes a message", ()=>{
        const actual= caesar("This is a secret message!", 8)
        const expected= "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.be.equal(expected)
});
    it("preserves non alphabetic inputs", ()=>{
        const actual= caesar("1a@b3c?d!", 1)
        const expected= "1b@c3d?e!"
        expect(actual).to.be.equal(expected)
});
    it("properly wraps around beginning and end of alphabet", ()=>{
        const actual= caesar("abcde", -2)
        const expected= "yzabc"
        expect(actual).to.be.equal(expected)
});
    it("properly preserves spaces", ()=>{
        const actual= caesar("a b c d e", 3)
        const expected= "d e f g h"
        expect(actual).to.be.equal(expected)
    })

})