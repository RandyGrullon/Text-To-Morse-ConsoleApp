const readline = require('readline-sync'); 
const MorseWord = require('text_to_morse'); 


var word = readline.question('Digite la frase que desee: ');
console.log(MorseWord(word));
