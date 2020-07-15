let user = prompt("Enter your name, please:", );


let instructions = alert(" Hello There Young Padwan, Welcome to my Game ! A Random (R)ed (G)reen (B)lue -  RGB Colour will appear on the top! You Young Grasshopper must use your Best Judgement to Guess the Correct Colour Square out of the set until you guess the right one !  Your Aim is to guess the Right Colour Square Below out of the set choice. You have 30 Seconds! on the clock. Good Luck!!!!");
let num = prompt('How many squares do you dare to try?')
let colors = generateRandomColors(num);
// let myfunc = setInterval(function () {
//     // code goes here
// }, 1000);




document.querySelector('#container').innerHTML = '<div class="square"></div>'.repeat(num)
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
let resetButton = document.querySelector("#reset")


resetButton.addEventListener("click", function () {
    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#232323";
})

for (let i = 0; i < squares.length; i++) {
    //add event colours to squares ( 6 divs )
    squares[i].style.backgroundColor = colors[i];

    // add event listeners to squares 
    squares[i].addEventListener('click', function () {
        // alert("clicked a square for testing ");
        let clickedColor = this.style.backgroundColor;
        // trying to use logic to pick correct colour to shown colour 
        // need to use if else 
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Are You Michael Angelo ?! ";
            resetButton.textContent = "Play again ?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again Young Padwan";
        }
    });
}

function changeColors(color) {
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = []
    //add num random colorus to array 
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}



function randomColor() {
    //pick a "red" from 0 - 255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    let b = Math.floor(Math.random() * 256);
    // had to debug it here cause of the pickedcolor vs random color dom issue
    return "rgb(" + r + ", " + g + ", " + b + ")";
}




// timer()
// function timer() {
//     let sec = 30;
//     let timer = setInterval(function () {
//         document.getElementById('safeTimerDisplay').innerHTML = '00:' + sec;
//         sec--;
//         if (sec < 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// } */}

// or 

let myVar = setInterval(function () {
    myTimer()
}, 1000);
let secondlimit = 30;

function myTimer() {
    if (secondlimit == 0) {
        myStopFunction();
    }

    document.getElementById("safeTimerDisplay").innerHTML = '00:' + zeroPad(secondlimit, 2);
    secondlimit = secondlimit - 1;

}

function myStopFunction() {
    clearInterval(myVar);
    alert("Gameover!")
}

function zeroPad(num, places) {
    let zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}