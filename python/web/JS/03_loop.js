// while
let i = 0
while (i < 10) {
    console.log(i)
    i ++ 
}

// for
for (let j=0; j < 10; j++) {
    console.log(j)
}

let myArray = [1, 2, 3]
for (let k=0; k<10; k++) {
    console.log(myArray[k])
}
// for of : 배열 반복문
// 재할당이 없다면 const를 써도 됨
for (let k of myArray) {
    console.log(k)
}