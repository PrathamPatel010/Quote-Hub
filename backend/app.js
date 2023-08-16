// dependencies
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT;
const cors = require('cors');
const frontend_url = process.env.frontend_url;
const axios = require('axios');
const api_url = process.env.API_URL;
const api_key = process.env.API_KEY;

// app initialization
const app = express();
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const corsOption = {
    origin: frontend_url,
}
app.use(cors(corsOption));



//Routes
app.get('/', (req, res) => {
    res.send(`<h1>Backend is up & running</h1>`);
})

app.post('/getQuote', async(req, res) => {
    const { category } = req.body;
    try {
        const response = await axios.get(`${api_url}category=${category}`, {
            headers: {
                'X-API-KEY': api_key,
            }
        })
        const dataTobeSend = {
            statusCode: response.status,
            authorName: response.data[0].author,
            quoteData: response.data[0].quote,
        }
        console.log(dataTobeSend);
        res.json(dataTobeSend);
    } catch (err) {
        res.json({ status: 'Some error occured!! Please try after some time' });
    }
})