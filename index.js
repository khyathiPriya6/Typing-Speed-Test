let speedTypingTest = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let spinner = document.getElementById("spinner");
spinner.classList.add("d-none");

timer.textContent = 0 + " Seconds";

let data;
let timerdispaly;

let time = 0;

function fetchingRandomQuote() {
    let option = {
        method: "GET",
    };
    fetch("https://apis.ccbp.in/random-quote", option)
        .then(function(response) {
            return response.json();
        }).then(function(jsonData) {
            data = jsonData.content;
            quoteDisplay.textContent = jsonData.content;
        });
}

function whenpageisopened() {

   let time = 0;
    timerdispaly = setInterval(function() {
        time += 1;
        timer.textContent = time + " Seconds";
    }, 1000);

    fetchingRandomQuote();

}

function submitbtnisClicked() {
    clearInterval(timerdispaly);
    if (quoteInput.value === "" || quoteInput.value !== data) {
        result.textContent = "You typed Incorrect sentence";
    } else {
        result.textContent = "You typed in " + time + "seconds";
    }

    clearInterval(timerdispaly);
}

function resetBtnisClicked() {
    spinner.classList.remove("d-none");
    spinner.classList.add("d-none");
    whenpageisopened();

}

submitBtn.addEventListener("click", submitbtnisClicked);
resetBtn.addEventListener("click", resetBtnisClicked);

whenpageisopened();
