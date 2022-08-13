let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment(){
    count++
    console.log(count)
    countEl.textContent = count
}

function save(){
    let savedNum = count + " - "
    saveEl.textContent += savedNum
    count = 0
    countEl.textContent = count
}
