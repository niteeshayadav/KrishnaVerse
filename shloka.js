const Reference = document.querySelector(".reference");
const Shloka = document.querySelector(".shloka-quote");
const Meaning = document.querySelector(".meaning");
const NextBtn = document.querySelector(".nextquote");
const params = new URLSearchParams(window.location.search);
const mood = params.get("mood");

async function gerRandomQuotes(mood) {
    const response = await fetch("gita.json");
    const data =await response.json();

    const list = data[mood];
    
    const index = Math.floor(Math.random() * list.length);
    return list[index];

}

async function showQuotes(mood) {
    const quote = await gerRandomQuotes(mood);

    Reference.innerText = quote.reference;
    Shloka.innerText = quote.sanskrit_shloka;
    Meaning.innerText = quote.original_translation;
}

showQuotes(mood);
NextBtn.addEventListener("click",()=>{
    showQuotes(mood);
});