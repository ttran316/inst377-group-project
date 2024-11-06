async function fetchTranslation() {
    const resultElement = document.getElementById('result');
    resultElement.value = "Translating...";  // Change textContent to value

    try {
        // Make a GET request to the Corporate BS Generator API
        const response = await fetch("https://corporatebs-generator.sameerkumar.website/");
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error("Network response was not ok.");
        }

        // Parse the JSON response
        const data = await response.json();

        // Display the translated text
        resultElement.value = `${data.phrase}`;  // Change textContent to value
    } catch (error) {
        resultElement.value = "Error fetching translation. Please try again.";  // Change textContent to value
        console.error("Error:", error);
    }
}
