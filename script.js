let link = "https://api.quotable.io/random";
let quote = document.querySelector(".quote");

async function showquote(url){
    const a = await fetch(url);
    var data = await a.json();
    quote.innerHTML = data.content;
}
showquote(link);