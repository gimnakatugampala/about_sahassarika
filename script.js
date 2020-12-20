const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonElement = document.getElementById('answer-buttons');
const title = document.getElementById('title');
const wrapper = document.querySelector('.wrapper');
const questionCounter = document.getElementById('questionCounter');
const score = document.getElementById('score');
const domScore = document.getElementById('dom-score')

//CONSTANTS
let scoretext = 0;
const CORRECT_BONUS = 10/2;
const MAX_QUESTIONS = 20;

let shuffleQuestions
let currentQuestionIndex = 0;

startButton.addEventListener('click',startGame);
nextButton.addEventListener('click',() =>{
    currentQuestionIndex++
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion()
})

function startGame(){
    console.log('started');
    startButton.classList.add('hide');
    title.classList.add('hide');
    wrapper.style.display = 'block';
    shuffleQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide');
    questionCounter.innerText = `${currentQuestionIndex}/${MAX_QUESTIONS}`;
    setNextQuestion();
    
}

function setNextQuestion(){
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.questions
    question.answers.forEach(answer =>{
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click',selectAnswer);
        answerButtonElement.appendChild(button);
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide');
    while(answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })

    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{  
            startButton.innerText = 'Finish';
            startButton.classList.remove('hide')
            domScore.innerText =  ` Score : ${scoretext}`
            setTimeout(() => {
                window.location.reload();
            }, 1500);
    }

}

function setStatusClass(element,correct){
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct')
        incrementScore(CORRECT_BONUS);
         Array.from(answerButtonElement.children).forEach(button =>{
             button.classList.add('disable')
         })
    }else{
        element.classList.add('wrong')
        Array.from(answerButtonElement.children).forEach(button =>{
            button.classList.add('disable')
        })
    }
}

function incrementScore(num){
    scoretext += num;
    score.innerText = scoretext; 
   
};


function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        questions:"A Schoolmate she looks up to ?",
        answers:[
            {text:'Sanduni',correct:false},
            {text:'Migara',correct:true},
            {text:'Bryan',correct:false},
            {text:'Sahasra',correct:false}
        ]
    },
    {
        questions:"Where does she hope to be in 10 years ?",
        answers:[
            {text:'In France',correct:false},
            {text:'In Australia',correct:true},
            {text:'Being an Executive',correct:false},
            {text:'Best Engineer at a Tech Company',correct:false},
        ]
    },
    {
        questions:"Is is Single or Taken ?",
        answers:[
            {text:'Single',correct:false},
            {text:'Taken',correct:true},
        ]
    },
    {
        questions:"How many boyfriends did she have ?",
        answers:[
            {text:'5',correct:false},
            {text:'3',correct:true},
            {text:'4',correct:false},
            {text:'6',correct:false}
        ]
    },
    {
        questions:"Her Dream Job ?",
        answers:[
            {text:'Nanny',correct:false},
            {text:'Teacher',correct:false},
            {text:'Housewife',correct:false},
            {text:'Software engineering',correct:true}
        ]
    },
    {
        questions:" If she would change one thing about herself what would it be?",
        answers:[
            {text:'Being good to people',correct:true},
            {text:'Not Being Creative',correct:false},
            {text:'Being patient',correct:false},
            {text:'Being Careful with money',correct:false}
        ]
    },
    {
        questions:"Hardest goodbye in life so far ?",
        answers:[
            {text:'Breakups',correct:false},
            {text:'End of Schooling',correct:true},
            {text:'Letting go of O/L Friends',correct:false},
            {text:'Letting go of the prevoius school friends',correct:false}
        ]
    },
    {
        questions:"Very First Love ?",
        answers:[
            {text:'Praveen',correct:false},
            {text:'Dilusha',correct:false},
            {text:'Isuru',correct:false},
            {text:'Maleesha',correct:true}
        ]
    },
    {
        questions:"What comes to your mind when you hear the word 'Maleesha'?",
        answers:[
            {text:'Nothing comes to her mind',correct:true},
            {text:'Butterflies',correct:false},
            {text:'Angles',correct:false},
            {text:'Some Feelings',correct:false}
        ]
    },
    {
        questions:" If she were the president , what would she do first ?",
        answers:[
            {text:'Change the Contitution',correct:false},
            {text:'Kick all the Ministers',correct:true},
            {text:'Fullfill her Family needs',correct:false},
            {text:'Sell the Country',correct:false}
        ]
    },
    {
        questions:"Her Purpose in life?",
        answers:[
            {text:'Being Happy',correct:true},
            {text:'Making as much kids as possible',correct:false},
            {text:'Changing the World',correct:false},
            {text:'Be a good Citizen',correct:false}
        ]
    },
    {
        questions:"A Schoolmate that knows everything about her?",
        answers:[
            {text:'Aadhya',correct:false},
            {text:'Sanduni',correct:false},
            {text:'Migara',correct:true},
            {text:'Sahasra',correct:false}
        ]
    },
    {
        questions:"Her Favorite Place to Visit ?",
        answers:[
            {text:'London',correct:false},
            {text:'China',correct:false},
            {text:'Australia',correct:false},
            {text:'Paris',correct:true}
        ]
    },
    {
        questions:"Favorite App ?",
        answers:[
            {text:'Netflix',correct:false},
            {text:'Facebook',correct:true},
            {text:'Instagram',correct:false},
            {text:'Whatsapp',correct:false}
        ]
    },
    {
        questions:"How many kids does she wanna have ?",
        answers:[
            {text:'10',correct:false},
            {text:'6',correct:false},
            {text:'2',correct:true},
            {text:'3',correct:false}
        ]
    },
    {
        questions:"A Schoolmate she loves talking to?",
        answers:[
            {text:'Aadhya',correct:true},
            {text:'Bryan',correct:false},
            {text:'Sanduni',correct:false},
            {text:'Salma',correct:false}
        ]
    },
    {
        questions:"What does she think about 'Migara'?",
        answers:[
            {text:'Geek',correct:false},
            {text:'Nerd',correct:false},
            {text:'Annoying',correct:true},
            {text:'Very Supportive',correct:false}
        ]
    },
    {
        questions:"What does she think about 'Aadhil'?",
        answers:[
            {text:'Kind',correct:false},
            {text:'Hilarious',correct:true},
            {text:'Ladies-Man',correct:false},
            {text:'Focused',correct:false}
        ]
    },
    {
        questions:"What does she think about 'Sahasra'?",
        answers:[
            {text:'Crazy',correct:true},
            {text:'Genius',correct:false},
            {text:'Friendly',correct:false},
            {text:'Ladies-Man',correct:false}
        ]
    },
    {
        questions:"What does she think about 'Bryan'?",
        answers:[
            {text:'Long-term Thinker',correct:false},
            {text:'Annoying',correct:false},
            {text:'Very Supportive',correct:true},
            {text:'Genius',correct:false}
        ]
    },
]