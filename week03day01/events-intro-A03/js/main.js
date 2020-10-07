let button = document.querySelector('button');

function clickHandler() {
    console.log('Button was clicked...');
}

// add event listener for button
button.addEventListener('click', clickHandler);