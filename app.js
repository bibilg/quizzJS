const form = document.querySelector('.form-quizz');
let tableauResultats = [];

form.addEventListener('submit', e => {

    e.preventDefault();

    for(let i=1; i<6 ; i++)
    {
        tableauResultats.push(document.querySelector(`.question-block input[name="q${i}"]:checked`).value);
    }

    console.log(tableauResultats);
    tableauResultats=[];

});
