// Write your tests here!
const expect = require("chai").expect;
const {polybius}= require("../src/polybius")


describe("polybius", ()=>{
   
    it("change letters to numbers",()=>{
        const actual =polybius("thinkful"); 
        const expected= "4432423352125413"
        expect(actual).to.be.eql(expected)
});

    it("changes numbers to letters",()=>{
        const actual=polybius("Hello world"); 
        const expected = '3251131343 2543241341'
        expect(actual).to.be.eql(expected)
});
        
    it("changes mupltiple numbers to letters",()=>{
        const actual= polybius("3251131343 2543241341", false);
        const expected = "hello world"
        expect(actual).to.be.eql(expected)
});

    it("changes 42 into i/j", ()=>{
        const actual= polybius("4432423352125413", false); //> 
        const expected=  "th(i/j)nkful"
        expect(actual).to.be.eql(expected)
});
    
    
    it("return false when input to decode is odd",()=>{
        const actual= polybius("44324233521254134", false); //> 
        const expected=false
        expect(actual).to.be.eql(expected)
});





})