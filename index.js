const express = require('express')

const app = express();

app.listen(3000, ()=> console.log('server open on port 3000'));

app.get('/books', (req, resp) => resp.send('You are on the books route'))
