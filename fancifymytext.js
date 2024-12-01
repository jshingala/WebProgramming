function makeBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

function handleRadioChange() {
    let textArea = document.getElementById("textInput");
    let fancyRadio = document.getElementById("fancyRadio");
    
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function mooText() {
    let textArea = document.getElementById("textInput");
    let text = textArea.value.toUpperCase();
    
    // Split into sentences
    let sentences = text.split(".");
    // Process each sentence except the last empty one if text ends with a period
    sentences = sentences.map((sentence, i) => {
        if (sentence.trim() === "") return sentence;
        
        // Split the sentence into words
        let words = sentence.trim().split(" ");
        // Add -Moo to the last word
        if (words.length > 0) {
            words[words.length - 1] += "-MOO";
        }
        return words.join(" ");
    });
    
    // Join sentences back together with periods
    textArea.value = sentences.join(".");
}