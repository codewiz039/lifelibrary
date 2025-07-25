async function getNewQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random?tags=inspirational');
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();
    document.getElementById('quote').textContent = data.content;
    document.getElementById('author').textContent = `- ${data.author || 'Unknown'}`;
  } catch (error) {
    document.getElementById('quote').textContent = 'Keep going, you’re closer than you think!';
    document.getElementById('author').textContent = '- Unknown';
  }
}
getNewQuote();