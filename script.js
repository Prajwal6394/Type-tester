const RANDOM_QUOTE_API = "https://api.quotable.io/random";

const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");

quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("remove");
    }
    else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("remove");
    } else {
      characterSpan.classList.remove("correct");
      characterSpan.classList.add("remove");
    }
  });
});

function getRandomQuote() {
  return fetch(RANDOM_QUOTE_API)
    .then((response) => response.json())

    .then((data) => data.content);
}

async function renderNewQuote() {
  const quote = await getRandomQuote();
  console.log(quote);
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");

    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
}

renderNewQuote();
