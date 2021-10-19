'use strict'

let btn = document.getElementById('btn')
let inputText = document.querySelector('input[type=text')
let square = document.getElementById('square')
let inputVal
let eBtn = document.getElementById('e_btn')
let inputRange = document.querySelector('input[type=range]')
let rangeSpan = document.getElementById('range-span')


function isNumber (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

inputText.addEventListener('input', function(){
    inputVal = inputText.value
})


btn.addEventListener('click', function(){
    if(!isNumber(inputVal)){
    square.style.backgroundColor = inputVal
    } else {
        inputText.value = 'Введите название цвета на англ'
    }
})


eBtn.style.display = 'none'

inputRange.addEventListener('input', function(e){
    rangeSpan.textContent = e.target.value
    square.style.height = e.target.value + '%'
    square.style.width = e.target.value + '%'
})

console.log(inputRange)



