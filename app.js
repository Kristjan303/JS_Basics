const today = new Date()

let val

val = today
val = today.getMonth() // 0 = jaanuar
val = today.getDay()
val = today.getDate()
val = today.getFullYear()
val = today.getHours()
val = today.getSeconds()
val = today.getTime()

val = new Date("09/22/21")
val = new Date("September 23 2022")

val = new Date()
val.setDate(23)
val.setFullYear(2023)

console.log(val)