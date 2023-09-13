let randomNum = parseInt(Math.random() * 100 + 1)
console.log(randomNum)
const submit_btn = document.querySelector("#submit_btn");
const user_input = document.querySelector("#user_input");
const guesses = document.querySelector("#guesses");
const last_result = document.querySelector("#last_result");
let lowOrHi = document.querySelector("#lowOrHi");
const result_area = document.querySelector("#result_area");

const div = document.createElement('div')

let prevGuess = []
let numGuess = 2

let playGame = true

last_result.innerHTML = 10

if(playGame){
    submit_btn.addEventListener('click', (e)=>{
        e.preventDefault()
        const guess = parseInt(user_input.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('enter a vaild number!')
    }else if(guess < 1) {
        alert('please enter a number more than 1!')
    }else if(guess > 100){
        alert('please enter a number less than 100!')
    } else{
        prevGuess.push(guess)
        if(numGuess > 10){
            displayGuess(guess)
            if(guess === randomNum){
                displayMsg(`Hurray!!!, you guessed the Number! <br/> number was <u>${randomNum}</u>`)
                endGame()
            }else{
                displayMsg(`Game Over!, Random number was <u>${randomNum}</u>`)
                endGame()
            }
            }else{
                displayGuess(guess)
                checkGuess(guess)
            }
    }   
}

function checkGuess(guess) {
    if(guess === randomNum){
        displayMsg(`Hurray!!!, you guessed the Number! <br/> number was <u>${randomNum}</u>`)
        endGame()
    }
    if(guess < randomNum) displayMsg('Number is too low!')
    if(guess > randomNum) displayMsg('Number is too high!')
}

function displayGuess(guess){
    user_input.value = ''
    guesses.innerHTML += `${guess}, `
    numGuess++
    last_result.innerHTML = `${12 - numGuess}`
}

function displayMsg(msg) {
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    user_input.value = ''
    user_input.setAttribute('disabled','')
    submit_btn.setAttribute('disabled','')
    div.classList.add('button')
    div.innerHTML = `<h2 id="newGame">New Game?</h2>`
    result_area.appendChild(div)
    playGame = false
    newGame()
}
 
function newGame(){
    const newGameBtn = document.querySelector("#newGame");
    newGameBtn.addEventListener('click',()=>{

        randomNum = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 2
        guesses.innerHTML = ''
        lowOrHi.innerHTML = ''
        last_result.innerHTML = `${12 - numGuess}`
        user_input.removeAttribute('disabled')
        submit_btn.removeAttribute('disabled')
        result_area.removeChild(div)

        playGame = true
    })
}