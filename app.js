/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const reset = document.querySelector('.reset')
/*-------------------------------- Variables --------------------------------*/
let display = document.querySelector('.display')
let num1, num2, ans, operator, equalClicked = false
/*------------------------ Cached Element References ------------------------*/
console.log(numbers)
console.log(operators)
console.log(equals)
console.log(display)
console.log(reset)
/*----------------------------- Event Listeners -----------------------------*/
reset.addEventListener('click', CClick)
equals.addEventListener('click', equalClick)

/*-------------------------------- Functions --------------------------------*/

numbers.forEach(
    function (num) {
        num.addEventListener('click',
            function (numEvent) {
                if (display.textContent === '+' || display.textContent === '-' ||
                    display.textContent === '*' || display.textContent === '/' ||
                    display.textContent === 'Error' || equalClicked) {
                    display.textContent = ''
                    equalClicked = false
                }
                display.textContent += numEvent.target.textContent
                if (!operator) {
                    num2 = undefined
                    num1 = Number(display.textContent)
                    console.log('Num1 = ' + num1)
                }
                else if (operator) {
                    num2 = Number(display.textContent)
                    console.log('Num2 = ' + num2)
                }
            }
        )
    }
)

operators.forEach(
    function (opSelected) {
        opSelected.addEventListener('click',
            function (OpEvent) {
                if (!num2) {
                    display.textContent = OpEvent.target.textContent
                    operator = display.textContent
                    console.log('Operator = ' + operator)
                }
            }
        )
    }
)

function CClick() {
    num1 = undefined
    num2 = undefined
    ans = undefined
    operator = undefined
    equalClicked = false
    display.textContent = ''
    console.log('Resetted')
}
function equalClick() {
    equalClicked = true
    if (num1 && num2 && operator) {
        if (operator === '+') {
            ans = num1 + num2
            display.textContent = ans
        }
        else if (operator === '-') {
            ans = num1 - num2
            display.textContent = ans
        }
        else if (operator === '*') {
            ans = num1 * num2
            display.textContent = ans
        }
        else if (operator === '/') {
            ans = num1 / num2
            display.textContent = ans
        }
    }
    else
        display.textContent = 'Error'

    console.log(ans)
    operator = undefined
}