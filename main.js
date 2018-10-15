// Either remove form or preventDefault within the function

document.querySelector('#output').style.display = 'none';

// Catch user input
document.querySelector('#inputValue').addEventListener('input', convert);

// Catch unit selection
document.querySelector('#unit').addEventListener('input', convert);

function convert(e) {
    // Get user input
    var input = document.querySelector('#inputValue').value;
    var unit = document.querySelector('#unit').value;

    document.querySelector('#output').style.display = 'block';

    // Check the unit value
    switch (unit) {
        case 'lbs':
            convertLbs(input);
            break;
        case 'grams':
            convertGrams(input);
            break;
        case 'kilograms':
            convertKilograms(input);
            break;
        case 'ounces':
            convertOunces(input);
            break;
        case 'Fahrenheit':
            convertFahrenheit(input);
            break;
        case 'Celsius':
            convertCelsius(input);
            break;
        case 'Kelvin':
            convertKelvin(input);
            break;
        case 'meters':
            convertMeters(input);
            break;
        case 'miles':
            convertMiles(input);
            break;
        case 'inches':
            convertInches(input);
            break;
        case 'feet':
            convertFeet(input);
            break;
    }
}

function convertLbs(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Grams:</h4>
            <div>${(num * 453.592).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Kilograms:</h4>
            <div>${(num * (453.592/1000)).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Ounces:</h4>
            <div>${(num * 16).toFixed(4)}</div>
        </div>
    </div>`
}

function convertGrams(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Pounds:</h4>
            <div>${(num * 0.00220462).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Kilograms:</h4>
            <div>${(num / 1000).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Ounces:</h4>
            <div>${(num * 0.035274).toFixed(4)}</div>
        </div>
    </div>`
}

function convertKilograms(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Pounds:</h4>
            <div>${(num * 2.20462).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Grams:</h4>
            <div>${(num * 1000).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Ounces:</h4>
            <div>${(num * 35.2739199982575).toFixed(4)}</div>
        </div>
    </div>`
}

function convertOunces(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Pounds:</h4>
            <div>${(num * 0.0625).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Grams:</h4>
            <div>${(num * 28.3495).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Kilograms:</h4>
            <div>${(num * 0.028349500000294).toFixed(4)}</div>
        </div>
    </div>`
}

function convertFahrenheit(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Celsius:</h4>
            <div>${((num -32) * (5/9)).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Kelvin:</h4>
            <div>${((num + 459.67) * (5/9)).toFixed(4)}</div>
        </div>
    </div>`    
}

function convertCelsius(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Fahrenheit:</h4>
            <div>${((num * (5/9)) + 32).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Kelvin:</h4>
            <div>${((num + 273.15)).toFixed(4)}</div>
        </div>
    </div>`
}

function convertKelvin(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Fahrenheit:</h4>
            <div>${((num * (9/5)) - 459.67).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Celsius:</h4>
            <div>${(num - 273.15).toFixed(4)}</div>
        </div>
    </div>`
}

function convertMeters(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Miles:</h4>
            <div>${(num * 0.000621371).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Inches:</h4>
            <div>${(num * 39.370066559999998).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Feet:</h4>
            <div>${(num * 3.2808388799999996799).toFixed(4)}</div>
        </div>
    </div>`    
}

function convertMiles(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Meters:</h4>
            <div>${(num * 1609.3435021075906661).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Inches:</h4>
            <div>${(num * 63359.980397936640657).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Feet:</h4>
            <div>${(num * 5279.9983664947194484).toFixed(4)}</div>
        </div>
    </div>`    
}

function convertInches(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Meters:</h4>
            <div>${(num * 0.025399992141849597749).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Miles:</h4>
            <div>${(num * 1.578282339999999669e-5).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Feet:</h4>
            <div>${(num * 0.083333307551999982743).toFixed(4)}</div>
        </div>
    </div>`    
}

function convertFeet(num) {
    output.innerHTML = 
    `<div class='card bg-primary mb-2'>
        <div class='card-header'>
            <h4>Meters:</h4>
            <div>${(num * 0.304800097536).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-success mb-2'>
        <div class='card-header'>
            <h4>Miles:</h4>
            <div>${(num * 0.000189394).toFixed(4)}</div>
        </div>
    </div>
    <div class='card bg-danger mb-2'>
        <div class='card-header'>
            <h4>Inches:</h4>
            <div>${(num * 12).toFixed(4)}</div>
        </div>
    </div>`    
}
