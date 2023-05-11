/*
1) Visualizzare in pagina 5 numeri casuali.

2) Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 

3) l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// variabili

let numberToRemember = arrayOfRandomNumber(1, 30, 5);

console.log(numberToRemember);

const answer = []

console.log(answer);

// inserire numeri nella pagina
for (let i = 0; i < numberToRemember.length; i++) {
    
    const number = numberToRemember[i];

    const toShow = document.querySelector("#memory-container span").append(` ${number}`);

}


// timer

    // timer for hide the numbers
    setTimeout(function() {

        document.getElementById("memory-container").classList.add("time-up")

    }, 10000);


    // timer to input the answer
    setTimeout(function() {

        for (let i = 1; i < 6; i++) {

            const question = prompt(i + "# which number was showed?");

            answer.push(question);

            console.log(answer);
            
        }

        console.log(answer);

    }, 11500);






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
