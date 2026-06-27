let currentQuestion = 0;
let score = 0;
let timer = 30;
let countdown;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const currentEl = document.getElementById("current");
const totalEl = document.getElementById("total");
const timeEl = document.getElementById("time");
const progressBar = document.getElementById("progressBar");
const nextBtn = document.getElementById("nextBtn");

totalEl.innerText = questions.length;

loadQuestion();

function loadQuestion() {

clearInterval(countdown);

timer = 30;

startTimer();

const q = questions[currentQuestion];

currentEl.innerText = currentQuestion + 1;

questionEl.innerText = q.question;

answersEl.innerHTML = "";

progressBar.style.width =
((currentQuestion + 1) / questions.length) * 100 + "%";

q.options.forEach((option, index) => {

const btn = document.createElement("button");

btn.classList.add("option");

btn.innerText = option;

btn.onclick = () => selectAnswer(btn, index);

answersEl.appendChild(btn);

});

}

function startTimer() {

timeEl.innerText = timer;

countdown = setInterval(() => {

timer--;

timeEl.innerText = timer;

if(timer <= 0){

clearInterval(countdown);

nextQuestion();

}

},1000);

}

function selectAnswer(button,index){

clearInterval(countdown);

const correct = questions[currentQuestion].answer;

const buttons =
document.querySelectorAll(".option");

buttons.forEach(btn=>btn.disabled=true);

if(index===correct){

button.style.background="#00d8c5";

button.style.color="#071B2F";

score++;

}else{

button.style.background="#ff4d4d";

buttons[correct].style.background="#00d8c5";

buttons[correct].style.color="#071B2F";

}

}

nextBtn.onclick=()=>{

nextQuestion();

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

}else{

localStorage.setItem("score",score);

localStorage.setItem("total",questions.length);

window.location.href="result.html";

}

}
