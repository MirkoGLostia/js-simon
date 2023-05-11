/*
1) Visualizzare in pagina 5 numeri casuali.

2) Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 

3) l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// variabili

let numberToRemember = arrayOfRandomNumber(1, 30, 5);

for (let i = 0; i < numberToRemember.length; i++) {
    
    const number = numberToRemember[i];

    const toShow = document.querySelector("#memory-container span").append(` ${number}`);

}


setTimeout(function() {
    document.getElementById("memory-container").classList.add("time-up")
}, 30000);






// funzioni

// funzioni per generare valori casuali
function randomNumber (minNum, maxNum) {
    return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
}

// funzione per generare un container di valori casuali compreso tra min e max, contenente un tot di elementi
function arrayOfRandomNumber (min, max, tot) {

    const containerNum = [];

    while ((containerNum.length) < tot) {
        
        const nuovoNum = Math.floor(Math.random() * (max - min + 1) + min);

        if (!containerNum.includes(nuovoNum)) {

            containerNum.push(nuovoNum);
            
        }
        
    }

    return containerNum;

}
