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
        title: "What is the Homo Sapien’s closest genetic relative(s)?",
        choices: ["A. Bonobos", "B. Orangutans ", "C. Chimpanzee", "D. Both A & C"],
        answer: "3"
    },
    {
        number: "Question 4",
        title: "How long after the Big Bang did the first star begin to shine?",
        choices: ["A. 100 million years", "B. 550 million years", "C. 10 million years", "D. 80 million years "],
        answer: "0"
    },
    {
        number: "Question 5",
        title: "What was the last major landmass to be inhabited by humans?",
        choices: ["A. Madagascar", "B. New Zealand", "C. Shetland Islands", "D. Falkland Islands"],
        answer: "1"
    },
    {
        number: "Question 6",
        title: "What was the site of the largest known volcanic eruption?",
        choices: ["A. Krakatoa", "B. Yellowstone", "C. Huaynaputina", "D. Mt Thera"],
        answer: "1"
    },
    {
        number: "Question 7",
        title: "Which of the following present-day countries were part of the ancient Kingdom of Kush?",
        choices: ["A. Angola, Namibia, and South Afirca", "B. South Africa, Lesotho, and Botswana", "C. Sudan, Ethiopia, and Eritrea", "D. Morroco, Algeria, Mauritania"],
        answer: "2"
    },
    {
        number: "Question 8",
        title: "How much of the unvierse is made up of dark matter?",
        choices: ["A. 68%", "B. 47%", "C. 19%", "D. 27%"],
        answer: "3"
    },
    {
        number: "Question 9",
        title: "What is the difference between a hurricane and a typhoon?",
        choices: ["A. Wind speed", "B. Rainfall", "C. Destructiveness", "D. Location"],
        answer: "3"
    },
    {
        number: "Question 10",
        title: "What part of the human brain is associated with autonomic functions?",
        choices: ["A. Medulla", "B. Amygdala", "C. Hypothalamus", "D. Hippocampus"],
        answer: "3"
    },
    {
        number: "Question 11",
        title: "How long does it take for Earth's moon to complete 1 rotation?",
        choices: ["A. 36 hours", "B. 24 hours", "C. 12 hours", "D. It does not rotate"],
        answer: "1"
    },
    {
        number: "Question 12",
        title: "Which one of the following is not a name of one of the Earth's major tectonic plates?",
        choices: ["A. Indian Plate", "B. Antartic Plate", "C. Atlantic Plate", "D. Pacific Plate"],
        answer: "2"
    },
    {
        number: "Question 13",
        title: "Which of the following regions is home to the world's the largest desert?",
        choices: ["A. North Africa", "B. Patagonia", "C. Arabia", "D. Antarctica"],
        answer: "3"
    },
    {
        number: "Question 14",
        title: "Which of the following elements is lightest",
        choices: ["A. Tungston", "B. Cerium", "C. Lead", "D. Gold"],
        answer: "1"
    },
    {
        number: "Question 15",
        title: "Which of these works is the oldest known piece of literature?",
        choices: ["A. Kesh Temple Hymm", "B. The Epic of Gilgamesh", "C. The Odyssey", "D. Pyramid Texts"],
        answer: "0"
    },
    {
        number: "Question 16",
        title: "How long ago did the neolithic revolution beign to take place?",
        choices: ["A. 5-10 thousand years ago", "B. 10-15 thousand years ago", "C. 15-20 thousand years ago", "D. 20-25 thousand years ago"],
        answer: "2"
    },
    {
        number: "Question 17",
        title: "Which greenhouse gas is in most abundance in the Earth's atmosphere?",
        choices: ["A. H2O", "B. CO2", "C. CH4", "D. O2"],
        answer: "0"
    },
    {
        number: "Question 18",
        title: "Which Era of Earth history is known also as the 'Age of Reptiles and Conifers'?",
        choices: ["A. Mesoarchean", "B. Paleozoic", "C. Mesozoic", "D. Neoproterozoic"],
        answer: "2"
    },
    {
        number: "Question 19",
        title: "What is the most common type of star found in te Milky Way?",
        choices: ["A. Red Giant", "B. Red Supergiant", "C. Red Dwarf", "D. White Dwarf"],
        answer: "2"
    },
    {
        number: "Question 20",
        title: "What is the smallest nation in Asia?",
        choices: ["A. Palestine", "B. Cyprus", "C. Singapore", "D. Maldives"],
        answer: "3"
    }

];

var endGameCt = questions.length;
var qCount=0;
var endCount=questions.length;
var timeLeft= 16;
var timer;
var score=0;
var wrong=0;
var userAnswer="";


function beginQuiz(){
    $("#startBtn").remove();
    timePerQ();
    timer = setInterval(timePerQ, 1000);
    nextQ();
}

function timePerQ(){
    timeLeft--
    $("#timerStatus").text(timeLeft+ " seconds left");
    if(timeLeft=== 0){
        $("#timerStatus").text("Time's Up!");
        qCount++;
        nextQ();
    }
}

function nextQ(){
    
    console.log(`Question: ${qCount}`);

    if(qCount< endGameCt){
        timeLeft=16;
        $("#questionNo").text(questions[qCount].number);
        $("#info-div").text(questions[qCount].title);
        $("#optionA").text(questions[qCount].choices[0]);
        $("#optionB").text(questions[qCount].choices[1]);
        $("#optionC").text(questions[qCount].choices[2]);
        $("#optionD").text(questions[qCount].choices[3]);

    }else if(qCount=== endGameCt){
        console.log("game over");
        $("#form").empty();
        $(".info").empty();
        $("#timerStatus").attr("style", "font-size: 50px;");
        $("#timerStatus").text("Game Over");
        clearInterval(timer);
        scoreKeeper();
    }

}


function scoreKeeper(){
    $("#score").text("You answered "+score+" questions correctly, and "+wrong+" questions incorrectly");   
}

$(".optionsBtn").on("click", function(userAnswer){
    userAnswer= userAnswer.target.getAttribute("value")
    
    console.log(`Correct Answer: ${questions[qCount].answer}`);
    console.log(`User Answer: ${userAnswer}`)

    if (userAnswer == questions[qCount].answer){
        score++;
        $("#timerStatus").text("Correct!");
        
    }else{
        wrong++;
        $("#timerStatus").text("Wrong!");
    }
    qCount++;
    nextQ();
});

$("#startBtn").on("click", beginQuiz);
