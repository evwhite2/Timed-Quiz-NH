var questions= [
    {   
        number: "Question 1",
        title: "What element is associated with the extinction-level asteroid impact on the Yucatan peninsula at the end of the Cretaceous period?",
        choices: ["A. Uranium", "B. Boron", "C. Iridium", "D. Polonium"],
        answer: "2"
    },
    {   
        number: "Question 2",
        title: "In what country were the oldest signs of human art and culture discovered?",
        choices: ["A. Ethiopia", "B. France", "C. Cambodia", "D. Italy"],
        answer: "1"
    },
    {   
        number: "Question 3",
        title: "What is the Homo Sapien’s closest genetic relative?",
        choices: ["A. Bonobos", "B. Orangutans ", "C. Chimpanzee", "D. Both A & C"],
        answer: "3"
    },
    {
        number: "Question 4",
        title: "How long after the Big Bang did the first start begin to shine?",
        choices: ["A. 100 million years", "B. 550 million years", "C. 10 million years", "D. 80 million years "],
        answer: "0"
    },
    {
        number: "Question 5",
        title: "What was the last major landmass to be inhabited by humans?",
        choices: ["A. Madagascar", "B. New Zealand", "C. Shetland Islands", "D. Falkland Islands"],
        answer: "1"
    }
];
 
var qCount=0;
var endCount=questions.length;
var timeLeft= 16;
var timer;
var score=0;
var userAnswer="";
var qAttempted=false;


$("#startBtn").on("click", beginQuiz);

function beginQuiz(start){
    start.preventDefault();
    $("#info-div").text("");
    $("#startBtn").remove();
    score =0;
    nextQ();
    timePerQ();
    timer= setInterval(timePerQ, 1000);
}

function nextQ(){
    qAttempted=false;
    timeLeft=16;
    console.log("beginning new question at question index "+qCount);
    $("#questionNo").text(questions[qCount].number);
    $("#info-div").text(questions[qCount].title);
    $("#optionA").text(questions[qCount].choices[0]);
    $("#optionB").text(questions[qCount].choices[1]);
    $("#optionC").text(questions[qCount].choices[2]);
    $("#optionD").text(questions[qCount].choices[3]);

    console.log("click attempted: "+qAttempted);
    $(".optionsBtn").on("click", function(userAnswer){
        qAttempted=true;
        console.log("click attempted: ", qAttempted);
        userAnswer= userAnswer.target.getAttribute("value")
        
        console.log("user answer is "+userAnswer);
 
            console.log("actual answer is "+questions[qCount].answer);
            
            console.log("running answer check");
           
            if (userAnswer === questions[qCount].answer){
                score++;
                console.log("current score: "+ score);
                qCount++;
                console.log("qCount after answer "+ qCount);
                checkCount();
            }else if (userAnswer != questions[qCount].answer){
                qCount++;
                timeLeft=0;
                checkCount();
            }
            
        });
            function checkCount(){

            if(qCount< 5){
                nextQ();
                console.log("game is not over, go to next question");
            }else{
                $("#timerStatus").text("Game Over");
                clearInterval(timer);
                scoreKeeper();
            }
        }        
    
    
}


function timePerQ(){

    timeLeft--
    $("#timerStatus").text(timeLeft+ " seconds left");

    if (timeLeft === 0){
        $("#timerStatus").text("Time's Up!")
        qCount++;
        nextQ();
    } else if (timeLeft===0 && qCount>4){
        $("#timerStatus").text("Game Over");
        clearInterval(timer);
        scoreKeeper();
    }
}

function scoreKeeper(){
    $("#score").text("You answered "+score+" questions correctly");
}