// function greeting(){
//     // console.log(` hello, ${name}! `)
//     return `hello, ${name}!`
// }
// let greet = greeting("Krist")
//console.log(greet)
//
// const square = function(number){
//     return number * number
// }
// let result = square(5)
// console.log(result)

//immediately invokable function expression
    (function (){
        console.log(`funtion is running!`)
    })();

(function (name){
    console.log(`hello, ${name}!`)
})("Kristjan")

const todo = {
    add: function (){
        console.log("add,todo")
    },
    edit: function (){
        console.log("edit todo")
    },
    delete: function (){
        console.log("delete todo")
    }
};
