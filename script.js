async function getJoke() {
    const apiKey = 'YOUR_API_KEY_HERE';
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = 'Loading... 🤔';
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/dadjokes?limit=1', {
            headers: { 'X-Api-Key': apiKey }
        });
        const data = await response.json();
        jokeElement.textContent = data[0].joke;
    } catch (error) {
        jokeElement.textContent = 'Oops! An error occurred, try again later 😢';
    }
}
