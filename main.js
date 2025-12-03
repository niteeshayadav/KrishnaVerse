const cardBtn = document.querySelectorAll(".card");
cardBtn.forEach(card => {
    card.addEventListener("click",() => {
        let selectedmood=card.innerText.trim();
        window.location.href = `shloka.html?mood=${selectedmood}`;
    });
});
