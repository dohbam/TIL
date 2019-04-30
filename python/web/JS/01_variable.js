// alert('Hello, JavaScript!')
/* console.log('Hi!')
console.log('Bye~!')
*/
document.write('<h1>EXO</h1>')

// 변수 hoisting
// JavaScript에서 모든 선언문(변수, 함수 등)은 hoinsting 된다.
// 변수는 1) 선언단계 2) 초기화 단계(undifined) 3) 할당 단계를 거친다.
console.log(name) // undefined
var name = '경수'
console.log(phoneNumber) // phoneNumber is not defined error(Reference Error)

// let, const 키워드 (ES6+)
var a = 3
console.log(a)
var a = 5
console.log(a) // 에러가 발생하지 않음

let b = 5
let b = 3 // 에러 발생

for (var i = 0; i < 3; i++) {
    console.log(i)
}
console.log('===============')
console.log(i) // 3

for (let j = 0; j < 3; j++) {
    console.log(j)
}
console.log('===============')
console.log(j) // 에러 발생: j is not defined