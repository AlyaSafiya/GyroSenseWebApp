const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// Serve static files from 'public' folder
app.use(express.static('public'));

// Blynk Auth Token
const BLYNK_AUTH_TOKEN = 'YOUR_BLYNK_AUTH_TOKEN';

// Endpoint to set a notification time
app.post('/set-time', (req, res) => {
    const { time } = req.body; // Get the time from request
    
    console.log(`Notification set for: ${time}`);

    res.send('Time set successfully!');
});

// Function to send data to Blynk (example)
const sendToBlynk = () => {
    axios.post(`http://blynk-cloud.com/${BLYNK_AUTH_TOKEN}/update/V0`, {
        value: 1 // Send any data you want to Blynk
    })
    .then(response => {
        console.log('Data sent to Blynk:', response.data);
    })
    .catch(error => {
        console.error('Error sending to Blynk:', error);
    });
};

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
