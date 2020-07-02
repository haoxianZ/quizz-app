const STORE = [{
    question: 'The tallest building in the world is located in which city?'
    ,answer:'Dubai',
    options: ['Dubai', 'A','B','c']
},
{
    question: 'Which year was the original Toy Story film released in the US?',
    answer:'1995',
    options: ['1995', 'A','B','c']

},
{ question: 'Name the current UK Home Secretary.',
    answer:'Priti Patel',
    options: ['Priti Patel', 'A','B','c']
},
{question: 'In 2017 the Best Picture Oscar winner was erroneously announced as La La Land. But which film actually won the award?',
answer:'Moonlight',
options: ['Moonlight', 'A','B','c']
},
{question: 'Name the longest river in the UK.',
answer:'River Severn',
options: ['River Severn', 'A','B','c']
},
{question: 'What is the capital city of Ukraine?',
answer: 'Kiev',
options: ['Kiev', 'A','B','c']
}
];


// a function to render the question and options
function createQuestion(){
    console.log('create a form')
};
//a function to handle the start button
function startQuizz(){
    console.log('start Quizz')
};
//a function to handle the click on option and check if is correct
function submitOption(){
    console.log('if is correct')

};
//a function to display message of correct of not 

// function that moves to next question after they click next & choose
function nextQuestion(){
    console.log('nextQuestion ran')
};
//a function to keep track of how many q left and their score
// a function for restart at the end
function restart(){
    console.log('restart')
};
// a function that runs the function and $ call back
function quizzApp(){
    startQuizz()
    createQuestion()
    submitOption()
    nextQuestion()
    restart()
};

$(quizzApp)