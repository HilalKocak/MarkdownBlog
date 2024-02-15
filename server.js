const express = require('express')
const app = express()
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const Article = require('./models/article')
const methodOverride = require('method-override')
mongoose.connect('mongodb://localhost/blog')
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))

app.get('/', async (req, res)=> {
    // res.send('Hello World')
    const articles = await Article.find().sort({createdAt: 'desc'}) // gets every single article
    res.render('articles/index', {articles : articles})
})
app.use('/articles', articleRouter)
app.listen(5000)