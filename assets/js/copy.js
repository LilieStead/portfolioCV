function copyText(text) {
    // Create a temporary text area element
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = text;
    
    // Append it to the body (temporarily)
    document.body.appendChild(tempTextArea);
    
    // Select and copy the text
    tempTextArea.select();
    document.execCommand("copy");
    
    // Remove the temporary element
    document.body.removeChild(tempTextArea);
    
    // Show popup
    showCopyPopup();
}

document.addEventListener("DOMContentLoaded", () => {
    let popup = document.getElementById("popup");
    if (popup) {
        popup.classList.remove("show", "hide");
        popup.style.display = "none";
    }
});

function showCopyPopup() {
    let popup = document.getElementById("popup");

    if (!popup) return;

    popup.style.display = "block"; // Make it visible before animating
    setTimeout(() => popup.classList.add("show"), 10); // Small delay for smooth animation

    setTimeout(() => {
        popup.classList.remove("show");
        popup.classList.add("hide"); // Fade out effect
        setTimeout(() => {
            popup.style.display = "none"; // Fully hide after animation
            popup.classList.remove("hide"); // Reset state
        }, 400);
    }, 2000);
}