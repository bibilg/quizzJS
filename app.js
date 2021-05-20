const form = document.querySelector('.form-quizz');
let tableauResultats = [];

form.addEventListener('submit', e => {

    e.preventDefault();

    for(let i=1; i<6 ; i++)
    {
        tableauResultats.push(document.querySelector(`.question-block input[name="q${i}"]:checked`).value);
    }

    console.log(tableauResultats);

    //Récupérer les bonnes réponses 
    //Compter le nombre de bonne réponses, afficher en fonction du nombre de bonne réponses

    //Si bonne réponse, passer style au vert
    //Si mauvaise réponse, ajouter classe echec et fond en rouge

    //Au bout d'un moment, enlever la classe .animation

    tableauResultats=[];

});

    
//Une fois que c'est de nouveau clique, background en blanc 



function results(tableauResultats){



}
