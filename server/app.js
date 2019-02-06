const express = require('express')
const podcasts = require('./data/podcasts.json')
const posts = require('./data/posts.json')
const cors = require('cors')

const app = express()
app.use(
    cors()
)

app.get('/api/episodes', (req, res) => {
    res.json(podcasts)
})

app.get('/api/posts', (req, res) => {
    res.json(posts)
})

app.listen(9000, () => {
    console.log('Listening on PORT 9000.')
})