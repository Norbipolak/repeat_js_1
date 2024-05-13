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

for(let i = 15; i >= 0; i--) {
    console.log(`i: ${i}`);
}
/*
15-től megy majd nulláig 

tehát itt nagyon fontos, hogy megadjuk 
1. mettől menjen 
2. meddig menjen 
3. milyen léptékkel
*/

// de ha azt akarjuk, hogy 3-val menjen vissza fele ne egyesével 

for(let i = 15; i >= 0; i -= 3) {
    console.log(`i: ${i}`);
}
/*
i: 15
i: 12
i: 9
i: 6
i: 3
i: 0
*/

/*
Végtelen ciklus 
for(var i = 15; i >= 0, i++) {
    console.log("i: " + i);
}

vagy még ilyen a while(true)
*/

/*
Alprogramok és függvények 
*/

function hello() {
    let h = "Hellóka!";
    return h;
}

const g = hello();
console.log(g); //Hellóka!

const b = hello();
console.log(b);//Hellóka!

/*
mi a fontos egy függvénynél 
 - hogyha hozzá akarunk férni, hogy mi van belül, akkor kell egy return, ami azt visszaadja 
    pl. itt a h változó a let h = "Hellóka!" az csak a függvény belsejében érhető el 
- egy változóban kell lemeteni a függvénynek amit visszaad a return-ben 
    pl. itt is egy const h = hello(), itt viszont lehet a neve a h, mert itt kivül a h-nak semmi köze a függvény belsejében lévő h-hoz 
*/ 

function pow(a, b) {
    return a**b;
}

const result = pow(2,4); //16 2*2*2*2
console.log(result);

/*
de ezt lehet úgy is, hogy 
function pow(a, b) {
    let result = a**b;
    return result;
}

const result = pow(2,4);
console-log(result);
*/

/*
Mi a különbség a var és a let között 
*/

{
    var a = 0;
}

console.log(a);
// 0 ha var-val valami definiálva akkor az elérhető a függvényen kivül is, de a let meg a const az nem 

{
    let c = 1
}

//console.log(c); // c is not defined, nem érhető el kivülről 

//console.log(asdf);
let asdf = "asdf" // can not access asdf before initialization és ez ugyanígy nem jó ha const lenne nem let 

const array = [1,2,3,4,5,6,7,8,9,10];
console.log(array[7]); // 8 lesz, mert ugye nullától indul az index 

console.log(array.length); //10, mert 10 eleme van az array-nek 0-9-es index-vel

for(let i = 0; i < array.length; i++) {
    console.log(`i: ${i}`); //i: 0 -> i:9 console.log(`i: ${array[i]}`); 1-10-ig az array összes eleme 
    console.log(array[i]); // 1-10 végigment az array összes elemén 
}

//visszafele, meg ha végig akarunk menni akkor fontos hogy length-1 legyen!!!!!!!!!
for(let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]); // 10-től visszamegyünk 1-ig 
}

/*
nagyon fontos, hogy az index és az elemek közötti különbséget meg kell jegyezni 
mert itt array-nek a 9-ig indexű az utolsó eleme ami a 10 és a 0-dik indexű eleme meg az 1
és itt a for ciklusban mindig az index-eken megyünk végig!!!!!!!!!!!!! length-1 az utolsó index!!! 
*/

console.log(typeof array); //object, mert az array is egy object 
console.log(typeof hello); //ez egy function 
console.log(typeof hello()); // ez meg az értéke amit return-ölünk a hello function-val, ami egy string 

const func = ()=> {};
console.log(typeof func); // ez is egy function arrow function!!! 

const add1 = (a,b)=> a+b;
console.log(add1(2,5)); // 7 

/*
de nagyon fontos, hogyha van {}, akkor mindenképpen kell a return 
const add2 = (a,b)=> {a+b}
console.log(add2(2,5));
ez így nem lesz jó, mert nincsen return 
csak így ->
*/ 

const add2 = (a,b)=>{return a+b};
console.log(add2(4,4)); //8 jó, mert van return 

console.log(Math.floor(Math.random()*11)+50); 
/*
ez egy random számot ad majd 50 és 60 között 
*/

console.log(Math.floor(Math.random()*2)) 
/*ez egy számot ad vissza 0 és 1 között*/
console.log(Math.floor(Math.random()*10)+1);
// ez csinál nekünk egy számot 1-10-ig ha nem lenne ott a +1, akkor -9-ig csinálna, ha meg azt szeretnénk, hogy 0-10, akkor meg *11 

const rand = (from, to)=> Math.floor(Math.random() * ((to - from)+1)) + from;
console.log(rand(5,10));
// így tudunk egy számot csinálni 5 és 10 között
/*
fontos, hogy a random számot + 1-vel kell megszorozni 
to meg a from között meg annyi a különbség, amennyi számot mi szeretnénk, de viszont egyel többel kell beszorozni
és a végén csak hozzáadjuk a from-ot, hogy onnan szeretnénk, hogy induljon 

ha nem lenne ez a + from, akkor csak egy számot kapnánk 1-től 5-ig 
*/

console.log(rand(89, 94));// pl. 92 vagy 91 stb. 

const object = {
    age: 30,
    name: "Jonas",
    hobby: "skiiing"
};

for(const [key,value] of Object.entries(object)) {
    console.log(`${key} - ${value}`);
}

/*
age - 30
name - Jonas
hobby - skiiing
*/

const object2 = {
    age: 33,
    name: "Iris",
    hobby: "tennis"
}

for(const value in object2) {
    console.log(value); // age, name, hobby 
}

for(const keyValues of Object.entries(object2)) {
    console.log(keyValues);
}

/*
tömbekben kapjuk vissza ezt 
[ 'age', 33 ]
[ 'name', 'Iris' ]
[ 'hobby', 'tennis' ]
*/

for(const [key] of Object.entries(object2)) {
    console.log(`${key}`);
}
/*age, name, hobby ugyanaz, mint az in-ben*/ 


//nem jó 
for(const [value] of Object.entries(object2)) {
    console.log(`${value}`);
}
// ez így nem adja vissza nekünk a value-t!!!! ha meg in van az of helyett, akkor meg visszaadja az indexeket 0,1,2 


