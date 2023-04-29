let binaryCounter = [0, 0, 0, 0]; // Initial binary counter value
let grayCounter = [0, 0, 0, 0]; // Initial gray counter value
let intervalId; // ID of the interval for updating the counter

// Function to convert binary to gray code
function binaryToGray(binary) {
    let gray = [binary[0]];
    for (let i = 1; i < binary.length; i++) {
        gray.push(binary[i] ^ binary[i - 1]);
    }
    return gray;
}

// Function to update the counter display
function updateCounterDisplay() {
    document.getElementById('binary-counter').textContent = binaryCounter.join('');
    document.getElementById('gray-counter').textContent = grayCounter.join('');
}

// Function to start the counter
function startCounter() {
    intervalId = setInterval(function () {
        // Increment the binary counter
        for (let i = binaryCounter.length - 1; i >= 0; i--) {
            if (binaryCounter[i] === 0) {
                binaryCounter[i] = 1;
                break;
            } else {
                binaryCounter[i] = 0;
            }
        }

        // Update the gray counter using the binary counter
        grayCounter = binaryToGray(binaryCounter);

        // Update the counter display
        updateCounterDisplay();
    }, 2000); // Update the counter every 1 second (1000ms)
}

// Function to stop the counter
function stopCounter() {
    clearInterval(intervalId);
}

// Initialize the counter display
updateCounterDisplay();

