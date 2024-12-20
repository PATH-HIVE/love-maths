// Wait for the DOM to finish loading before running the game
// Get the buttons elements and add event listners to them
// ensure that JavaScript code runs only after the entire HTML
//  document has been fully loaded and parsed by the browser.

document.addEventListener("DOMContentLoaded", function () {
    // The following line is JavaScript statement that
    //  selects all <button> elements in the HTML document 
    // and assigns them to the variable buttons
    let buttons = document.getElementsByTagName("button");
    // for (let i = 0; i < buttons.length; i++)
    // Add an event listener to each button in a collection of
    //  buttons for the click event 
    // When the button is clicked, the code inside function() 
    // { ... } will execute.
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        });
    }

    document.getElementById("answer-box").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    });



    runGame("addition");
});
/**
 * Tha main game called when the script is first loades
 * and after the user answer has been processed 
 */

function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();
    // Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQeustion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQeustion(num1, num2);
    }
    else if (gameType === "subtract") {
        displaySubtractQeustion(num1, num2);

    }
    else if (gameType === "division") {
        displayDivisionQeustion(num1, num2);

    }

    else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }


}

/**
 * Check the answer against the first element in
 * the returned calculateCorrect Answer array
 */

function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {

        alert("Hey! You get it right: D");
        incrementScore();
    } else {
        alert(`Aww .. you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();
        // Make sure you use `` as a backtick and not ''
        // alert('Awwww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!');
    }
    runGame(calculatedAnswer[1]);
}

/** Gets the operands (the numbers) and the operator (plus, minus, etc.) directly
 * from the dom and display the correct answer
 */

function calculateCorrectAnswer() {

    // go to the html document and find the element with 
    // the id operand1 "document.getElementById"
    // get the text inside that element "innerText"
    // convert the text to integer "parseInt"
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    }
    else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    }
    else if (operator === "/") {
        // return [operand1 / operand2, "division"];
        return [Math.floor(operand1 / operand2), "division"]; //Ensures the result is rounded down to the nearest whole number.
    }

    else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}.Aborting!`;
    }

}
/**
 * Get the current score from the DOM and increment it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("scores").innerText);
    document.getElementById("scores").innerText = oldScore + 1;



}
/**
 * Gets the current tally of incorrect answers from the DOM and increment it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQeustion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQeustion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayDivisionQeustion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "/";
}
function displayMultiplyQeustion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}
