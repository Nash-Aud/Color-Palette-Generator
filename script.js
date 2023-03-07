const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 24;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i < maxPaletteBoxes; i++) {
//      generating a random hex color code             0xffffff = 16777215
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;   
        
        //Creating a new "li" element and inserting it to the container
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        // adding click event to current li element to copy the color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
// calling the function to generate palette on page load
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    //Copying the hex value, updating the text to copied,
    // and changing text back to original hex value after 0.3 seconds
    navigator.clipboard.writeText(hexVal).then(() => { 
        colorElement.innerText = "Copied";
        setTimeout(() => colorElement.innerText = hexVal, 300);
    })
}

refreshBtn.addEventListener("click", generatePalette);