// I am Selecting the HTML elements needed for the RGB to HEX conversion
let hexOutput = document.querySelector('[data-hex]')
let button = document.querySelector('[data-btn]')

// Function to convert RGB to HEX
function rgbToHex() {
    // Getting the values of red, green, and blue inputs from user
    let redInput = document.querySelector('[data-red]').value
    let greenInput = document.querySelector('[data-green]').value
    let blueInput = document.querySelector('[data-blue]').value

    // Function to convert decimal color values to hexadecimal
    function isHexRes(color) {
        let hexRes = color.toString(16) // Convert decimal to hexadecimal
        return hexRes.length == 1 ? "0" + hexRes : hexRes // Add leading zero if needed
    }
    // Converting red, green, and blue values to hexadecimal
    let red = isHexRes(redInput);
    let green = isHexRes(greenInput);
    let blue = isHexRes(blueInput);

    // Setting the HEX output value in the designated field
    hexOutput.value = "#" + red + green + blue
    // Displaying the combined HEX value
}

// Adding an event listener to the button to trigger the function
button.addEventListener('click', rgbToHex)
