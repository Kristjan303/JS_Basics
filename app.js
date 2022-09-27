const li = document.createElement(`Li`)

li.className = `collection-item`
const text = document.createTextNode(`Study element creation`)
li.appendChild(text)

const a = document.createElement(`a`)
a.className = `blue-text text-darken-2 secondary content`
const text = document.createTextNode(`x`)
a.appendChild(text)
a.setAttribute(`href`, `a`)

li.appendChild(a)

const li
list.appendChild(li)

console.log(li)