// Importing dependencies
const axios = require('axios');
const fs = require('fs');

// Function to fetch a random quote
async function fetchRandomQuote() {
  try {
    const response = await axios.get('https://api.quotable.io/random');
    return response.data.content;
  } catch (error) {
    throw new Error('Failed to fetch random quote');
  }
}

// Function to write a quote to a file
function writeQuoteToFile(quote, filename) {
  try {
    fs.writeFileSync(filename, quote);
    console.log(`Quote written to ${filename} successfully.`);
  } catch (error) {
    throw new Error('Failed to write quote to file');
  }
}

// Function to generate a random number within a range
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {
  fetchRandomQuote,
  writeQuoteToFile,
  generateRandomNumber
};
