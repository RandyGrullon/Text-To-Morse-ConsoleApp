const Validate = require("../main.js");

test('expect an Null exception', ()=>{
    expect(Validate(null)).toBe('Null Exception');
});

test('expect an Empty string', ()=>{
    expect(Validate(" ")).toBe('Empty Imput');
});

test('expect an Number', ()=>{
    expect(Validate(2039847)).toBe('Numbers is not accepted here');
});

test('expect input a special character', ()=>{
    expect(Validate("$%#^&@")).toBe('Invalida Special Character');
});

test('expect Hello in Morse Code', ()=>{
    expect(Validate('Hello World')).toBe('.... | . | .-.. | .-.. | --- |   | .-- | --- | .-. | .-.. | -..');
});


