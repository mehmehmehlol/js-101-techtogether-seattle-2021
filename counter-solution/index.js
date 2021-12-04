let count = 10
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
// Advanced
let countArr = []

// for decrementing
function decrement() {
    if (count === 0) {
        alert("We sold out all Christmas trees! Please come back next year!")
    } else {
        count -= 1
        countEl.textContent = count
    }
}

// for incrementing
function increment() {
    count += 1
    countEl.textContent = count
}

// for saving the number to the array and print the array output on the screen
function save() {
    // #2b
    // let countStr = count + " - "
    // saveEl.innerText += countStr
    // countEl.textContent = count

    // Advanced #2c
    // array manipulation with the array method push()
    countArr.push(count);

    // this is a bonus thing to do. I googled how to add new line the text content
    // in case you're interested:
    // https://stackoverflow.com/questions/9980416/how-can-i-insert-new-line-carriage-returns-into-an-element-textcontent

    let p = document.createElement("p");
    // setting this css style solving problem with new line in textContent
    p.setAttribute('style', 'white-space: pre;');
    // for loops
    for (let i = 0; i < countArr.length; i++) {
        p.textContent = `Day${[i + 1]}: ${countArr[i]};\r\n`;
    }
    console.log(p)
    saveEl.textContent += p.innerHTML
}

console.log(`We got ${count} Christmas trees left!`)
