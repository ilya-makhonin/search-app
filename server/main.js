const express = require('express');
const request = require('request-promise');
const morgan = require('morgan');
const path = require('path');


let app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../build')));

app.get('/users', async function(req, res) {
    try {
        const result = await request({
            method: 'GET',
            uri: 'http://jsonplaceholder.typicode.com/users',
            json: true
        });
        res.json(result);
    } catch (error) {
        console.log(error);
        let errorMessage = 'Error: ' + error;
        res.json({ state: errorMessage });
    }
});

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on http://localhost:${app.get('port')}`);
});