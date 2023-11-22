// Select the button and input fields
let button = document.querySelector('[data-btn]')
let redInput = document.querySelector('[data-red]')
let greenInput = document.querySelector('[data-green]')
let blueInput = document.querySelector('[data-blue]')
let hexOutput = document.querySelector('[data-hex]')

// Function to convert RGB to HEX
function rgbToHex(r, g, b) {
    // Convert each RGB value to hexadecimal and concatenate them
    let hexCode = '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    return hexCode
}
// Event listener for the button click
button.addEventListener('click', function() {
    // Get user-entered RGB values
    let red = parseInt(redInput.value)
    let green = parseInt(greenInput.value)
    let blue = parseInt(blueInput.value)
    // Convert RGB to HEX
    let hexCode = rgbToHex(red, green, blue)
    // Display the HEX code
    hexOutput.value = hexCode
})
