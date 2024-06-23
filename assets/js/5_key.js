let color;
const pintar = document.getElementById("key");

document.addEventListener("keydown", function (event) {
    if (event.key === 'a' || event.key === 'A') {
        color = "pink";
        pintar.style.backgroundColor = color;
    } else if (event.key === 's' || event.key === 'S') {
        color = "orange";
        pintar.style.backgroundColor = color;
    } else if (event.key === 'd' || event.key === 'D') {
        color = "skyblue";
        pintar.style.backgroundColor = color;
    }
})

let color2;
const pintar2 = document.getElementById("key2");
const pintar3 = document.getElementById("key3");
const pintar4 = document.getElementById("key4");

const key2 = document.getElementById("key2")
key2.style.display = "none";
const key3 = document.getElementById("key3")
key3.style.display = "none";
const key4 = document.getElementById("key4")
key4.style.display = "none";

document.addEventListener("keydown", function (event) {
    if (event.key === 'q' || event.key === 'Q') {
        color2 = "purple";
        pintar2.style.backgroundColor = color2;
        key2.style.display = "block";
    } else if (event.key === 'w' || event.key === 'W') {
        color2 = "grey";
        pintar3.style.backgroundColor = color2;
        key3.style.display = "block";
    } else if (event.key === 'e' || event.key === 'E') {
        color2 = "chocolate";
        pintar4.style.backgroundColor = color2;
        key4.style.display = "block";
    }
})

