// Write your tests here!
const expect = require("chai").expect;
const {substitution}= require("../src/substitution")


describe("substitution", ()=>{

    it("should encode a message",()=>{
        const actual= substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
        const expected='jrufscpw'
        expect(actual).to.be.equal(expected)
});

    it("should preserve spaces and ignore capitals",()=>{
        const actual= substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); 
        const expected='elp xhm xf mbymwwmfj dne'
        expect(actual).to.be.equal(expected)
});

    it("should decode the input",()=>{
        const actual= substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); 
        const expected= 'thinkful'
        expect(actual).to.be.equal(expected)
 
});

    it("should encode use special characters",()=>{
        const actual= substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected="y&ii$r&"
        expect(actual).to.be.equal(expected)

});


    it("should decode with special characters",()=>{
        const actual= substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected= "message"
        expect(actual).to.be.equal(expected)

});
    
    it("should return false if alphabet is less than 26 characters",()=>{
        const actual= substitution("thinkful", "short");
        const expected= false
        expect(actual).to.be.equal(expected)

});


    it("should return false if alphabet has duplicates",()=>{
        const actual= substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
        const expected= false
        expect(actual).to.be.equal(expected)

});





});
