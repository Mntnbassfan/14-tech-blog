const router = require('express').Router()
const {Post, user} = require('../models')

// create post
router.get('/posts', async function (req, res) { 
    constposts = await Post.findall({include: [User]})
    res.json(posts)
})

router.get('/posts', async function (req, res) {
    const post = await Post.create(req.body)
    res.json(post)
})



