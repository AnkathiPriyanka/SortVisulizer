var arr = [/* Your array here */];
var size = arr.length;
var delay = 500; // Delay between each step in milliseconds
var timerInterval; // Variable to hold the interval ID

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
    var i, j;
    await sleep(delay);

    for(i = 0; i < size - 1; i++) {
        let swapped = false; // Track if any swaps occur in this pass

        for(j = 0; j < size - i - 1; j++) {
            await sleep(delay);

            setColor(j, COMPARE);
            setColor(j + 1, COMPARE);
            await sleep(delay);

            if(arr[j] > arr[j + 1]) {
                swap(j, j + 1);
                await sleep(delay);
                swapped = true; // Mark that a swap has occurred
            }

            setColor(j, UNSORTED);
            setColor(j + 1, UNSORTED);
        }

        await sleep(delay);

        setColor(j, SORTED);

        if (!swapped) {
            // Entire array is sorted, display message and stop timer
            displaySortedMessage();
            clearInterval(timerInterval);
            return; // Exit the function as the sorting is complete
        }
    }

    setColor(0, SORTED);
}

function displaySortedMessage() {
    // Change this part to suit your needs, e.g., show a message in the UI
    console.log("The array is sorted.");
}

function startSorting() {
    var start = Date.now(); // Get the current timestamp when sorting starts
    var timerDiv = document.getElementById("timer");
    timerDiv.innerHTML = "0 seconds"; // Initialize the timer display

    timerInterval = setInterval(function() {
        var elapsedTime = Math.floor((Date.now() - start) / 1000); // Calculate the elapsed time in seconds
        timerDiv.innerHTML = elapsedTime + " seconds"; // Update the timer display
    }, 1000); // Update the timer every second

    bubbleSort(); // Start the sorting process
}
