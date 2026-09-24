let benutzerPunkte = 0;
let computerPunkte = 0;

for (let runde = 1; runde <= 5; runde++)
{

    let benutzer = prompt("Runde " + runde + ": Stein, Papier oder Schere?");
    benutzer = benutzer.toLowerCase();

    if (benutzer !== "stein" && benutzer !== "papier" && benutzer !== "schere") {
        console.log("Ungültige Eingabe!");
        runde--;
        continue;
    }

    let zufall = Math.random();
    let computer;

    if (zufall < 1 / 3) {
        computer = "stein";
    } else if (zufall < 2 / 3) {
        computer = "papier";
    } else {
        computer = "schere";
    }

    console.log("Runde " + runde);
    console.log("Du: " + benutzer);
    console.log("Computer: " + computer);

    if (benutzer === computer) {
        console.log("Unentschieden!");
    } else if (
        (benutzer === "stein" && computer === "schere") ||
        (benutzer === "papier" && computer === "stein") ||
        (benutzer === "schere" && computer === "papier")
    ) {
        console.log("Du gewinnst!");
        benutzerPunkte++;
    } else {
        console.log("Computer gewinnt!");
        computerPunkte++;
    }

    console.log("--------------------");
}

console.log("Spiel beendet!");
console.log("Deine Punkte: " + benutzerPunkte);
console.log("Computer Punkte: " + computerPunkte);

if (benutzerPunkte > computerPunkte) {
    console.log("Du gewinnst das Spiel!");
} else if (computerPunkte > benutzerPunkte) {
    console.log("Der Computer gewinnt das Spiel!");
} else {
    console.log("Unentschieden!");
}