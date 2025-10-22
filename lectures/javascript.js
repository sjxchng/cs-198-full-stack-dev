// console log output
console.log("Hello, JavaScript!");
const message = "Hi there!";
console.log(message);

// click counter
let count = 0;
const clickBtn = document.getElementById("clickBtn");
const countDisplay = document.getElementById("count");
clickBtn.addEventListener("click", () => {
    count++;
    countDisplay.textContent = count;
}