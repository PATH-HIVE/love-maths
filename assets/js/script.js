// Wait for the DOM to finish loading before running the game
// Get the buttons elements and add event listners to them

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


function runGame() {

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