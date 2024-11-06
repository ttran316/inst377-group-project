async function fetchTranslation() {
    const resultElement = document.getElementById('result');
    resultElement.value = "Translating..."; 
        const response = await fetch("https://corporatebs-generator.sameerkumar.website/");
        const data = await response.json();
        resultElement.value = `${data.phrase}`;
}
