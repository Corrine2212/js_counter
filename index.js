// document.getElementById("count-el").innerText = 5;

// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

// ln below is the model of the real thing
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
console.log(countEl);

let count = 0;

function increment() {
    count++;
    console.log(count);
    countEl.textContent = count;
    // document.getElementById('count-el').innerText = count;
}

function save() {
    let loggedEntries = ` ${count} /`
    // console.log("saved");
    console.log(loggedEntries);
    saveEl.textContent += loggedEntries;
    console.log(count);
    countEl.textContent = 0
    count = 0;
}

function clearLog() {
    saveEl.textContent = ' ';
}