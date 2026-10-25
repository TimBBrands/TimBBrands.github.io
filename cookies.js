const venster = document.querySelector(".cookies");
const speler = document.querySelector("iframe[data-src]");
const melding = document.querySelector(".speler-uit");

function toepassen(keuze) {
    if (!speler) return;
    if (keuze === "ja") {
        speler.src = speler.dataset.src;
        melding.hidden = true;
    } else if (keuze === "nee") {
        melding.hidden = false;
    }
}

const keuze = localStorage.getItem("cookies");
if (!keuze) venster.show();
toepassen(keuze);

for (const knop of document.querySelectorAll("[data-keuze]")) {
    knop.addEventListener("click", function () {
        localStorage.setItem("cookies", knop.dataset.keuze);
        venster.close();
        toepassen(knop.dataset.keuze);
    });
}
