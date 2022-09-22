//object

const person = {
    firstname: "Kristjan-Even",
    surname: "Puusepp",
    age: 17,
    email: "Kristjan.puusepp@voco.ee",
    hobbies: ["Tennis", "korvpall"],
    address: {
        city: "Tartu",
        county: "tartumaa"
    },
    getyear: function (){
        return 2022 - this.age
    }
}



let val
val = person
val = person.firstname
val = person["surname"]
val = person["hobbies"][1]
val = person.address.county

val = person.getyear()

console.log(val)

// for (let i = 0;  i <person.hobbies.length; i++){
//     console.log(person.hobbies[1])
//
// }
// person.hobbies.forEach(function (hobbies, index){
//     console.log(hobbies + " on olemas indexiga " +
//         "" + index)
//     console.log(hobbies)
// })
person.hobbies.forEach((hobbie, index) =>{
    console.log(hobbie + " on element indexiga " + index)
})