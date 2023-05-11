/*
1) Visualizzare in pagina 5 numeri casuali.

2) Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono 

3) l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

4) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


// variabili

    // generatore di numeri random
    let numberToRemember = arrayOfRandomNumber(1, 30, 5);

    // debug
    console.log(numberToRemember);

    // array risposta utente
    const answer = [];

    // array di risposte utente corrette
    const correctAnswers = [];








// inserire numeri nella pagina
for (let i = 0; i < numberToRemember.length; i++) {
    
    document.querySelector("#memory-container span").append(` ${numberToRemember[i]}`);

}


// timer

    // timer for hide the numbers
    setTimeout(function() {

        document.getElementById("memory-container").classList.add("time-up")

    }, 10000);


    // timer to input the answer
    setTimeout(function() {

        for (let i = 0; i < 5; i++) {

            const question = parseInt(prompt(i+1 + "# which number was showed?")) ;

            answer.push(question);
            
        }

    }, 11500);



// buttons

submit.onclick = function() {
    
    for (let i = 0; i < answer.length; i++) {
       
        if (numberToRemember.includes(answer[i])) {

            correctAnswers.push(answer[i])
            
            document.querySelector("#answer-container span").append(` ${answer[i]}`);
        }
        
    }

    let show = correctAnswers.length

    alert ("you remembered " + show + " correct numbers")


}









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

