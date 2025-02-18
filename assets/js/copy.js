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

    alert("Copied: " + text);
}