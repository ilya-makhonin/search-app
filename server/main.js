const express = require('express');
const morgan = require('morgan');
const path = require('path');


let app = express();

app.set('port', process.env.PORT || 4000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, '../build')));

app.listen(app.get('port'), () => {
    console.log(`[OK] Server is running on localhost:${app.get('port')}`);
});