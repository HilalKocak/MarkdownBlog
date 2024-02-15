const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')

mongoose.connect('mongodb://localhost/blog')
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))



app.get('/', (req, res)=> {
    // res.send('Hello World')
    const articles = [{
        title: 'Test Article',
        createdAt: new Date(),
        description: 'Test Description'

    },
    {
        title: 'Test Article 2',
        createdAt: new Date(),
        description: 'Test Description',
    }
]
  res.render('articles/index', {articles : articles})
})
app.use('/articles', articleRouter)
app.listen(5000)