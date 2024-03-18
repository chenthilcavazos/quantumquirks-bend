# QuantumQuirks

QuantumQuirks is a Node.js module containing quirky functions for quantum experiences.

## Installation

You can install QuantumQuirks via npm: `npm install quantumquirks`

## Usage
```javascript
const quantumQuirks = require('quantumquirks');

// Fetch a random quote
quantumQuirks.fetchRandomQuote()
  .then(quote => {
    console.log('Random Quote:', quote);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });

// Write a quote to a file
quantumQuirks.writeQuoteToFile('To be or not to be', 'quote.txt');

// Generate a random number
const randomNumber = quantumQuirks.generateRandomNumber(1, 100);
console.log('Random Number:', randomNumber);
```