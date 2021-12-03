let count = 10
let countEl = document.getElementById("count-el");

const decrementBtn = document.getElementById("decrement-btn");

function decrement() {
    if (count === 0) {
        alert("We sold out all Christmas trees! Please come back next year!")
    } else {
        count -= 1
        countEl.textContent = count
    }
}

console.log(`We got ${count} Christmas trees left!`)
