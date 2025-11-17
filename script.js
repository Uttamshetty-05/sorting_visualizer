let barsContainer = document.getElementById("bars");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Create bars from user input
function createBars() {
    barsContainer.innerHTML = "";

    let input = document.getElementById("userInput").value.trim();
    if (input === "") return alert("Please enter numbers");

    let numbers = input.split(" ").map(Number);

    numbers.forEach(num => {
        let bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = (num * 4) + "px"; // scale height
        bar.innerText = num; // show number on bar
        barsContainer.appendChild(bar);
    });
}

// Swap values AND numbers
function swap(bar1, bar2) {
    let tempHeight = bar1.style.height;
    bar1.style.height = bar2.style.height;
    bar2.style.height = tempHeight;

    let tempText = bar1.innerText;
    bar1.innerText = bar2.innerText;
    bar2.innerText = tempText;
}

/////////////////////////////////////////////////
// 1️⃣ BUBBLE SORT
/////////////////////////////////////////////////
async function bubbleSort() {
    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length - 1; i++) {
        for (let j = 0; j < bars.length - i - 1; j++) {

            let h1 = parseInt(bars[j].innerText);
            let h2 = parseInt(bars[j + 1].innerText);

            if (h1 > h2) {
                swap(bars[j], bars[j + 1]);
            }

            await sleep(600); // slower animation
        }
    }
}

/////////////////////////////////////////////////
// 2️⃣ SELECTION SORT
/////////////////////////////////////////////////
async function selectionSort() {
    let bars = document.querySelectorAll(".bar");

    for (let i = 0; i < bars.length; i++) {
        let minIdx = i;

        for (let j = i + 1; j < bars.length; j++) {
            if (parseInt(bars[j].innerText) < parseInt(bars[minIdx].innerText)) {
                minIdx = j;
            }

            await sleep(600);
        }

        swap(bars[i], bars[minIdx]);
        await sleep(600);
    }
}

/////////////////////////////////////////////////
// 3️⃣ INSERTION SORT
/////////////////////////////////////////////////
async function insertionSort() {
    let bars = document.querySelectorAll(".bar");

    for (let i = 1; i < bars.length; i++) {
        let key = parseInt(bars[i].innerText);
        let keyHeight = bars[i].style.height;

        let j = i - 1;

        while (j >= 0 && parseInt(bars[j].innerText) > key) {
            bars[j + 1].style.height = bars[j].style.height;
            bars[j + 1].innerText = bars[j].innerText;
            j--;

            await sleep(600);
        }

        bars[j + 1].style.height = keyHeight;
        bars[j + 1].innerText = key;
    }
}
