'use strict';
//boilerplate
require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.static('./public'));

app.get('/hello', (request, response) => {
    response.status(200).send('Behold, Tha Get Route!');
});

app.get('/data', (request, response) => {
    let h4X = {
        target: 'my wallet',
        dispatch: Date.now(),
        happend2u: [true, 'my identity has been stolen twice but the theif was caught on an atm cam when they got greedy! 15 years in federal prison!'],
        justiceServed: true,
    };
    response.status(200).json(h4X);
});

app.use('*', (request, response) => response.send('Yeah... you kinda drove off a cliff - NON EXISTENT ROUTE!'));

app.listen(PORT,() => console.log(`Listening to Andre${PORT}, pretty exclusive stuff!`));