const RANDOM_QUOTE_API = 'https://api.quotable.io/random';

const quoteDisplayElement

 function getRandomQuote() {
    return fetch(RANDOM_QUOTE_API)
    .then(response => response.json())

    .then(data => {
     console.log(data.content)
    });
}

async function renderNewQuote() {
    const quote = await getRandomQuote()
    console.log(quote)
}

renderNewQuote();