// function reverse(string) {
//   return Array.from(string).reverse().join("");
// }

// function palindrome(string) {
//   let lowerCaseString = string.toLowerCase();
//   return lowerCaseString === reverse(lowerCaseString);
// }

// Adds reverese to all strings
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// exercise to modify string method to blank string
String.prototype.blank = function() {
  return !!this.match(/^\s*$/g);
}

// exercise to modify Array method to find last element of the array
Array.prototype.last = function() {
  return this.slice(-1);
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  // Function to process the string to lower case
  this.processor = function processor(string) {
    return string.toLowerCase();
  }
  this.processedContent = function processedContent() {
    return this.processor(this.content);
  }

  this.palindrome = function palindrome () {
    return this.processedContent() === this.processedContent().reverse();
  }
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
