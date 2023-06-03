// here we are using our SpellChecker package by imorting it using 'require'
const SpellChecker = require("simple-spellchecker");


// this funciton will make use of our SpellChecker code.  
// It's up to us to wrtie a callback to describe how to use it
function checkWord(word) {
    SpellChecker.getDictionary("en-US", function (err, dictionary) {
      // If there was a problem setting up the Spell Checker, inform the user an exit out of the function with a return statement
      if (err) {
        console.log("There was an error", err);
        return;
      }
      // returns a boolean
      const misspelled = !dictionary.spellCheck(word);
      // if the word is misspelled
      if (misspelled) {
        // Provide user feedback
        console.log(`The word ${word} is incorrect.`);
        // Use the spellchecker to get suggested correct words
        const suggestions = dictionary.getSuggestions(word);
        // Log the words as a string
        console.log(`Did you mean:`, suggestions.join(" "));
      } else {
        // Notify the user that the word was spelled correctly
        console.log(`Your word ${word} is spelled correctly.`);
      }
    });
  }

module.exports = {
  checkWord
}


