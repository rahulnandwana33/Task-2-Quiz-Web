var questionNo = 0;
var questionSet = {};
const question = document.getElementById("question");
const image_1 = document.getElementById("image_1");
const image_2 = document.getElementById("image_2");
const image_3 = document.getElementById("image_3");
const image_4 = document.getElementById("image_4");
const image_name_1 = document.getElementById("image_name_1")
const image_name_2 = document.getElementById("image_name_2")
const image_name_3 = document.getElementById("image_name_3")
const image_name_4 = document.getElementById("image_name_4")
const startButton = document.getElementById("start-btn");
const questionContainerElement = document.getElementById("question-container");


startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
  }

function loadGame(){
    fetch('/questions')
    .then(res => res.json())
    .then(data => questionSet = data)
    .then(() => changeQuestionSet())
}

function changeQuestionSet(){
    console.log(questionSet[questionNo])
    document.getElementById("question").innerHTML = questionSet[questionNo].question
    image_1.src = questionSet[questionNo].option_1.link_1;
    image_2.src = questionSet[questionNo].option_2.link_2;
    image_name_1.innerText = questionSet[questionNo].option_1.link_name;
    image_name_2.innerText = questionSet[questionNo].option_2.link_name;
    if(questionSet[questionNo].option_3.link_3 !== "none"){
        image_3.style.display = "block"
        image_name_3.style.display = "block"
        image_3.src = questionSet[questionNo].option_3.link_3;
        image_name_3.innerText = questionSet[questionNo].option_3.link_name;
    }else{
        image_3.style.display = "none"
        image_name_3.style.display = "none"
        image_3.src = ""
        image_name_3.innerText = ""
    }
    if(questionSet[questionNo].option_4.link_4 !== "none"){
        image_4.style.display = "block"
        image_name_4.style.display = "block"
        image_4.src = questionSet[questionNo].option_4.link_4;
        image_name_4.innerText = questionSet[questionNo].option_4.link_name;
    }else{
        image_4.style.display = "none"
        image_name_4.style.display = "none"
        image_4.src = ""
        image_name_4.innerText = ""
    }

}

// function changeQuestionSet(){
//     console.log(questionSet[questionNo])
//     document.getElementById("question").innerHTML = questionSet[questionNo].question
//     image_1.src = JSON.parse(questionSet[questionNo].option_1).link_1;
//     image_2.src = JSON.parse(questionSet[questionNo].option_2).link_2;
//     image_name_1.innerText = JSON.parse(questionSet[questionNo].option_1).link_name;
//     image_name_2.innerText = JSON.parse(questionSet[questionNo].option_2).link_name;
//     if(JSON.parse(questionSet[questionNo].option_3).link_3 !== "none"){
//         image_3.style.display = "block"
//         image_name_3.style.display = "block"
//         image_3.src = JSON.parse(questionSet[questionNo].option_3).link_3;
//         image_name_3.innerText = JSON.parse(questionSet[questionNo].option_3).link_name;
//     }else{
//         image_3.style.display = "none"
//         image_name_3.style.display = "none"
//         image_3.src = ""
//         image_name_3.innerText = ""
//     }
//     if(JSON.parse(questionSet[questionNo].option_4).link_4 !== "none"){
//         image_4.style.display = "block"
//         image_name_4.style.display = "block"
//         image_4.src = JSON.parse(questionSet[questionNo].option_4).link_4;
//         image_name_4.innerText = JSON.parse(questionSet[questionNo].option_4).link_name;
//     }else{
//         image_4.style.display = "none"
//         image_name_4.style.display = "none"
//         image_4.src = ""
//         image_name_4.innerText = ""
//     }

// }

function nextQuestion(){
    questionNo++;
    changeQuestionSet()
}