const STORE = [{
    question: 'The tallest building in the world is located in which city?'
    ,answer:1,
    options: ['Dubai', 'A','B','c']
},
{
    question: 'Which year was the original Toy Story film released in the US?',
    answer:1,
    options: ['1995', 'A','B','c']

},
{ question: 'Name the current UK Home Secretary.',
    answer:1,
    options: ['Priti Patel', 'A','B','c']
},
{question: 'In 2017 the Best Picture Oscar winner was erroneously announced as La La Land. But which film actually won the award?',
answer:1,
options: ['Moonlight', 'A','B','c']
},
{question: 'Name the longest river in the UK.',
answer:1,
options: ['River Severn', 'A','B','c']
},
{question: 'What is the capital city of Ukraine?',
answer: 1,
options: ['Kiev', 'A','B','c']
}
];

let questionId=0;

//a function to handle the start button
function startQuizz(){
    console.log('start Quizz')
    $('.start').on('click',event =>{
        renderQuestion();
    } )
};

//a function to create a list of option
function createOptions(storeId){

   for (i=0; i < STORE[storeId].options.length; i++) {
    $('.js-option').append(`
    <input type = "radio" name="options" id="option${i+1}"> 
    <label for="option${i+1}"> ${STORE[storeId].options[i]}</label> 
`);
   }
}


// a function to render the question and options, creating a form
function renderQuestion(questionIndex){
    console.log('create a form')
    
    let currentQuestion = STORE[questionId].question
    let currentOptions= STORE[questionId].options;

    const questionPage =  `<div>
    
    <form id="js-question">
        <fieldset>
            <div>
                <legend>${currentQuestion}</legend>
            </div>
            <div class = "css-options">
                <div class = "js-option">
                    
                </div>
            </div>
            <div class="submitButton">
                <button type= "submit" class=" js-submit" >Submit</button>
            </div>
        </fieldset>
    </form> 
       
</div>
    `
    $('.js-question').html(questionPage);
    createOptions(questionId);

};

 // correct display
function correct(){
    $('.js-correctOrnot').html(`
    <h3>Your answer is correct!</h3>
    <button type="button" class="nextButton button">Next</button>`)
    // updatescore 
}
// incorrect display
function incorrect(){
    $('.js-correctOrnot').html(`
    <h3>Your answer is incorrect!</h3>
    <button type="button" class="nextButton button">Next</button>`)
}
//a function to handle submit
function submitOption(){
    console.log('if is correct')
    $('.js-submit').on('submit', function(event) {
        event.preventDefault();
        let choice= $('input:checked').val();
        console.log(choice)
        let correctAnswer = STORE[questionId].answer;
        if (choice == correctAnswer){
            correct()
        }
        else {incorrect()}



    })

};

// function that moves to next question after they click next & choose
function nextQuestion(){
    console.log('nextQuestion ran')
    $()//add to questionId
};
//a function to keep track of how many q left and their score

// a function for restart at the end
function restart(){
    console.log('restart')
    
};
// a function that runs the function and $ call back
function quizzApp(){
    startQuizz()
    submitOption()
    nextQuestion()
    restart()
};

$(quizzApp)