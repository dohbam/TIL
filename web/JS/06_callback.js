// 연습) 배열을 받아 다 더해주는 함수
const numberAddEach = numbers => {
    let result = 0
    for (const number of numbers){
        result += number
    }
    return result
}
console.log(numberAddEach([1, 2, 3]))
// 연습) 빼기
const numberSubEach = numbers => {
    let result = 0
    for (const number of numbers){
        result -= number
    }
    return result
}
console.log(numberSubEach([1, 2, 3]))
// 연습) 곱하기
const numberMulEach = numbers => {
    let result = 1
    for (const number of numbers){
        result *= number
    }
    return result
}
console.log(numberMulEach([1, 2, 3]))
// callback
const numberEach = (numbers, calc) => {
    let result
    for (const number of numbers) {
        result = calc(number, result)
    }
    return result
}

const addEach = (number, result=0) => result + number
const subEach = (number, result=0) => result - number
const mulEach = (number, result=1) => result * number

console.log(numberEach([1, 2, 3], addEach))
console.log(numberEach([1, 2, 3], subEach))
console.log(numberEach([1, 2, 3], mulEach))

// 실제로는 이런 식으로 작성 (함수 안에 익명 함수 콜백)
console.log(numberEach([1, 2, 3], (number, result=0) => result + number))
console.log(numberEach([1, 2, 3], function(number, result=0) {
    return result + number
}))

// 대표적인 콜백 함수
let foods = ['pasta', 'pizza', 'rice']
foods.forEach(function(food){
    console.log(food)
})
// foods.forEach(food => console.log(food))



// Workshop35
const concat = (str1, str2) => `${str1} - ${str2}`
// const checkLongStr = string => {
//     if (string.length > 10) {
//         return true
//     } else {
//         return false
//     }
// }
const checkLongStr = string => string.length > 10

// if (checkLongStr(concat('Happy', 'Hacking'))) {
//     console.log('LONG STRING')
// }
// else {
//     console.log('SHORT STRING')
// }
checkLongStr(concat('Happy', 'Hacking'))? console.log('LONG STRING'):console.lob('SHORT STRING')