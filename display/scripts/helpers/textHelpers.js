let i = 0; // Index for texts array

function typeTextAutomatic(texts, textBodyEl) {
    if (i < texts.length) {
        const text = texts[i];
        let j = 0; // Index for characters in the current text

        function typeCharacter() {
            if (j < text.length) {
                textBodyEl.innerHTML += text[j];
                j++;
                setTimeout(typeCharacter, 50); // Type the next character
            } else {
                textBodyEl.innerHTML += "<br>"; // Add a line break after the text
                i++;
                setTimeout(typeTextAutomatic, 1000); // Move to the next text
            }
        }

        typeCharacter(); // Start typing the current text
    }
}