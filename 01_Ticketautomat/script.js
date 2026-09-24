let alterInput = prompt("Wie alt bist du?");
let alter = Number(alterInput);


console.log("Eingegebenes Alter:", alter);

while(alter < 0 || alter === null)
{
    
    alterInput = prompt("Ungültige Eingabe. HÖR AUF ZU LÜGEN!")
    alter = Number(alterInput)
}

    


if(alter < 6)
{
    console.log("Dein Eintritt ist gratis mein Kind.")
}
else if(alter >= 6 && alter < 16)
{
    console.log("Ihr Ticket wird Sie 8 Euro kosten.")
}
else if(alter === 16 || alter === 17)
{
    console.log("12 Euro. Sofort.")
}

else if(alter >= 18)
{ 
    console.log("Voller Preis. 18 Euro oder kein Deal.")
}