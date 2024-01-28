require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "badal047",
    "id": 114080843,
    "node_id": "U_kgDOBsy8Sw",
    "avatar_url": "https://avatars.githubusercontent.com/u/114080843?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/badal047",
    "html_url": "https://github.com/badal047",
    "followers_url": "https://api.github.com/users/badal047/followers",
    "following_url": "https://api.github.com/users/badal047/following{/other_user}",
    "gists_url": "https://api.github.com/users/badal047/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/badal047/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/badal047/subscriptions",
    "organizations_url": "https://api.github.com/users/badal047/orgs",
    "repos_url": "https://api.github.com/users/badal047/repos",
    "events_url": "https://api.github.com/users/badal047/events{/privacy}",
    "received_events_url": "https://api.github.com/users/badal047/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Badal Sarkar",
    "company": "National Institute of Technology Jameshedpur",
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2022-09-21T12:59:39Z",
    "updated_at": "2024-01-27T16:06:45Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
    res.send('Hello twitter!')
})
app.get('/login', (req, res) => {
    res.send('<h1m>Ye login page hai</h1m>')
})
app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})