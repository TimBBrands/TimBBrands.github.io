// Onthoudt of de bezoeker de SoundCloud-speler (en dus cookies) wil of niet
const venster = document.querySelector(".cookies");
const speler = document.querySelector("iframe[data-src]");
const melding = document.querySelector(".speler-uit");

// Speler laden bij "ja", uitleg tonen bij "nee"
function toepassen(keuze) {
    if (!speler) return;
    if (keuze === "ja") {
        speler.src = speler.dataset.src;
        melding.hidden = true;
    } else if (keuze === "nee") {
        melding.hidden = false;
    }
}

// Alleen de eerste keer de melding laten zien
const keuze = localStorage.getItem("cookies");
if (!keuze) venster.show();
toepassen(keuze);

// Elke knop met data-keuze bewaart de keuze
for (const knop of document.querySelectorAll("[data-keuze]")) {
    knop.addEventListener("click", function () {
        localStorage.setItem("cookies", knop.dataset.keuze);
        venster.close();
        toepassen(knop.dataset.keuze);
    });
}
