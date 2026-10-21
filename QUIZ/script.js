question=document.querySelector("#question");
option1=document.querySelector("#option1")
option2=document.querySelector("#option2")
option3=document.querySelector("#option3")
option4=document.querySelector("#option4")
point=document.querySelector("#score")
next=document.querySelector("#next")
new_game=document.querySelector("#new")
new_game.style.display="none"
const questions = [
    {
        question: "What is the output of typeof null?",
        options: ["null", "object", "undefined", "number"],
        correctAnswer: "object"
    },
    {
        question: "Which keyword is used to declare a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        correctAnswer: "const"
    },
    {
        question: "Which method converts a JSON string into a JavaScript object?",
        options: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.object()"],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: "<a>"
    },
    {
        question: "Which CSS property changes the text color?",
        options: ["background-color", "font-style", "color", "text-style"],
        correctAnswer: "color"
    },
    {
        question: "What does addEventListener() do?",
        options: [
            "Creates an HTML element",
            "Attaches an event handler",
            "Changes CSS permanently",
            "Deletes an event"
        ],
        correctAnswer: "Attaches an event handler"
    },
    {
        question: "What is the output of 2 + '2' in JavaScript?",
        options: ["4", "22", "NaN", "Error"],
        correctAnswer: "22"
    },
    {
        question: "Which array method creates a new array by transforming elements?",
        options: ["forEach()", "map()", "push()", "pop()"],
        correctAnswer: "map()"
    },
    {
        question: "What does document.querySelector('#box') select?",
        options: [
            "An element with class box",
            "An element with ID box",
            "All elements named box",
            "The first div only"
        ],
        correctAnswer: "An element with ID box"
    },
    {
        question: "What does fetch() return?",
        options: ["An array", "A string", "A Promise", "A DOM element"],
        correctAnswer: "A Promise"
    }
];
let currentQuestion=0
let score=0;
let answered=false;
const options = [option1, option2, option3, option4];
function checkAnswer(selectedOption){
    if (answered) return;
    answered=true;
    const correct=questions[currentQuestion].correctAnswer;
    if(selectedOption.textContent===correct){
        selectedOption.classList.add("correct");
        score++;
        point.textContent=`Score : ${score}`
    }else{
        selectedOption.classList.add("wrong")
        options.forEach(function(btn){
            if(btn.textContent===correct){
                btn.classList.add("correct")
            }
        });
    }
}
options.forEach(function(btn){
    btn.addEventListener("click",function(){
        checkAnswer(btn)
    })
})
function showQuestion(){
    question.textContent=` Q${currentQuestion+1}   ${questions[currentQuestion].question}`;
    options.forEach(function(btn,index){
        btn.textContent=questions[currentQuestion].options[index]
        btn.classList.remove("correct")
        btn.classList.remove("wrong");
    })
    answered=false
}
showQuestion()
next.addEventListener("click",function(){
    if(currentQuestion<questions.length-1){
        currentQuestion++;
        showQuestion()
    }else{
        question.textContent=`Quiz completed 🥳`
        new_game.style.display="block"
        next.style.display="none"
    }
})
new_game.addEventListener("click",function(){
     currentQuestion=0
     score=0;
     answered=false;
    new_game.style.display="none"
    point.textContent="Score: 0"
        showQuestion()
})
