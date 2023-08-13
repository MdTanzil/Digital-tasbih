const alhamdulilladhDisplay = document.getElementById("Alhamdulillah-display");
const subhannAllahDisplay = document.getElementById("SubhanAllah-display");
const allahhuAkberDisplay = document.getElementById("Allahhuakber-display");
let alhamdulillah = 0
let subhanAllah = 0
let allahhuakber = 0
document
    .getElementById("Alhamdulillah-increment")
    .addEventListener("click", function () {
        if (alhamdulillah === 33) {
            return alert("this section fill up try next");
        }
        alhamdulillah += 1;
        alhamdulilladhDisplay.innerText = alhamdulillah;
    });
document
    .getElementById("Alhamdulillah-decrement")
    .addEventListener("click", function () {
        if (alhamdulillah <= 0) {
            return alert("Cant negative");
        }
        alhamdulillah -= 1;
        alhamdulilladhDisplay.innerText = alhamdulillah;
    });
document
    .getElementById("SubhanAllah-increment")
    .addEventListener("click", function () {
        if (subhanAllah === 33) {
            return alert("this section fill up try next");
        }
        console.log("subhan");
        subhanAllah += 1;
        subhannAllahDisplay.innerText = subhanAllah;
    });
document
    .getElementById("SubhanAllah-decrement")
    .addEventListener("click", function () {
        if (subhanAllah <= 0) {
            return alert("Cant negative");
        }
        subhanAllah -= 1;
        subhannAllahDisplay.innerText = subhanAllah;
    });
document
    .getElementById("Allahhuakber-increment")
    .addEventListener("click", function () {
        if (allahhuakber === 33) {
            return alert("this section fill up try next");
        }
        allahhuakber += 1;
        allahhuAkberDisplay.innerText = allahhuakber;
    });
document
    .getElementById("Allahhuakber-decrement")
    .addEventListener("click", function () {
        if (allahhuakber <= 0) {
            return alert("Cant negative");
        }
        allahhuakber -= 1;
        allahhuAkberDisplay.innerText = allahhuakber;
    });

document.getElementById("reset").addEventListener("click", function () {
    alhamdulillah = 0;
    subhanAllah = 0;
    allahhuakber = 0
    subhannAllahDisplay.innerText = subhanAllah;
    alhamdulilladhDisplay.innerText = alhamdulillah;
    allahhuAkberDisplay.innerText = allahhuakber;
});
