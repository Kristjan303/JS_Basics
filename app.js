/*
if(condition) {
    //if statements
} else{
    // else statements
}

== equal ===
!= not equal !==



 */

// let person_id = 34;
//
// if(person_id === "undefined"){
//     console.log("id pähh pähh")
// } else{
//     console.log(`id is $(person_id)`)
// }

/*
if(condition) {
    //if statements
} else{
    // else statements
}


 */


// const color = "red"
//
// if(color === "red") {
//     console.log("go")
//
// }else if (color === "yellow") {
//     console.log("stop")
// } else {
//     console.log("noob")
// }
//
// console.log(person_id)


const name = "laps"
const age = 40

if(age > 0 && age <= 12){
    console.log("laps")
}else if(age > 12 && age < 18){
    console.log("teen")
}else{
    console.log("ok")
}

let id = 5
if(id === 100){
    console.log("OK")
}else{
    console.log("not")
}

console.log(id === 100 ? "ok" : "not")

//switch
const color = "yellow"

switch (color) {
    case "red":
        console.log("stop")
        break;
    case " yellow":
        console.log("Attention")
        break;
    default:
        console.log("whatever")
}
