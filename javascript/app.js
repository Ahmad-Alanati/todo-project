var userName = prompt("please enter you name: ");
var userGender = prompt("please enter you gender: ");
var userAge = 0;
while (userAge <= 0) {
    userAge = prompt("please enter you age: ");
    userAge <= 0 ? alert("your age can't be less then 1") : null;
}
var welcomingOrNot = confirm("do you want a welcoming massage?");
var welcomingMessage = "welcome to my website ";
welcomingMessage += (userGender === "male") ? "Mr." : userGender === "female" ? "Ms." : "";
welcomingMessage += userName;
(welcomingOrNot) ? alert(welcomingMessage) : null;
