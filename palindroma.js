/* 
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

/* 
1- Recuperiamo gli elementi dal DOM
2- Mettiamo in ascolto sugli eventi il form
3- Blocchiamo il comportamento di base del form
4- Recuperiamo l'input dell'utente
5- Creiamo una funzione che verifichi se la parola è palindroma
    -rigiriamo la parola
    -verifichiamo se la parola di origine e la parola inversa sono uguali
    -se si è palindroma
    -se no non è palindroma
*/

// # FASE DI PREPARAZIONE
// Recuperiamo gli elementi dal DOM
const form = document.getElementById('form-palindrome');
const inputWordField = document.getElementById('input-word');
const output = document.getElementById('output');
console.log(form);
console.log(inputWordField);
console.log(output);



function getDataForm(e) {
    // ! Blocchiamo il comportamento di base del form
    e.preventDefault();
    
    // # FASE DI RACCOLTA DATI
    // Recuperiamo l'input dell'utente
    const inputWord = inputWordField.value;
    console.log(inputWord);
    
    // # FASE DI OUTPUT
    if(isPalindrome(inputWord)) { 
        // Se la condizione è vera stampiamo che è palindroma
        output.innerText = `La parola ${inputWord} è palindroma`;
    } else {  
        // Se la condizione è falsa stampiamo che non è palindroma
        output.innerText = `La parola ${inputWord} non è palindroma`;
    }
    
    // ! Resettiamo il form
    form.reset();
}


// # FASE DI GESTIONE EVENTI
// Mettiamo in ascolto il form sugli eventi
form.addEventListener('submit', getDataForm);


