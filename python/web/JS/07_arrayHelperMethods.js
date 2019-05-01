// 1. forEach
const avengers = ['Captin Marvel', 'Dr.Stranger', 'Thor', 'Hulk', 'Iron Man', 'Spider Man', 'Ant Man', 'Captain America', 'Black Widow', 'Black Panther', 'Valkiri']
avengers.forEach(avenger => console.log(avenger))
avengers.forEach(function (heroName) {
    console.log(heroName)
})
// 2. map
const numbers = [1, 2, 3]
const strNumbers = numbers.map(number => String(number))
console.log(strNumbers)
const squareNumbers = numbers.map(number => number**2)
const squareNumbers2 = numbers.map(function(number){
    return number*number
})
console.log(squareNumbers)
console.log(squareNumbers2)
const chen = [
    {'velocity': 40, 'time': 50},
    {'velocity': 100, 'time': 60},
    {'velocity': 20, 'time': 100},
]
const sample = chen.map((a) => console.log(a)) // 넘어오는 값에 'a'라는 이름을 붙여서 사용한 것.
const distances = chen.map((obj) => obj.velocity*obj.time) // forEach와는 달리 map은 반드시 '리턴'이 필요.
console.log(distances)
// 3. filter : 반복문을 돌며 true인 것만 모아준다.
const nums = [1, 2, 3, 4]
const evenNums = nums.filter(num => num%2 === 0)
const oddNums = nums.filter(num => num%2)
console.log(evenNums)
console.log(oddNums)
const drinks = [
    {type: 'caffeine', name: 'coffee'},
    {type: 'caffeine', name: 'green tea'},
    {type: 'caffeine', name: 'milk tea'},
    {type: 'juice', name: 'orange juice'},
    {type: 'juice', name: 'mango juice'},
]
const decaf = drinks.filter(drink => drink.type !== 'caffeine').map(obj => obj.name)
console.log(decaf)
// 4. reduce : (누적으로) 줄여나간다. 두 번째 인자로 초기값을 넘길 수 있다. 반복문을 돌리지 않고 원하는 결과를 구할 수 있음.
const reduceNums = [2, 5, 6]
const reduceResult = reduceNums.reduce((result, num) => result + num*10, 0) // 130
const reduceResult1 = reduceNums.reduce((result, num) => result*num) // 60
console.log(reduceResult)
console.log(reduceResult1)
// 5. find : 하나만 찾는다.
const dc = ['super man', 'bat man', 'joker']
const villain = dc.find(name => name=== 'joker')
console.log(villain)