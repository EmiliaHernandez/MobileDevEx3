//Created random quotes app, added an array of quotes, then took a random num between 0-2 and set that as the index, and printed the quote of that index
var quotes = ['hiiii','howdyyyy','hellooo'];
index = Math.floor(Math.random() * 2);

console.log(quotes[index]);