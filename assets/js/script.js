//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
 var myTimer = 90;
var interval = setInterval(function(){
  document.getElementById('my-timer').innerHTML=myTimer;
  myTimer--;
  if (myTimer === 0){
    clearInterval(interval);
    document.getElementById('my-timer').innerHTML='Done';
    // or...
    handleEndGame();
    
  }
}, 1000);

 window.alert('You will be timed, click ok to start.');

 const questions = [
    {
        question: "What are libraries?",
        optionA: "A book store",
        optionB: "Good place to study",
        optionC: "Math.random",
        optionD: "A method called by appending the library name",
        correctOption: "optionD"
    },

    {
        question: "What data type is Numbers",
        optionA: "Math",
        optionB: "Primitive",
        optionC: "0",
        optionD: "Number type",
        correctOption: "optionB"
    },

    {
        question: "What is a boolean?",
        optionA: "soup",
        optionB: "I type of number",
        optionC: "a true statement but not false",
        optionD: "Non of these answers",
        correctOption: "optionD"
    },

    {
        question: "What does Math.floor() function do?",
        optionA: "Logs in math into the console",
        optionB: "Nothing",
        optionC: "Returns largest integer less than or equal to given number.",
        optionD: "Does a basic math equation",
        correctOption: "optionC"
    },

    {
        question: "Single Line Comments are_____",
        optionA: "Are created with two consecutive backward slashes.",
        optionB: "Are Created with an astrix and a forward slash.",
        optionC: "Are created with a forward slash and an astrix after.",
        optionD: "Are created with two consecutive forward slashes.",
        correctOption: "optionD"
    },

    {
        question: "Which on of these is not an arithmetic operator?",
        optionA: "=",
        optionB: "*",
        optionC: "%",
        optionD: "/",
        correctOption: "optionA"
    },

    {
        question: "Which on is the multiplication assignment operator?",
        optionA: "&=",
        optionB: "/=",
        optionC: "*=",
        optionD: "+=",
        correctOption: "optionC"
    },

    {
        question: "What is Undefined?",
        optionA: "Variables that has not initialized a value",
        optionB: "0",
        optionC: "Null",
        optionD: "A typo",
        correctOption: "optionA"
    },

    {
        question: "What does JSON stand for?",
        optionA: "Java Set Object Notation",
        optionB: "Javascript Object Number",
        optionC: "Jira Script Object Nouce",
        optionD: "Javascript Object Notation",
        correctOption: "optionD"
    },

    {
        question: "To figure out how many items there are in an Array, I should use:",
        optionA: "Length()",
        optionB: "Count()",
        optionC: "Size",
        optionD: "Length",
        correctOption: "optionD"
    },

    {
        question: "Which of the following is true about JavaScript primitives?",
        optionA: "They are mutable.",
        optionB: "There are 5 primitive data types.",
        optionC: "They are immutable.",
        optionD: "They have built in methods.",
        correctOption: "optionC"
    },

    {
        question: "How many primitive data types are there?",
        optionA: "7",
        optionB: "8",
        optionC: "5",
        optionD: "4",
        correctOption: "optionA"
    },


    {
        question: "What can be used to store and operate large integers even beyond the safe integer limit for Numbers?",
        optionA: "LargeInts",
        optionB: "BigInts",
        optionC: "SuperInts",
        optionD: "BigNum",
        correctOption: "optionB"
    },

    {
        question: "What does the callback function finally provide when the Promise is settled?",
        optionA: "A way to be run wether the promise was fulfilled successfully or rejected.",
        optionB: "A way to be run before the promises finish.",
        optionC: "A way to code to be run if the promises are successful.",
        optionD: "Non of these answers",
        correctOption: "optionA"
    },

    {
        question: "A you paying attention?",
        optionA: "YES",
        optionB: "NO",
        optionC: "Kinda",
        optionD: "Maybe",
        correctOption: "optionA"
    },

    {
        question: "What does function hoisting work with?",
        optionA: "function expressions",
        optionB: "function declarations",
        optionC: "both",
        optionD: "neither",
        correctOption: "optionB"
    },

]

//empty array to hold shuffled question from question pool.

let shuffledQuestions = [] 

//Function handles randomizing 5 
function handleQuestions() { 
    
    
    // App has 5 questions per session
    while (shuffledQuestions.length <= 4) {
    const random = questions[Math.floor(Math.random() * questions.length)]
        
        if (!shuffledQuestions.includes(random)) {
        shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question


// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;
    

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 400)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            myTimer = myTimer - 20
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 400)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 4) {
//displays next question as long as index number isn't greater than 4, remember index number starts from 0, so index 4 is question 5
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 4 meaning we're already at the 4th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore === 0) {
        remark = "Try again loser"
        remarkColor = "red"
    }
    else if (playerScore <= 2) {
        remark = "Get back to work 🤡"
        remarkColor = "red"
    }
    else if (playerScore >= 3 && playerScore < 4) {
        remark = "Not good but not bad ether 👀"
        remarkColor = "orange"
    }
    else if (playerScore >= 5) {
        remark = "Same some for the rest of us pal.😎"
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"
    //document.getElementById("enter-initials").innerHTML = initials
    //localStorage.getItem("initials")
}
var initials 
//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    console.log(document.getElementById("enter-initials").value)
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
    //location.reload()
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}