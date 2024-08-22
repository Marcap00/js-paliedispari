/*
* PARI O DISPARI
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto
*/

/* 
1- Recuperiamo gli elementi dal DOM
2- Creiamo una funzione che genera un numero random
3- Recuperiamo gli input dell'utente
4- Facciamo la somma dei due numeri
5- Controlliamo se il risultato della somma è pari o dispari
6- Decretiamo il vincitore 
7- Stampiamo il risultato in pagina
*/

// # FASE DI PREPARAZIONE
// Recuperiamo gli elementi dal DOM
const formEvenOdd = document.getElementById('form-evenodd');
const options = document.getElementById('options');
const inputNumbField = document.getElementById('input-number');
const outputCPUNumb = document.getElementById('output-cpu-numb');
const outputEvenOdd = document.getElementById('output-evenodd');
console.log(formEvenOdd);
console.log(options);
console.log(inputNumbField);
console.log(outputCPUNumb);
console.log(outputEvenOdd);

// Preparo le variabili 
// Fisso il max
max = 5;

// Genero il numero tramite la funzione
const CPUNumber = getRandomNumber(max);
console.log(CPUNumber);

// # FASE DI GESTIONE EVENTI
// Metto in ascolto sugli eventi il form
formEvenOdd.addEventListener('submit', function(e) {
    // ! Blocchiamo il form
    e.preventDefault();

    // # FASE DI RACCOLTA DATI
    // Raccolgo l'opzione pari o dispari dell'utente
    const option = options.value;
    console.log(option);
    // Raccolgo il numero che mi ha messo l'utente
    const inputNumb = parseInt(inputNumbField.value); 
    console.log(inputNumb);

    // # FASE DI ELABORAZIONE
    // Eseguiamo la somma dei due numeri
    const sum = CPUNumber + inputNumb;
    console.log(sum);

    // Confrontiamo i risultati
    // Settiamo che l'utente ha perso di default
    let text = 'Hai Perso!';
    // Apriamo una coindizione
    if (options === 'even' && isEven(sum)) { // Se l'opzione è pari e il risultato è pari allora Hai vinto
        text = 'Hai vinto!';
    } else if (options === 'odd' && !(isEven(sum))) {  // Se l'opzione è dispari e il risultato è dispari allora Hai vinto
        text = 'Hai vinto!';
    }
    
    // # FASE DI OUTPUT
    //Stampiamo in pagina
    outputEvenOdd.innerText = text;
    outputCPUNumb.innerText = `Il numero del CPU è: ${CPUNumber}`;
    
    // ! Resettiamo il form
    formEvenOdd.reset();
})

