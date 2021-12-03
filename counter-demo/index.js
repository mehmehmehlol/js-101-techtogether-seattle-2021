let count = 100
let countEl = document.getElementById("count-el")

function decrement() {
    count -= 1
    countEl.textContent = count
}

console.log(`We got ${count} Christmas trees left!`)
