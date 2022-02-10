const express = require('express');
const Posts = require('../models/post');

const router = express.Router();


router.post('/post/save',  (req, res) => {
    try {
        let newPost = new Posts(req.body);
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Posts saved succesfully"
        });
    } catch (err) {
        console.log(err)
        res.json({ status: 'error', error: err.message })
    }
});

//Get Post Data
router.get('/posts', async (req, res) => {
    try {
        Posts.find().exec((err, posts) => {
            if (err) {
                return res.status(400).json({

                });

            }
            return res.status(200).json({
                success: true,
                existingPoints: posts
            });
        });
    } catch (err) {
        res.json({ status: 'error', error: err.message })
    }
});

router.put('./post/update/:id', async (req, res) => {
    try {
        Posts.findByIdAndUpdate(
            req.params.id,
            {
                $ser: req.body
            },
            (err, post) => {
                if (err) {
                    return res.status(400).json({ error: err });
                }
                return res.status(400).json({
                    success: "updated Succesfully"
                });
            }
        )
    } catch (err) {
        res.json({ status: 'error', error: err.message })
    }
})

router.delete('/post/delete/:id', async (req, res) => {
    try {
        Posts.findByIdAndRemove(req.params.id).exec((err, deletePost) => {
            if (err) return res.status(400).json({
                message: "Delete unsuccesful", err
            });
        });
    } catch (err) {
        res.json({ status: 'error', error: err.message })
    }
});


router.get("/post/:id", async (req, res) => {
    try {
        let postId = await req.params.is;
        Posts.findById(postId, (err, post) => {
            if (err) {
                return res.status(400).json({ success: false, err });

            }
            return res.status(200).json({
                success: true,
                post
            });
        });
    } catch (err) {
        res.json({ status: 'error', error: err.message })
    }
});

module.exports = router;
