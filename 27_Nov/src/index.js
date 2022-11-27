import inquirer from "inquirer";
console.clear();
// welcom the user
// aask for number and opration
// chek the number are valid
// compute ans and show the result
//  tri again
// installation of npm
// npm i inquirer
// npm i -D@types/inquirer
function welcome(msg) {
    console.log(msg);
}
function validateNumber(input) {
    if (isNaN(input)) {
        return "this is not a valid number ";
    }
    else {
        return true;
    }
}
async function getInput() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "firstNumber",
            message: "enter your  first number",
            validate: validateNumber,
        },
        {
            type: "list",
            name: "operation",
            message: "select your operation",
            choices: ["+", "*", "/", "%", "^"],
        },
        {
            type: "input",
            name: "secondNumber",
            message: "enter your second number",
            validate: validateNumber,
        },
    ]);
    console.log(answer);
    const firstNumber = Number(answer.firstNumber);
    const secondNumber = Number(answer.secondNumber);
    switch (answer.operation) {
        case "+":
            return console.log(`your answer ${firstNumber + secondNumber} `);
        case "*":
            return console.log(`your answer ${firstNumber * secondNumber} `);
        case "-":
            return console.log(`your answer ${firstNumber - secondNumber} `);
        case "%":
            return console.log(`your answer ${firstNumber % secondNumber} `);
        case "/":
            return console.log(`your answer ${firstNumber / secondNumber} `);
        default:
    }
}
welcome("welcome to the best calculator");
getInput();
