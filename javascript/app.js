let userName;
let userGender;
let userAge = 0;
let welcomingOrNot;
const questionArray = ["have you used any todo apps before? ", "would you like to start the tutorial? ", "are you familiar with best practices for a todo list? "];
let answeredArray = [];

function userInput() {
    userName = prompt("please enter you name: ");
    userGender = prompt("please enter you gender: ");
    userAge = ageCheck(prompt("please enter you age: "));
    welcomingOrNot = confirm("do you want a welcoming massage?");
    userAnsweredQuestions(0);
}

function ageCheck(age) {
    if (age < 1) {
        alert("your age can't be less then 1");
        ageCheck(prompt("please enter you age again: "));
    }
    else {
        return age;
    }
}

function generateWelcomingMessage() {
    if (welcomingOrNot == true) {
        let welcomingMessage = "welcome to my website ";
        welcomingMessage += (userGender === "male") ? "Mr." : userGender === "female" ? "Ms." : "";
        welcomingMessage += userName;
        alert(welcomingMessage)
    }
}

function userAnsweredQuestions(numberQuestions) {
    if (numberQuestions < 3) {
        answeredArray.push(prompt(questionArray[numberQuestions]));
        answeredArray[numberQuestions] == null ? answeredArray[numberQuestions] = "invalid" : null;
        userAnsweredQuestions(numberQuestions + 1);
    }
}

function printInConsole(){
    for(let count=0;count<answeredArray.length;count++){
        console.log(`${count+1}- ${answeredArray[count]}`);
    }
}

userInput();
printInConsole();
welcomingOrNot ? generateWelcomingMessage() : null;
