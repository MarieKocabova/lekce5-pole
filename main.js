// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let pole = ['Filip', 'Denisa', 'Lucie', 'Karolína', 'Katka'];
let vypisPole = document.querySelector('#vystup');
vypisPole.innerHTML = pole;



// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

let tretiVPoradi = pole[2];
console.log(tretiVPoradi);



// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

console.log(pole.length);



// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.

pole.forEach(function(element, index) {
    console.log(index + '. ' + element)
});





// Úkol 5 - přidej na konec pole další jméno
 pole.push('Libuše');
 console.log(pole);

 pole.unshift('Dominika')
 console.log(pole);
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)
vypisPole.innerHTML = pole;





// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
console.log(pole[0])
pole.shift(pole[0])

console.log(pole[pole.length -1])
pole.pop(pole[pole.length -1])
 
console.log(pole);










// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}