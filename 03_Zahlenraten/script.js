let wirklicheZahl = Math.floor(Math.random() * 100) + 1
let gerateneZahl = Number(prompt("An welche Zahl ich grad wohl denke...?"))
let versuche = 1
if(gerateneZahl > wirklicheZahl)
    {
        console.log("Du bist zu hoch! Versuch es niedriger.")
    }
else if(gerateneZahl < wirklicheZahl)
    {
        console.log("Du bist zu niedrig! Versuch es höher.")
    }
while(wirklicheZahl !== gerateneZahl && versuche < 8)
{
    gerateneZahl = Number(prompt("An welche Zahl ich grad wohl denke...?"))
    if(gerateneZahl > wirklicheZahl)
    {
        console.log("Du bist zu hoch! Versuch es niedriger.")
    }
    else if(gerateneZahl < wirklicheZahl)
    {
        console.log("Du bist zu niedrig! Versuch es höher.")
    }
    versuche++
}
if(gerateneZahl === wirklicheZahl)
{
    console.log("Gut gemacht, du hast die Herausforderung in " + versuche + " Versuchen geschafft")
}
else if(versuche > 7)
{
    console.log("Zu viele Versuche. Du wirst die Zahl wohl nie raten...")
}