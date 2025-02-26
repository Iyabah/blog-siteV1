const express = require('express');
const router = express.Router();
const db = require('../config/db'); 
const authenticateToken = require('../middleware/authMiddleware');

console.log(router); // Check if router is valid


router.get("/", async (req, res) => {
    try {
        const posts = await db('posts').select('*'); 
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get("/:id", async (req, res) => {
    try {
        const post = await db('posts').where({ id: req.params.id }).first();
        if (!post) return res.status(404).json({ error: "Post not found" });
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post("/", async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ error: "Missing fields" });

        const [id] = await db('posts').insert({ title, content });
        res.status(201).json({ id, title, content });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.put("/:id", async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(400).json({ error: "Missing fields" });

        const updatedRows = await db('posts').where({ id: req.params.id }).update({ title, content });

        if (updatedRows === 0) return res.status(404).json({ error: "Post not found" });
        res.json({ message: "Post updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.delete("/:id", async (req, res) => {
    try {
        const deletedRows = await db('posts').where({ id: req.params.id }).del();

        if (deletedRows === 0) return res.status(404).json({ error: "Post not found" });
        res.json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.get('/comments/:postId', async (req, res) => {
    try {
        const comments = await db('comments').where({ post_id: req.params.postId });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching comments' });
    }
});


router.post('/comments', async (req, res) => {
    try {
        const { comment, post_id, user_id } = req.body;
        const [id] = await db('comments').insert({ comment, post_id, user_id });
        res.status(201).json({ id, comment, post_id, user_id });
    } catch (error) {
        res.status(500).json({ error: 'Error adding comment' });
    }
});

module.exports = router;
