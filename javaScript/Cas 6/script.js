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

// let js = 'amazing';
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
const firstName = 'Asmir';
const lastName = 'Pljakic';
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

// moja 1.vezba!
// napraviti program preko switch case-a za restoran: hrana i pice:

// const odabir = Number(prompt('Odaberite: 1 - Hranu, 2 - Pice'));
// switch (odabir) {
//   case 1:
//     console.log(`Odabrali ste hranu!`);
//     console.log('Odaberite 1 - Pica, 2 - Hot-Dog, 3 - Pasta');
//     const hrana = +prompt('IZABERITE: 1 - Pica, 2 - Hot Dog i 3 - Pasta!');
//     switch (hrana) {
//       case 1:
//         const cenaPice = 550;
//         console.log(`Odabrali ste picu!`);
//         console.log(`Vas racun je ${cenaPice} RSD`);

//         break;
//       case 2:
//         const cenaHD = 300;
//         console.log(`Odabrali ste Hot-Dog!`);
//         console.log(`Vas racun je ${cenaHD} RSD`);

//         break;
//       case 3:
//         const cenaPasta = 450;
//         console.log(`Odabrali ste Pastu!`);
//         console.log(`Vas racun je ${cenaPasta} RSD`);

//       default:
//         console.log(`Niste uneli potrebne podatke!`);
//         break;
//     }

//     break;
//   case 2:
//     console.log(`Odabrali ste pice!`);
//     console.log('Odaberite 1 - Fantu, 2 - Kafu, 3 - Limundu');
//     const pice = +prompt('Odaberite: 1 - Fantu, 2 - Kafu i 3 - Limunadu!');
//     switch (pice) {
//       case 1:
//         const cenaFanta = 130;
//         console.log(`Odabrali ste fantu!`);
//         console.log(`Vas racun je ${cenaFanta} RSD`);

//         break;
//       case 2:
//         const cenaKafe = 100;
//         console.log(`Odabrali ste kafu`);
//         console.log(`Vas racun je ${cenaKafe} RSD`);

//         break;
//       case 3:
//         const cenaLimunade = 150;
//         console.log(`Odabrali ste limunadu`);
//         console.log(`Vas racun je ${cenaLimunade} RSD`);

//       default:
//         console.log(`Niste uneli potrebne podatke!`);
//         break;
//     }
//     break;

//   default:
//     console.log(`Niste uneli potrebne podatke!`);
//     break;
// }

// Moja 2. vezba!

//napraviti program preko if-elsa za restoran: hrana i pice:
const odabir = +prompt('Oaberite 1. - Hrana, 2. - Pice');

if (odabir === 1) {
  console.log(`odabrali ste hranu`);
  const hrana = +prompt('Odaberite 1 - Pica, 2 - Hot-Dog, 3 - Pasta ');
  if (hrana === 1) {
    console.log(`Odabrali ste picu!`);
    console.log(`Vas racun je 550 RSD`);
  }
  if (hrana === 2) {
    console.log(`Odabrali ste Hot-Dog!`);
    console.log(`Vas racun je 250 RSD`);
  }
  if (hrana === 3) {
    console.log(`Odabrali ste Pastu!`);
    console.log(`Vas racun je 450 RSD`);
  }
}
if (odabir === 2) {
  console.log(`Odabrali ste pice`);
  const pice = +prompt('Odaberite 1 - Fantu, 2 - Kafu, 3 - Limundu');
  if (pice === 1) {
    console.log(`Odabrali ste Fantu!`);
    console.log(`Vas racun je 130 RSD`);
  }
  if (pice === 2) {
    console.log(`Odabrali ste Kafu!`);
    console.log(`Vas racun je 120 RSD`);
  }
  if (pice === 3) {
    console.log(`Odabrali ste Limunadu!`);
    console.log(`Vas racun je 150 RSD`);
  }
} else {
  console.log(`Niste uneli potrebne podatke!`);
}
