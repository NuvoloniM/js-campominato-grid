/*
Consegna
Generare una griglia di gioco quadrata, simile a quella dello screenshot, in cui ogni cella contiene un numero tra 1 e 100.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Bonus
Permettere all'utente di indicare una difficoltà in base alla quale viene generato un numero variabile di celle:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

//bonus
//creo evento al btn
let btn = document.getElementById('btn');
let btnReset = document.getElementById('btn_reset');

btn.addEventListener('click', difficult);
btnReset.addEventListener('click',reset)

let diff = document.getElementById('difficult');
let container = document.getElementById('container');
let min = 1;
let max = 100;
// Stampo numeri da min a max
console.log(max);

// for (let i = min; i <= max; i++) {
//     //a ogni giro creo un div
//     let card = document.createElement('div');
//     //ad ogni div assegno la classe css creata
//     card.classList.add('card');
//     //in ogni div stampo l'indice
//     card.innerHTML += `${i}`;
//     //appendo il div creato al container
//     container.appendChild(card);

//     //creo evento
//     card.addEventListener('click',selected);
// }



//creo funzione che assegna all'elemento selezionato la classe selected 
function selected() {
    //funzione che, collegata ad un evento, cambia classe all'elemento(this) cliccato
    this.classList.add('selected');
}

//creo funzione che cambia var css a seconda del value della select

function difficult() {
    let placeholder = document.getElementById('placeholder');
    placeholder.className = 'd-none';
    let diff = document.getElementById('difficult');
    let x = diff.value;
    if (x == 'hard') {
        document.documentElement.style.setProperty('--column', '7');
        max = 49;
    } else if (x == 'normal'){
        document.documentElement.style.setProperty('--column', '9');
        max = 81;
    } else {
        document.documentElement.style.setProperty('--column', '10');
        max = 100;
    }
    let min = 1;
    for (let i = min; i <= max; i++) {
        //a ogni giro creo un div
        let card = document.createElement('div');
        //ad ogni div assegno la classe css creata
        card.classList.add('card');
        //in ogni div stampo l'indice
        card.innerHTML += `${i}`;
        //appendo il div creato al container
        container.appendChild(card);
    
        //creo evento
        card.addEventListener('click',selected);
    }
    
}

//funzione reset
function reset() {
    return history.go(0);
}