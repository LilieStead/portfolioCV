let isEnlarged = false;

function toggleImg() {
    const img = document.getElementById("img1");
    if (!isEnlarged) {
        img.classList.add("enlarged");
    } else {
        img.classList.remove("enlarged");
    }
    isEnlarged = !isEnlarged;
}

function resetImg() {
    const img = document.getElementById("img1");
    img.classList.remove("enlarged");
    isEnlarged = false;
}