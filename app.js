const form = document.querySelector('.form-quizz');
let tableauResultats = [];
let goodResponses = ['c','a','b','a','c'];
const help = document.querySelector('.aide');
const note = document.querySelector('.note');
const resultTitle = document.querySelector('.resultats h2');

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

    let nbGoodResults=0;
    
    for(let i=0 ; i<5 ; i++){
        if( tableauResultats[i] === goodResponses[i] ){
            nbGoodResults++;
        }
    }

    switch(nbGoodResults){
        case 0:
            resultTitle.innerText = `👎 Peux mieux faire ! 👎`;
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            note.innerText = '0/5';
        break;

        case 1:
            resultTitle.innerText = `😭 Peux mieux faire ! 😭`;
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            note.innerText = '1/5';
        break;

        case 2:
            resultTitle.innerText = `👀 Il reste quelques erreurs. 😭`;
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            note.innerText = '2/5';
        break;

        case 3:
            resultTitle.innerText = `✨ Encore un effort ... 👀`;
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            note.innerText = '3/5';
        break;

        case 4:
            resultTitle.innerText = `✨ Vous y êtes presque ! ✨`;
            help.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            note.innerText = '4/5';
        break;

        case 5:
            resultTitle.innerText = `✔️ Bravo, c'est un sans faute ! ✔️`;
            help.innerText = '';
            note.innerText = '5/5';
        break;
        default:
            'Problème cas innatendu';
    }
}

    
//Une fois que c'est de nouveau clique, background en blanc 
