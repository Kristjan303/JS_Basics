console.log("for loop")
for (let number = 0; number < 10; number++) {
    console.log(number)
}

//continue
//break

console.log("While loop")

let number1 = 0 ;
while (number1 < 10){
    console.log(number1)
    number1++
}

console.log("do-while loop")
let number2 = 11
do{
    console.log(number2)
    number2++
}while (number2 < 10)

const cars  = ["audi", "tesla", "BMW"]
cars.forEach((car) => {
    console.log(car)
})

const person = {
    firstname: "kristjan",
    surname: "puusepp",
    age: "80"
}

for (let personKey in person) {
    console.log(person[personKey])
}


