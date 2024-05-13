/*
Vezérlési szerkezetek 
    * ciklusok 
    * elágazások 
*/

//if 
// switch 

var homerseklet = 20;

if(homerseklet < 0) {
    console.log("Nagyon hideg van!");
} else {
    console.log("Nincs nagyon hideg!");
}

if(homerseklet < 0) {
    console.log("nagyon hideg van!");
} else if(homerseklet >= 0 && homerseklet < 10) {
    console.log("mérsékelten hideg az idő");
} else if(homerseklet >= 10 && homerseklet < 20) {
    console.log("őszi időjárás van!"); 
} else if(homerseklet >= 20 && homerseklet < 25) {
    console.log("tavaszi időjárás!");
} else {
    console.log("nyári időjárás!");
}

/*
Nagyon fontos, hogy a switch az pontos megegyezést keres 
fontos tudni a switch-nél 
- switch után megadjuk, hogy mit nézünk meg -> itt ez a kedvencSzin lesz 
    switch(kedvencSzin)
- utána kell case-eket csinálni!!!! 
case "kék": (case után mindig : van)
- és itt megadjuk, hogy mit csináljon, itt csak ki lesz írva valami 
    mindig break-vel fejezünk be egy case-t
*/

var kedvencSzin = "piros";

switch(kedvencSzin) {
    case "kék":
        console.log("A felhasználó kedvenc színe a kék!");
        break;
    case "zöld":
        console.log("A felhasználó kedvenc színe a zöld!");
        break;
    case "sárga":
        console.log("A felhasználó kedvenc színe a sárga!");
        break;
    case "piros":
        console.log("A felhasználó kedvenc színe a piros!");
        break;
}

/*
Ciklusok 
    * elöltesztelő
    * hátultesztelő 
    * számlálós 
*/

/*
Ciklusok részei 
    * ciklusfej -> futási feltétel 
    * ciklusmag -> utasítások, müveletek
*/ 

var counter = 1;

//elöltesztelő 
while(counter < 15) {
    counter++;
    console.log(`counter: ${counter}`); // vagy ezt lehet így is, hogy console.log("counter: " + counter); ugyanaz 
}

/*
ha így a counter = 15 akkor nem megy be! 
de ha mondjuk átírjuk, hogy a counter = 1, akkor bemegy és hozzáad egyet 
és még 14-nél bemegy és hozzáad egyet, ezért 15 lesz 
-> 
counter: 2 -től meg egészen -> counter: 15
*/



do{
    counter++;
    console.log(`counter: ${counter}`)
} while(counter < 15);

/*
Ha a counter az 15 és onnan indulunk, akkor a do-ban megcsinálja a dolgokat és utána ellenőrzi a futási feltételt 
szóval ha a counter = 100; 
akkor megcsinálja, hogy hozzáad egyet utána a console.log()-val kiírjuk, hogy a counter: 101 és utána nézi meg 
az a lényeg, hogy az első mindig lefut 

szóval ha ez egytől indul, mint az elöbb akkor nem 2-től 15-ig fog menni hanem 2-től 16-ig!!!!!!!!!!!!!!!!
*/

//számlálós 
for(let i = 0; i < 15; i++) {
    console.log(`i: ${i}`); 
}
/*
0-tól 14-ig fog menni!!!, ha azt szeretnénk, hogy 15-ig menjen, akkor kell, hogy <= 15
*/

// for(let i = 15; i >= 0; i--) {
    console.log(`i: ${i}`);
}
/*
15-től megy majd nulláig 

tehát itt nagyon fontos, hogy megadjuk 
1. mettől menjen 
2. meddig menjen 
3. milyen léptékkel
*/