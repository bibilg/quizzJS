const form = document.querySelector('.form-quizz');
let tableauResultats = [];
let goodResponses = ['c','a','b','a','c'];

form.addEventListener('submit', e => {

    e.preventDefault();

    for(let i=1; i<6 ; i++)
    {
        tableauResultats.push(document.querySelector(`.question-block input[name="q${i}"]:checked`).value);
    }

    //Compter le nombre de bonne réponses, afficher en fonction du nombre de bonne réponses
    displayResults(tableauResultats);

    //Si bonne réponse, passer style au vert
    //Si mauvaise réponse, ajouter classe echec et fond en rouge

    //Au bout d'un moment, enlever la classe .animation

    tableauResultats=[];

});

function displayResults(tableauResultats){

    // Compter le nombre de bonnes réponses en faisant tableau--> filter --> .length

    //switch case en fonction du nombre de résultats et innerText sur les bonnes classes

}

    
//Une fois que c'est de nouveau clique, background en blanc 
