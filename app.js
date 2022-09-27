let val;

val = document.getElementById(`task`)
val = document.getElementById(`task`).id
val = document.getElementById(`task`).className

const taskTitle = document.getElementById(`task-title`)

//stiil
taskTitle.style.background = `#9d4e4e`
taskTitle.style.color = `#2dd708`
taskTitle.style.padding = `20px`
//taskTitle.style.display = `none`


//content
taskTitle.textContent = "Defined tasks"
taskTitle.innerText = "My favorite tasks"
taskTitle.innerHTML = `<b style="color: blue">My Tasks</b>`



val = document.querySelector(`#task-title`)
val = document.querySelector(`.card-title`)
val = document.querySelector(`ul`)

val = document.querySelector(`li`)
//
// const  task = document.querySelector(`li`)
// task.style.color = `green`

// val = document.querySelector(`il:nth-child(odd)`).style.background = "#ccc"

//multible elements

val = document.querySelectorAll(`li`)
oddLi = document.querySelectorAll(`li:nth-child(odd)`)

oddLi.forEach((Li) =>{
    Li.style.background = "#333"
})

console.log(val)