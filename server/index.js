const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/router');
const cors = require('cors');

const hostname = '127.0.0.1';
const port = process.env.PORT || 5000;

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(express.static(__dirname + '/public'));

routes(app);
app.use(cors());

app.listen(port, (error) => {
    if(error) return console.log(`Error: ${error}`)
    console.log(`Server running at http://${hostname}:${port}/`);
});

