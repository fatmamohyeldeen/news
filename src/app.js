/////requires
const response = require('express')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const request = require('request')
const newsUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2022-08-15&sortBy=publishedAt&apiKey=865ecde6d8d34c93962ebd0ac19675be'


//////request url


request({ url: newsUrl, JSON: true }, (error, response) => {

    if (error) {
        console.log('error')
    } else if (response.body.error) {
        console.log(response.body.error.message)
    } else {
        console.log(response.body.article.title + response.body.article.description + response.body.article.urlToImage)
    }
})



//////// Static files that service the public



const publicDirectory = path.join(__dirname, '../public')
app.use(express.static(publicDirectory))

//////// Dynamic

app.set('view engine', 'hbs');

const viewsPath = path.join(__dirname, '../views')

app.set('views', viewsPath)

app.set('views', publicDirectory)

app.get('/news', (req, res) => {

    res.render('news', {
        title,
        description,
        urlToImage
        // title: 'article.title',
        // name: 'article.description',
        // img: 'article.urlToImage'
    })
})


app.listen(port, () => {
    console.log('Example app listening on port' + port)
})