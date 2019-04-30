// 1. 함수 선언식
let result = add(1, 3) // hoisting 가능
function add(num1, num2) {
    return num1 + num2
}
console.log(result)

// 2. 함수 표현식
let add2 = function add3(num1, num2) {
    return num1 + num2
}
console.log(add2(1, 3))
// console.log(add3(1, 3)) // Uncaught ReferenceError: add3 is not defined
// 함수 표현식 기본 (권장) : 익명함수 사용
let add4 = function (num1, num2) {
    return num1 + num2
}
console.log(add4(1, 3))
// 함수 선언식을 써도 javascript는 실제로 이렇게 받아감

// 3. ES6+ Arrow Function
let sub = (num1, num2) => {return num1-num2}

// 인자가 하나인 경우, () 생략 가능
// 단순 리턴인 경우, {} 및 리턴 키워드 생략 가능
let greeting = name => `Welcome, ${name}.`
console.log(greeting('Chen'))

let mul = (num1, num2) => num1 * num2
console.log(mul(1, 4))

// 인자가 없는 경우 () 작성
let hello = () => 'Hello, World!'
console.log(hello())

// object return : return값을 반드시 ()로 묶어서 표현
let me = (name, age) => ({name, age})
console.log(me('Chen', 27))

// 연습
const negative = num => -1*num
const gutenTag = () => 'Guten Tag'
const vietnam = member => {
    let member_base = '민지'
    return `${member_base}와 ${member}(이)가 베트남에 가요.`
}

// 만약, default args (기본인자) 를 넣어주고 싶다면
let bonjour = (name='Xiumin') => `${name}, bonjour.`

// 4. 익명 함수
(function (num) {return num*num})
(num => num*num)

// 5. 즉시 실행 함수 (익명함수 + 호출) - IIFE (Immediately Invoked Function Expression)
(function (num) {return num*num})(5)
(num => num*num)(5)
// 초기화 시 많이 사용함