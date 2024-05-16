'use strict';

// const x = 10+5

// // 2 TIPA PODATAKA: 'const' i 'let':
// const total = 1500;
// console.log(total);

// // const:
// const firstName = 'Denijal';
// const age = 22;
// // NACIN 1:
// console.log('OVO JE ZA OBICAN TEXT!');

// // NACIN 2: TEMPLEJT LITERALI: ``
// // console.log(`OVO JE ZA VREDNOST: JA SE ZOVEM: ${firstName}`);
// console.log(`OVO JE ZA VREDNOST: JA SE ZOVEM: ${firstName}`);

// let js = 'amazing';-
// console.log(40 + 8 + 23 - 10);
// console.log(firstName);

// // CAMEL CASE i SNEK CASE:
// // Camel Case: UVEK CEMO OVAKO DA PISEMO: SVAKO PRVO SLOVO VELIKO:
// const firstNameAuthor = 'Denijal';
// const lastName = 'Kacapor';

// // NEPRAVILNO PISANJE VARIJABLI:
// const firstnameauthor = 'Asmir';
// const lastname = 'Pljakic';

// // SNEK CASE
// const first_Name = 'Denijal';
// const last_Name = 'Kacapor';

// // PRAVILNO PISANEJA VRIJABLI: MOZEMO DA DODAMO SAMO '$'
// let $function = 27;
// let _function = 25;
// let personOne = 'Asmir';
// const H2O = 'voda';
// const PI = 3.1415;

// // PRAVILNO IMENOVANJE VARIJABLI
// let myFirstJob = 'Coder';
// let myCurrentJob = 'Programmer';

// // NIJE PRAVILNO IMENOVANJE VARIJABLI
// let job1 = 'Coder';
// let job2 = 'Programmer';

// console.log(myFirstJob);

// let _age = 25;

// let myName = 'Denijal';
// let myLastName = 'Kacapor';
// let firstJob = 'Footballer';
// let currentJob = 'JavaScript Developer';
// console.log(
//   `Ja se zovem ${myName}, prezivam se ${myLastName}, moj prvi posao je ${firstJob}, moj trenutni posao je ${currentJob}`
// );

// let camName = 'Elego';
// let camModel = 'Facecam';
// let camResolution = '4k';

// console.log(
//   `Kupio sam kameru ${camName}, modela: ${camModel} i ona snima u ${camResolution}`
// );

// // **************TIPOVI*******************************
// //ZA BROJEVE:
// // Number:
// // Svi brojevi bili DECIMALNI bili CELOBROJNI su tipa 'NUMBER': number
// let age = 22;

// //ZA TEXT:
// // String:
// // String se koristi kada hocemo da kucamo neki text:
// let userName = 'Asmir';

// // Boolean:
// Logicki tip boolean vraca samo true ili false:
// let fullAge = true;
// console.log(true);
// let javaScriptFun = true;
// console.log(javaScriptFun);
// Metoda typeof nam daje kojeg je tipa nasa varijabla ili nesto sto smo stavili u console.log():
// console.log(typeof true);
// console.log(typeof age);
// console.log(typeof javaScriptFun);
// console.log(typeof 30);
// console.log(typeof 'javaScriptFun');
// console.log(typeof 'Asmir');

// javaScriptFun = 'YES';
// console.log(typeof javaScriptFun);

// // Undefined:
// let children;
// console.log(children);
// console.log(typeof children);
// console.log(`Ja imam ${children} dece. :D`);

// children = 2023;
// console.log('children vrednost je: ' + children);
// console.log('children tip je: ' + typeof children);

// // Null
// console.log(typeof null); // object

// // NEDEFINISANE VARIJABLE: NE RADI OVO!!!!!
// lastUserName = 'Pljakic';
// console.log(lastUserName);

// /*Mark i John pokušavaju usporediti svoj BMI (indeks tjelesne mase), koji je
// izračunato pomoću formule:
// 1 nacin formule:
// BMI = mass / height ** 2
// 2 nacin formule: (isto je!)
// BMI = mass / (height * height)

// Vaši zadaci:
// 1. Pohranite Markovu i Ivanovu masu i visinu u varijable
// 2. Izračunajte njihov BMI pomoću formule (možete čak primijeniti oba
// verzije)
// 3. Napravite Booleovu varijablu 'markHigherBMI' koja sadrži informacije o ima li Mark veći BMI od Ivana.

// PODACI ISPITIVANJA 1: Mark teži 78 kg i visok je 1,69 m. Ivan ima 92 kg i visok je 1,95 m
// m visok.

// PODACI ISPITIVANJA 2: Mark teži 95 kg i visok je 1,88 m. Ivan ima 85 kg i visok je 1,76
// m visok.

// // TASK 1:
// const markWeight = 78;
// const markHeight = 1.69;

// const ivanWeight = 92;
// const ivanHeight = 1.95;

// // TASK 2:
// // Formula: BMI = mass / height ** 2
// // markBMI
// const markBMI = markWeight / markHeight ** 2;
// console.log(markBMI);

// // ivanBMI
// const ivanBMI = ivanWeight / ivanHeight ** 2;
// console.log(ivanBMI);

// // == vs ===
// // OVDE USPOREDJUJE SAMO VREDNOSTI:
// const brojGodina = prompt('Unesite broj god:');
// console.log(brojGodina);

// console.log(2023 == brojGodina); //TRUE
// // OVDE USPOREDJUJE I TIPOVE I VREDNOSTI:
// console.log(22 === '22'); //FALSE

// const markHigherBMI = markBMI > ivanBMI;
// console.log(`Markov BMI je ${markBMI} i njegov BMI je ${markHigherBMI}`);

// IF GRANA
//  if- kljucna rec
// () - USLOV/VI KOJE ZELIMO DA ISPITUJEMO
// {} TIJELO - BLOK KODA

//
// const firstName = 'Asmir';
// const lastName = 'Pljakic';
// DOKAZ DA MOZE VISE USLOVA U JEDNU GRANU IF:
// if (firstName === 'Asmir' && lastName === 'Pljakic') {
//   console.log('Ja se zovem Asmir i prezivam Pljakic!');
// } else {
//   console.log('Vi se ne zovete Asmir');
// }

// // PRIMER 2:

// const day = prompt('Unesite dan u nedelji:').toLowerCase();

// if (day === 'ponedeljak') {
//   console.log('Danas je ponedeljak!');
// } else if (day === 'utorak') {
//   console.log('Danas je utorak!');
// } else if (day === 'sreda') {
//   console.log('Danas je sreda!');
// } else if (day === 'cetvratak') {
//   console.log(`Danas je ${day}`);
// } else if (day === 'petak') {
//   console.log(`Danas je ${day}`);
// } else if (day === 'subota') {
//   console.log('Vikeeeend!');
// } else if (day === 'nedelja') {
//   console.log('Vikeeeend!');
// } else {
//   console.log('Uneli ste pogresno! ERROR! GRESKA! UNESITE: dan: pon-ned!');
// }
// const age = prompt('Unesite vase godine');
// if (age >= 18) {
//   console.log(`Mozete da polazete vozacki ispit jer imate ${age} godina`);
// } else {
//   console.log(`Ne mozete da polazete vozacki ispit jer imate ${age} godina`);
// }

// const penzija = prompt('Unesite vase godine:');
// if (penzija >= 65) {
//   console.log(`Mozete da idete u penziju jer ispunjavate uslov!`);
// } else {
//   console.log('Ne ispunjavate uslov!');
// }

// const day = prompt('Unesite dan u nedelji:').toLowerCase();

// if (day === 'ponedeljak') {
//   console.log(`Danas je ponedeljak`);
// } else if (day === `utorak`) {
//   console.log(`Danas je utorak`);
// } else if (day === `sreda`) {
//   console.log(`Danas je sreda`);
// } else if (day === `cetvrtak`) {
//   console.log(`Danas je cetvrtak`);
// } else if (day === `petak`) {
//   console.log(`Danas je petak`);
// } else if (day === `subota`) {
//   console.log(`Danas je vikend`);
// } else if (day === `nedelja`) {
//   console.log(`Danas je vikend`);
// } else {
//   console.log(
//     `[ERROR]: Pogresan unos: '${day}'. Unesite dan od: ponedeljak-nedelja`
//   );
// }

// Boolean &&(i/and) ||(ili/or) !(not)
// logicki operatori:
// AND &&: // Moraju obe varijable biti istinite da bi bilo true.
// OR ||:  // Ako je makar jedna istinita varijabla od dve bice true.
// NOT(!): // Ako je istina postace laz i obratno.

// const hasDriversLicense = true;
// const hasGoodVision = true;
// const hasCar = true;
// const isTired = false;
// // AND
// console.log(hasDriversLicense && hasGoodVision && hasCar); //
// console.log(hasGoodVision && hasDriversLicense);
// // OR
// console.log(hasCar || isTired || hasDriversLicense);
// console.log(hasGoodVision || isTired || hasDriversLicense);

// // NOT
// console.log(!hasCar && !hasGoodVision);
// console.log(hasCar || isTired || !hasCar);
// console.log(hasGoodVision && !hasCar && hasDriversLicense && !isTired);

// if (hasCar) {
//   console.log('Ti imas auto!');
// }

// if (!hasCar) {
//   console.log('Vi nema kola.');
// }

// Postoje dva gimnastička tima, Delfini i Koale. Natječu se jedni protiv drugih 3 puta. Pobjednik s najvećim prosječnim rezultatom je pobednik i osvaja trofej!
// Vaši zadaci:

// 1. Izračunajte prosječni rezultat za svaki tim, koristeći podatke testa ispod.

// 2. Usporedite prosječne rezultate tima kako biste odredili pobjednika natjecanja, i ispisati na konzolu. Ne zaboravite da može biti neriješeno, pa testirajte to također (nereseno znači da imaju isti prosječni rezultat)

// 3. Bonus 1: Uključite stanje za minimalni rezultat od 100. S ovim pravilom, tim pobjeđuje samo ako ima veći rezultat od drugog tima, a u isto vrijeme rezultat od najmanje 100 bodova. Savjet: Koristite logički operator za testiranje minimuma rezultat, kao i više blokova else-if

// 4. Bonus 2: Minimalni rezultat također se odnosi na neriješeno! Dakle, nereseno se događa samo kada oba tima imaju isti rezultat i oba imaju rezultat veći ili jednak 100 bodova. Inače, niti jedan tim ne osvaja trofej.

// Test  podaci:
// Podaci 1: rezultat Delfina 96, 108 i 89. Rezultat koale 88, 91 i 110
// Podaci bonus 1: rezultat Delfina 97, 112 i 101. Rezultat Koale 109, 95 i 123
// Podaci bonus 2: Delfini postižu 97, 112 i 101. Koale 109, 95 i 106

// TASK 1:

// const resDelfini = (96 + 108 + 89) / 3;
// const resKoale = (97 + 112 + 101) / 3;
// console.log(resDelfini, resKoale);
// if (resDelfini > resKoale && resDelfini >= 100) {
//   console.log(`Delfini su pobedili rezultatom ${resDelfini}`);
// } else if (resKoale > resDelfini && resKoale >= 100) {
//   console.log(`Koale su pobedile rezultatom ${resKoale}`);
// } else {
//   console.log(`NERESENO`);
// }

// SWITCH - GRANA
// PRIMER 1:
// const dan = prompt('unesite dan u nedelji:').toLowerCase();
// switch (dan) {
//   case 'ponedeljak':
//     console.log('Danas je ponedeljak!');
//     break;
//   case 'utorak':
//     console.log('Danas je utorak!');
//     break;
//   case 'sreda':
//     console.log('Danas je sreda!');
//     break;
//   case 'cetvrtak':
//     console.log('Danas je cetvrtak!');
//     break;
//   case 'petak':
//     console.log('Danas je petak!');
//     break;
//   case 'subota':
//     console.log('Danas je subota!');
//     break;
//   case 'nedelja':
//     console.log('Danas je nedelja!');
//     break;
//   // else
//   default:
//     console.log(`NISTE UNELI DAN! ERROR: '${dan}'. `);

//     break;
// }

// PRIMER 2:
// DA NAPRAVIMO PROGRAM ZA DUNJU: U pitanju su hrana i pice:

// const odabir = Number(prompt('Izaberite za: 1 - HRANA i 2 - PICE:'));

// switch (odabir) {
//   case 1:
//     console.log('Odabrali ste Hranu');
//     console.log('IZABERITE: 1 - PICA, 2 - Belo Meso i 3 - Topli sendvic!');
//     const hrana = +prompt(
//       'IZABERITE: 1 - PICA, 2 - Belo Meso i 3 - Topli sendvic!'
//     );
//     switch (hrana) {
//       case 1:
//         const cenaPice = 500;
//         console.log(`Izabrali ste picu`);
//         console.log(`Vas racun je ${cenaPice} RSD`);

//         break;
//       case 2:
//         const cenaBM = 500;
//         console.log(`Izabrali ste belo meso`);
//         console.log(`Vas racun je ${cenaBM} RSD`);
//         break;
//       case 3:
//         const cenaTS = 500;
//         console.log(`Izabrali ste topli sendvic`);
//         console.log(`Vas racun je ${cenaTS} RSD`);
//         break;
//       default:
//         console.log(`Odaberite 1, 2 ili 3`);

//         break;
//     }
//     break;
//     1;

//   case 2:
//     console.log('Odabrali ste PICE!');
//     console.log('izabrite 1 - KAFA I 2 -LIMUNADA');
//     const pice = Number(prompt('izabrite 1 - KAFA I 2 -LIMUNADA'));
//     switch (pice) {
//       case 1:
//         const cenaKafe = 120;
//         console.log(`Vas racun je ${cenaKafe} RSD`);

//         break;
//       case 2:
//         const cenaLim = 150;
//         console.log(`Vas racun je ${cenaLim} RSD`);

//         break;
//       default:
//         2;
//         console.log(`Mozete uneti samo 1 ili 2`);

//         break;
//     }
//     break;

//   default:
//     console.log(
//       `Niste uneli dobro: '${odabir}', unesite: 1 - HRANU ili 2 - Pice! `
//     );

//     break;
// }

// CONDITIONAL(TERNARY) OPERATOR

// const age = 15;
// // (USLOV) ? TACNO : NECTACNO

// console.log(
//   `Da li osoba ima vise godina od 18? ${
//     age >= 18
//       ? `Vi imate VISE OD: ${age} godina`
//       : `Vi nemate VISE od 18 godina!`
//   }`
// );

// const products = 2;

// console.log(
//   `Na stanju imate ${products} ${products > 1 ? 'products' : 'product'}.`
// );

// Aki želi da napravi veoma jednostavan kalkulator baksisa za svaki put kada ide da jede u Restoran 'DUNJA'. U njegovoj zemlji uobičajeno je davati 15% baksisa ako je vrednost računa između 50 i 300. Ako je vrednost drugačija, napojnica je 20%.

// Vaši zadaci:
// 1. Izračunajte baksis, u zavisnosti od vrednosti računa. Kreirajte promenljivu pod nazivom 'tip' za  ovo. Nije dozvoljeno koristiti if/else naredbu   (Ako vam je lakše, možete počnite sa if/else naredbom, a zatim pokušajte da je konvertujete u ternarnu operater!).

// 2. Odštampajte string na konzoli koji sadrži vrednost računa, baksis i konačnu vrednost (račun + napojnica). Primer: „Račun je bio 275, bakšiš 41,25, a ukupna vrednost 316,25”

// Test podaci:
// Podaci 1: Test za vrednosti računa 275, 40 i 430
// Saveti:
// Da biste izračunali 20% vrednosti, jednostavno ga pomnožite sa 20/100 = 0,2
// Vrednost X je između 50 i 300, ako je >= 50 && <= 300

// 1 PROCENAT BAKSISA JE 20% AKO JE >50 ili <300  (OD 50 DO 300 PROCENAT BAKSISA = 20%)
//  SVE VAN PRVOG USLOVA JE 15%

// TASK 1:
// const racun = 50; // 1% 120%

// const baksis = racun >= 50 && racun <= 300 ? racun * 0.15 : racun * 0.2;
// console.log(baksis);

// const total = baksis + racun;
// console.log(total);

// OBAVEZNO UBACIVATI 'use strict' NA VRU NASEG JS KODA!

// let hasDriverLicense = false;

// if (true) {
//   hasDriverLicense = 'laz';
// }
// if (hasDriverLicense) console.log('Ja mogu voziti.');

// // VREDNOSTI KOJE SU FALSE:
// console.log(Boolean('')); // false
// console.log(Boolean(0)); // false
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean(false)); // false

// // DECLARATION

// //  OVDE SE NE ZOVU PARAMETRI NEGO ATRIBUTI
// mojaFunkcija('Asmir', 'Pljakic');

// // () UNUTAR OVIH ZAGRADA SE PISU PARAMETRI:
// function mojaFunkcija(ime, prezime) {
//   console.log(`Vase ime je ${ime}, a vase prezime je ${prezime}`);

//   console.log('Ovo je Deklarejsn funkcija!');
// }

// //  OVDE SE NE ZOVU PARAMETRI NEGO ATRIBUTI
// mojaFunkcija('Hari', 'Ibragic');

// // NUTRIBULIT
// function fruitProccessor(apples, oranges) {
//   console.log(`Nas sok se sastoji od ${apples} jabuka i ${oranges} pomorandzi`);
// }
// fruitProccessor(2, 3);
// //funkcije sluze da ne bi ponavljali svoj kod. NE PONAVLJAJ SVOJ KOD.

// //Uvek radi Expression functions ili Arrow a IZBEGAVAJ DECLARATION f-je.

// // DECLARATIONS:
// function calcAge(birhYear) {
//   const age = 2023 - birhYear;
//   console.log(' POZDRAV SVIMA IDEMO DA KLANJAMO!');
//   // NAJBITNIJI JE RETURN  ZATO STO OVDE GORE MOZEMO DA NAPISEMO STA HOCE ALI ON CE VRATITI SAMO STA JE U RETURNU!!!
//   return age;
// }
// const age1 = calcAge(1993);

// console.log(age1);

// // console.log(calcAge2(2001));

// // EXORESSIONS
// const calcAge2 = function (godine) {
//   const age2 = 2023 - godine;
//   return age2;
// };
// console.log(calcAge2(2000));

// ARROW

// const myFunc = godine => {
//   const brGodina = 2023 - godine;

//   return brGodina;
//   // return
//   // console.log('OVO SE NIKAD ODRADIT/VIDET.')
// };
// console.log(myFunc(1998));

// // JEDNOLINIJSKE F-je:
// const myFunc2 = godine => 2023 - godine;
// console.log(myFunc2(2000));

// //
// const yearIntiretiment = (birhYear, firstName) => {
//   const age = 2023 - birhYear;
//   const retirement = 65 - age;

//   console.log(
//     `${firstName} Vi imate ${age} godina i treba vam jos ${retirement} godina za penziju.`
//   );

//   return retirement;
// };
// yearIntiretiment(1993, 'Asmir');

// pravi nas MIXER SOKOVA:

// const secko = voce => voce * 4;

// const nutribulit = (jabuka, kruske) => {
//   const komadiciJabuka = secko(jabuka);
//   const komadiciKruske = secko(kruske);

//   console.log(
//     `Dobili ste sok od ${komadiciJabuka} komadica jabuka i ${komadiciKruske} kodamica krusaka! :)`
//   );
// };

// nutribulit(3, 5);

// const secko = voce => voce * 4;

// const nutribulit = (jabuke, mandarine) => {
//   const komadiciJabuke = secko(jabuke);
//   const komadiciMandarine = secko(mandarine);
//   const sok = `Napravili ste sok od ${komadiciJabuke} komadica jabuke i od ${komadiciMandarine} komadica mandarine.`;
//   console.log(sok);

//   return sok;
// };
// nutribulit(2, 4);

// // /* Nazad na dva gimnastička tima, Delfini i Koale! Postoji nova
// // gimnastička disciplina, koja funkcioniše drugačije.
// // Svaki tim se takmiči 3 puta, a zatim se izračunava prosek od 3 rezultata (tj
// // jedna prosečna ocena po timu).
// // PRAVILO:
// // Tim pobeđuje samo ako ima najmanje dvostruko veći prosek od drugog tima.
// // U suprotnom, nijedan tim ne pobeđuje!
// // Vaši zadaci:
// // 1. Kreirajte funkciju strelice 'calcAverage' da biste izračunali prosek od 3 rezultata
// // 2. Koristite funkciju da izračunate prosek za oba tima
// // 3. Napravite funkciju 'checkWinner' koja uzima prosečan rezultat svakog tima
// // kao parametre ('avgDolphins' i 'avgKoalas'), a zatim beleži pobednika
// // na konzolu, zajedno sa pobedničkim poenima, prema gore navedenom pravilu.
// // Primer: „Koale pobeđuju (30 protiv 13)“
// // 4. Koristite funkciju 'checkWinner' da odredite pobednika za podatke 1 i
// // Podaci 2
// // 5. Ovaj put zanemarite rezlutat nereseno!
// // Test podaci:
// // Podaci 1: Delfini 44, 23 i 71. Koale 65, 54 i 49
// // Podaci 2: Delfini rezultat 85, 54 i 41. Koale 23, 34 i 27

// // Saveti:
// // Da biste izračunali prosek 3 vrednosti, saberite ih sve zajedno i podelite sa 3
// // Da biste proverili da li je broj A najmanje dvostruko veći od broja B, proverite da li je A >= 2 * B.

// Primenite ovo na prosečne rezultate tima

//  TASK 1

// const calcAverage = (br1, br2, br3) => {
//   const averge = (br1 + br2 + br3) / 3;

//   return averge;
// };
// //  TASK 1
// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// console.log(avgDolphins, avgKoalas);

// //  TASK 3
// const checkWinner = (avgDolphins, avgKoalas) => {
//   //  TASK 4
//   if (avgDolphins >= 2 * avgKoalas) {
//     // „Koale pobeđuju (30 protiv 13)“
//     console.log(`Delfini pobeđuju (${avgDolphins} protiv ${avgKoalas}).`);
//   }

//   if (avgKoalas >= 2 * avgDolphins) {
//     // „Koale pobeđuju (30 protiv 13)“
//     console.log(`„Koale pobeđuju (${avgKoalas} protiv ${avgDolphins}).`);
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// // /* Nazad na dva gimnastička tima, Delfini i Koale! Postoji nova
// // gimnastička disciplina, koja funkcioniše drugačije.
// // Svaki tim se takmiči 3 puta, a zatim se izračunava prosek od 3 rezultata (tj
// // jedna prosečna ocena po timu).
// // PRAVILO:
// // Tim pobeđuje samo ako ima najmanje dvostruko veći prosek od drugog tima.
// // U suprotnom, nijedan tim ne pobeđuje!
// // Vaši zadaci:
// // 1. Kreirajte funkciju strelice 'calcAverage' da biste izračunali prosek od 3 rezultata
// // 2. Koristite funkciju da izračunate prosek za oba tima
// // 3. Napravite funkciju 'checkWinner' koja uzima prosečan rezultat svakog tima
// // kao parametre ('avgDolphins' i 'avgKoalas'), a zatim beleži pobednika
// // na konzolu, zajedno sa pobedničkim poenima, prema gore navedenom pravilu.
// // Primer: „Koale pobeđuju (30 protiv 13)“
// // 4. Koristite funkciju 'checkWinner' da odredite pobednika za podatke 1 i
// // Podaci 2
// // 5. Ovaj put zanemarite rezlutat nereseno!
// // Test podaci:
// // Podaci 1: Delfini 44, 23 i 71. Koale 65, 54 i 49
// // Podaci 2: Delfini rezultat 85, 54 i 41. Koale 23, 34 i 27

// // Saveti:
// // Da biste izračunali prosek 3 vrednosti, saberite ih sve zajedno i podelite sa 3
// // Da biste proverili da li je broj A najmanje dvostruko veći od broja B, proverite da li je A >= 2 * B.

// Primenite ovo na prosečne rezultate tima

// TASK 1

// const calcAverage = (br1, br2, br3) => (br1 + br2 + br3) / 3;

// // TASK 2

// const avgDolphins = calcAverage(44, 23, 71);
// const avgKoalas = calcAverage(65, 54, 49);
// console.log(avgDolphins, avgKoalas);

// // TASK 3

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Delfini su pobedili rezultatom: ${avgDolphins}: ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koale su pobedili rezultatom: ${avgDolphins}:${avgKoalas}`);
//   } else {
//     console.log(`Niko ne pobedjuje.`);
//   }
// };

// checkWinner(avgDolphins, avgKoalas);

// // /* Nazad na dva gimnastička tima, Delfini i Koale! Postoji nova
// // gimnastička disciplina, koja funkcioniše drugačije.
// // Svaki tim se takmiči 3 puta, a zatim se izračunava prosek od 3 rezultata (tj
// // jedna prosečna ocena po timu).
// // PRAVILO:
// // Tim pobeđuje samo ako ima najmanje dvostruko veći prosek od drugog tima.
// // U suprotnom, nijedan tim ne pobeđuje!
// // Vaši zadaci:
// // 1. Kreirajte funkciju strelice 'calcAverage' da biste izračunali prosek od 3 rezultata
// // 2. Koristite funkciju da izračunate prosek za oba tima
// // 3. Napravite funkciju 'checkWinner' koja uzima prosečan rezultat svakog tima
// // kao parametre ('avgDolphins' i 'avgKoalas'), a zatim beleži pobednika
// // na konzolu, zajedno sa pobedničkim poenima, prema gore navedenom pravilu.
// // Primer: „Koale pobeđuju (30 protiv 13)“
// // 4. Koristite funkciju 'checkWinner' da odredite pobednika za podatke 1 i
// // Podaci 2
// // 5. Ovaj put zanemarite rezlutat nereseno!
// // Test podaci:
// // Podaci 1: Delfini 44, 23 i 71. Koale 65, 54 i 49
// // Podaci 2: Delfini rezultat 85, 54 i 41. Koale 23, 34 i 27

// // Saveti:
// // Da biste izračunali prosek 3 vrednosti, saberite ih sve zajedno i podelite sa 3
// // Da biste proverili da li je broj A najmanje dvostruko veći od broja B, proverite da li je A >= 2 * B.

// Primenite ovo na prosečne rezultate tima

const calcAverage = (br1, br2, br3) => {
  return (br1 + br2 + br3) / 3;
};

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);
console.log(avgDolphins, avgKoalas);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Delfini su pobedili rezultatom ${avgDolphins}`);
  }
  if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koale su pobedili rezultatom ${avgKoalas}`);
  }
};
checkWinner(avgDolphins, avgKoalas);
