//firt project made by myself with JavaScript
//Evandro Magalhães Ferreira Chagas. Santa Catarina, Brasil.
//Date 05/11/2024
//there is too much to learn


const result = document.querySelector(".output")
const operatorButtons = document.querySelectorAll(".operators")
const numberButtons =  document.querySelectorAll(".button_number")
const spans = result.getElementsByTagName('span');

var firstNumber = ""
var secondNumber = ""
var operatorActive = "false" 
var number1
var number2



const typeNumber = (event) => 
{
     const number = event.target.value
     
    if(operatorActive == "false")
        {   

     if(firstNumber == "" && number == 0)
        {
        
        return
        
        }else if(firstNumber == "")
            {
                spans[0].innerHTML = " "                             
            }
           
            firstNumber = number
            spans[0].innerHTML += firstNumber

        }else if(operatorActive == "true")
        {
             number1 = spans[0].innerHTML
            if(secondNumber == "" && number1 == 0)
                {
                
                return
                
                }
                    secondNumber = number
                    spans[2].innerHTML += secondNumber
                     number2 = spans[2].innerHTML
                    console.log(number1 + " " + " " +number2)
                    
       }
}

const clear = () => {

    spans[0].innerHTML = 0
    spans[1].innerHTML = ""
    spans[2].innerHTML = ""
    firstNumber = ""
    secondNumber = ""
    operatorActive = "false"
}

const equal = () => {
    let operator = spans[1].innerHTML

    if(number1 != "" && number2 != "" && operatorActive == "true") 
     {

         if(operator =="+") {spans[0].innerHTML = +number1 + +number2}
    else if(operator =="-") {spans[0].innerHTML = +number1 - +number2}
    else if(operator =="*") {spans[0].innerHTML = +number1 * +number2}
    else if(operator =="/") {spans[0].innerHTML = +number1 / +number2}

    spans[1].innerHTML = ""
    spans[2].innerHTML = ""
     }

}

const typeOperator = (event) => {
    const operator = event.target.value
    
    if(firstNumber != "" && operatorActive == "false")
    {

         if(operator =="+") {spans[1].innerHTML += "+" }
    else if(operator =="-") {spans[1].innerHTML += "-" }
    else if(operator =="*") {spans[1].innerHTML += "*" }
    else if(operator =="/") {spans[1].innerHTML += "/" }
     operatorActive = "true"
    }else if(operator =="="){equal()}
     else if(operator =="cr") {clear()}
}

numberButtons.forEach(buttonNumber => {buttonNumber.addEventListener("mousedown", typeNumber)})
operatorButtons.forEach(buttonOperator => {buttonOperator.addEventListener("mousedown", typeOperator)})

    




