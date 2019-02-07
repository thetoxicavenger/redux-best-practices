const express = require('express')
const podcasts = require('./data/podcasts.json')
const posts = require('./data/posts.json')
const users = require('./data/users.json')
const cors = require('cors')

const app = express()
app.use(
    cors()
)

app.get('/api/episodes', (req, res) => {
   setTimeout(() => {
        res.json(podcasts)
   }, 1500)
})

app.get('/api/posts', (req, res) => {
    setTimeout(() => {
        res.json(posts)
   }, 1500)
})

app.get('/api/users', (req, res) => {
    setTimeout(() => {
        res.json(users)
   }, 1500)
})

app.listen(9000, () => {
    console.log('Listening on PORT 9000.')
})