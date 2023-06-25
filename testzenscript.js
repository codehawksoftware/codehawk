
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Show New Quote
function newQuote()
{
// Pick a random quote from apiQuotes
const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// Check if author feild is blank and replace with

if (!quote.author)
{
    authorText.textContent = "Author Unknown"

}else
{

    authorText.textContent = quote.author;

}
 // Check quote lenght to determine styling
 if (quote.text.length > 80)
 {
 
        quoteText.classList.add('long-quote');

 } else
 {
 
     quoteText.classList.remove('long-quote');

 }

quoteText.textContent = quote.text;
//console.log(quote);
}

// Get Quotes From API
async function getQuotes() 
{
    
    const apiUrl = "https://zenquotes.io/api/quotes/";

    try{    

        const response  = await fetch(apiUrl);
        apiQuotes = await response.json();
        console.log(apiQuotes);
        newQuote();
        } catch (error)
        {
            // catch error code here

        }

}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);

// On Load
getQuotes();

// if using local quotes from quotes file quotes.js use 

    