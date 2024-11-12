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
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert('You clicked ${gameType}');
            }
        })
    }
})
/**
 * Tha main game called when the script is first loades
 * and after the user answer has been processed 
 */

function runGame() {
    // Create two random numbers between 1 and 25
 let num1 = Math.floor (Math.random() *25) +1 ;
 let num1 = Math.floor (Math.random() *25) +1 ;
}



function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQeustion() {

}

function displaySubtractQeustion() {

}

function displayMultiplyQeustion() {

}