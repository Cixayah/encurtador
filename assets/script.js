document.getElementById('shortenBtn').addEventListener('click', async () => {
    const fullUrl = document.getElementById('fullUrl').value;
    const resultDiv = document.getElementById('result');
    const shortenedLink = document.getElementById('shortenedLink');

    // Mude esta URL quando você hospedar na Vercel (ex: https://encurta.devcix.tech/api/shorten)
    const api_url = 'https://encurtador-blush.vercel.app//api/shorten';

    try {
        const response = await fetch(api_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullUrl }),
        });

        const data = await response.json();

        if (response.ok) {
            shortenedLink.href = `https://encurtador-blush.vercel.app//${data.shortUrl}`; // Mude esta URL também
            shortenedLink.textContent = `https://encurtador-blush.vercel.app//${data.shortUrl}`; // Mude esta URL também
            resultDiv.classList.remove('hidden');
        } else {
            alert(data.error || 'Ocorreu um erro.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Não foi possível se conectar ao servidor.');
    }
});