const form = document.querySelector('.form-quizz');
let tableauResultats = [];
let goodResponses = ['c','a','b','a','c'];
const help = document.querySelector('.aide');
const note = document.querySelector('.note');
const resultTitle = document.querySelector('.resultats h2');
const questions = document.querySelectorAll('.question-block');

form.addEventListener('submit', e => {

    e.preventDefault();

    for(let i=1; i<6 ; i++)
    {
        tableauResultats.push(document.querySelector(`.question-block input[name="q${i}"]:checked`).value);
    }

    displayResults(tableauResultats);

    editQuestionsColors(tableauResultats);

    tableauResultats=[];

});


questions.forEach( question => {

    question.addEventListener('click' , () => {
        question.style.background = "white";
    })

})

function editQuestionsColors(tableauResultats){

    for(let i=0 ; i<5 ; i++){

        if( tableauResultats[i] === goodResponses[i]){

            questions[i].style.background = "#6CDB7A";

        }else{

            questions[i].style.background = "#F2251D";
            questions[i].classList.add("echec");

        }

    }

    // Delete classe echec after 0.4s (animation during 0.3s)
    setTimeout(function(){
        questions.forEach( question => {
            question.classList.remove("echec");
        })
    }, 400);
}

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


