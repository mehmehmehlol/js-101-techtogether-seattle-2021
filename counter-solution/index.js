let count = 10
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// Advanced
let countArr = []

// const decrementBtn = document.getElementById("decrement-btn");

function decrement() {
    if (count === 0) {
        alert("We sold out all Christmas trees! Please come back next year!")
    } else {
        count -= 1
        countEl.textContent = count
    }
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    countArr.push(count);
    for (let i = 0; i < count.length; i++) {

    }
    
    let countStr = count + " - "
    saveEl.innerText += countStr
    countEl.textContent = count
}

console.log(`We got ${count} Christmas trees left!`)
