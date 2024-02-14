const express = require('express')
const app = express()

app.set('view engine', 'ejs');


app.get('/', (req, res)=> {
    // res.send('Hello World')
    res.render('index') 
})

app.listen(5000)