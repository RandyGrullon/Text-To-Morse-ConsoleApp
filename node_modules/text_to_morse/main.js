
function Validate(Word){
   var SpecialCharacter = /[a-zA-Z0-9\-\/]/;
   if (Word == null || !Word){
      return 'Null Exception';
   }
   if (Word == " ") {
      return "Empty Imput";
   }
   if(!isNaN(Word)){
      return "Numbers is not accepted here";
   }
   if(!Word.match(SpecialCharacter)){
         return 'Invalida Special Character';
   }else {
      const morseCode = {
         "A": ".-", "B": "-...", "C": "-.-.", "D": "-..", "E": ".", "F": "..-.",
         "G": "--.", "H": "....", "I": "..", "J": ".---", "K": "-.-", "L": ".-..",
         "M": "--", "N": "-.", "O": "---", "P": ".--.", "Q": "--.-", "R": ".-.",
         "S": "...", "T": "-", "U": "..-", "W": ".--", "X": "-..-", "Y": "-.--",
         "Z": "--..", "1": '.----', "2": '..---', "3": '...--', "4": '....-', 
         "5": '.....', "6": '-....', "7": '--...', "8": '---..', "9": '----.', "0": '-----',
         }
         var separator = " | ";
         const convertToMorse = (Word) => {
            return Word.toUpperCase().split("").map(Element => {
               return morseCode[Element] ? morseCode[Element] : Element; 
            }).join(separator);
            
         };
         
         return convertToMorse(Word)
      
   }
}

module.exports = Validate;