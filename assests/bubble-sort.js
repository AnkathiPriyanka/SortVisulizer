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
            // Entire array is sorted, display message
            displaySortedMessage();
            return; // Exit the function as the sorting is complete
        }
    }

    setColor(0, SORTED);
}

function displaySortedMessage() {
    // Change this part to suit your needs, e.g., show a message in the UI
    console.log("The array is sorted.");
}
