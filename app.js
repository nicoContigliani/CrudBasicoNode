const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.get('/', (req, res) => res.send('toma por mirón'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/',require('./router'));
app.listen(port, () => console.log(`servidor corriendo correctamente`))