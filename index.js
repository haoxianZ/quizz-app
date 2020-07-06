const STORE = [{
    question: 'The tallest building in the world is located in which city?'
    ,answer:'Dubai',
    options: ['Shanghai','Dubai','New York','London']
},
{
    question: 'Which year was the original Toy Story film released in the US?',
    answer:'1995',
    options: ['1997', '2000','1995','1990']

},
{ question: 'Name the current UK Home Secretary.',
    answer:'Priti Patel',
    options: ['Priti Patel', 'Matt Hancock','James Howard Harris','Granville Leveson-Gower']
},
{question: 'In 2017 the Best Picture Oscar winner was erroneously announced as La La Land. But which film actually won the award?',
answer:'Moonlight',
options: ['Hell or High Water', 'Nocturnal Animals','Lion','Moonlight']
},
{question: 'Name the longest river in the UK.',
answer:'River Severn',
options: ['River Severn', 'River Trent','River Thames','River Tees']
},
{question: 'What is the capital city of Ukraine?',
answer: 'Kyiv',
options: ['Kharkiv', 'Odesa','Kyiv','Dnipro']
}
];
console.log(STORE[5].question)
let questionId=0;
let score = 0;
//a function to handle the start button
function startQuizz(){
    console.log('start Quizz')
    $('.js-start').on('click',event =>{
        renderQuestion(0);
        $('.js-start').hide();
       
    } )
};

//a function to create a list of option
function createOptions(storeId){

   for (i=0; i < STORE[storeId].options.length; i++) {
    $('.js-option').append(`
    <input type = "radio" name="options" id="${i+1}" value = "${i}"> 
    <label for="option${i+1}"> ${STORE[storeId].options[i]}</label> 
`);
   }
}

//a function to handle submit
function submitOption(questionIndex){
    
    $('.js-submit').on('click', function(event) {
        event.preventDefault();
        console.log('if is correct')
        let selected = $('input:checked');
        let choice = selected.val();
        
        console.log(STORE[questionIndex].options[choice]);
        let correctAnswer = STORE[questionIndex].answer;
        if (STORE[questionIndex].options[choice] == correctAnswer){
            correct();
            $('.score').text(score);
            $('.js-submit').hide();
            nextQuestion();
        }
        if (!choice) {$('.js-correctOrNot').html('Please select an option')}
        else if (STORE[questionIndex].options[choice] != correctAnswer) {
            incorrect(correctAnswer);
            nextQuestion();}
    })
};


// correct display
function correct(){
    $('.js-correctOrNot').html(`
    <div class="js-next">
    <h3>Your answer is correct!</h3>
    <button class="nextBtn button">Next</button>
</div>
`)
    // updatescore 
    score++;
    
};
// incorrect display
function incorrect(displayAnswer){
    $('.js-correctOrNot').html(`
    <div class="js-next">
    <h3>Your answer is incorrect! The correct answer is ${displayAnswer}</h3>
    <button class="nextBtn button">Next</button>
</div>
`)
    
}

// a function to render the question and options, creating a form
function renderQuestion(questionIndex){
    console.log('create a form')
    
    let currentQuestion = STORE[questionIndex].question
    let currentOptions= STORE[questionIndex].options;
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
    
    createOptions(questionIndex);
    submitOption(questionIndex);
};

 

// function that moves to next question after they click next & choose
function nextQuestion(){
    $('.js-next').on('click', '.nextBtn', event => {
        console.log('nextQuestion ran')
        $('.js-next').hide();
        lastQuestion = STORE.length -1;
        if(questionId<lastQuestion){
            console.log('the if is running')
            console.log(questionId, STORE.length)
            questionId++;//add to questionId
            $('.questionNumber').text(questionId)
            renderQuestion(questionId);
        }
        else {
            console.log('the else is runing ')
            $('.js-correctOrNot').hide();
            $('.js-lastPage').html(`<h2>Your score is ${score} </h2>
            <div class="restartButton">
                <button type= "submit" class=" js-restart" >Restart</button>
            </div>
            `)
        };
        
});
};
//a function to keep track of how many q left and their score

// a function for restart at the end
function restart(){
    console.log('restart')
    $('restartButton').on('click', '.js-restart', function(event){
        let questionId=0;
        let score = 0;
        startQuizz();
    })
    
};
// a function that runs the function and $ call back
function quizzApp(){
    startQuizz()
    
    
};

$(quizzApp)