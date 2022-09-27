let val;

const list = document.querySelector(`ul`)
const listitem = document.querySelector(`li`)

val = list
val = list.childNodes
val = list.childNodes[0]
val = list.childNodes[0].nodeName
val = list.childNodes[1].nodeType

val = list.children
val = list.children[1].children

val = list.firstChild
val = list.firstElementChild

val = list.lastElementChild
val = list.childElementCount

val = listitem.parentNode
val = listitem.parentElement

val = listitem.nextSibling
val = listitem.nextElementSibling
val = listitem.nextElementSibling.previousElementSibling

console.log(val)