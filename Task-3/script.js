let resultDisplayed = false;

function clearDisplay(){
    document.getElementById('display').value = "";
    resultDisplayed = false;
}

function appendToDisplay(value) {
    const display = document.getElementById('display');

    if (isOperator(value) && isOperator(display.value[display.value.length - 1])) {
        // Replace the last operator
        display.value = display.value.slice(0, -1) + value; 
    } else {
        if (resultDisplayed) {
            clearDisplay();
        }
        // Append the new value
        display.value += value; 
    }
}

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function calculated(){
    try{
        //To calculate the expression.
        const display = document.getElementById('display').value;
        const result = eval(display);
        document.getElementById('display').value = result;
        //flag. 
        resultDisplayed = true;
        //for recent results.
        const resultlist = document.getElementById('resultsList');
        const newitem = document.createElement('li');
        newitem.textContent = `${display} = ${result}`;
        resultlist.appendChild(newitem);

        //for placholder functionality
        const placeholder = document.getElementById('placeholder');
        if(resultlist.children.length>0){
            if(placeholder){
                placeholder.remove();
            }
        }

         
    } catch (error){
        document.getElementById('display').value = 'ERROR';
        resultDisplayed = false;
    }
}

function clearRecent() {
    const resultList = document.getElementById('resultsList');

    // Clear all <li> elements from the results list
    while (resultList.firstChild) {
        resultList.removeChild(resultList.firstChild);
    }

    // Check for the existing placeholder
    const check = document.getElementById('placeholder');
    if (!check) {
        const recentCal = document.getElementById('recentCal');
        const placeholder = document.createElement('p');
        placeholder.id = 'placeholder';
        placeholder.textContent = 'Recent calculations';

        // Append the new placeholder to the recentCal div
        recentCal.insertBefore(placeholder, resultList); // Insert before the resultsList
    }
}


// Keyboard input handling
document.addEventListener('keydown', function(event) {
    const key = event.key; // Get the key pressed

    if (isFinite(key)) {
        // If the key is a number (0-9)
        appendToDisplay(key);
    } else if (key === '+') {
        appendToDisplay('+');
    } else if (key === '-') {
        appendToDisplay('-');
    } else if (key === '*') {
        appendToDisplay('*');
    } else if (key === '/') {
        appendToDisplay('/');
    } else if (key === 'Enter') {
        // If Enter is pressed, calculate the result
        calculated();
    } else if (key === 'Escape') {
        // If Escape is pressed, clear the display
        clearDisplay();
    }
});
