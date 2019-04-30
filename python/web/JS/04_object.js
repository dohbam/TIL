// javascript data type
// 1. 원시 타입 (primitive type)
// Boolean(true, false), null, undefined, number, string
// 2. 그 외 - 모두 object

// javascript object 표기법
let chen = {
    name: 'chen',
    age: 27,
    number: '010-0921-0408'
}
console.log(chen.name)
console.log(chen.age)
console.log(typeof chen) // object
console.log(typeof [1, 2, 3]) // object

// ES6+
// 변수를 그대로 넣으면, '변수명: 값'으로 만들어준다.
let name = 'baekhyun'
let gifts = ['light', 'voice', 'dance', 'smile']
let baekhyun = {
    name, gifts
}
// json <-> object
let jsonData = JSON.stringify(baekhyun)
let jsonParse = JSON.parse(jsonData)