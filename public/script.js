document.getElementById('setTimeButton').addEventListener('click', () => {
    const time = document.getElementById('timeInput').value;

    fetch('http://localhost:3000/set-time', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ time })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('response').innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
