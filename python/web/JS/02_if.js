const firstName = 'Happy'
const lastName = 'Hacking'
const name = firstName + lastName
// document.write('<h1>'+ name + '</h1>')
document.write(`<h1>${name}</h1>`) // ES6+ : Template literal(템플릿 문자열)

let userName = prompt('Who are you?')
let message = `<h1>${userName}</h1>`
// document.write(message)

// JavaScript에서 === 은 python의 == 과 같은 비교 연산자이다.
// === : 일치함을 비교 (값, 타입)
// == : 동등함을 비교 (값) : 타입이 암묵적 변환
// 123 == '123' : true
// !==, !=

if (userName === 'Chen') {
    message = `<h1>4월이 지나도 헤어지지 말아요, 우리.</h1>`
} else if (userName === '경수') {
    message = `<h1>보고싶어 ${userName}야</h1>`
} else {
    message = `<h1>${userName}, 환영합니다.</h1>`
}
document.write(message)