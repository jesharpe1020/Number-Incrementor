const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const numReadOut = document.getElementById("numReadOut");
const secretMessage = document.getElementById("secretMessage");

let num = 0;

decreaseBtn.onclick = function () {
    num--;
    numReadOut.textContent = num;

    if (num <= 10) {
        secretMessage.style.visibility = "hidden";
    }
}
resetBtn.onclick = function () {
    num = 0;
    numReadOut.textContent = num;
    secretMessage.style.visibility = "hidden";
}
increaseBtn.onclick = function () {
    num++;
    numReadOut.textContent = num;

    if (num > 10) {
        secretMessage.style.visibility = "visible";
    }
}

