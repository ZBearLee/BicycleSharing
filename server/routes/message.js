const express = require('express')
const router = express.Router()
const Message = require('../models/message')

router.get('/message', (req, res) => {
    Message.find({})
        .sort({ update_at: -1 })
        .then(messages => {
            res.json(messages)
        })
        .catch(err => {
            res.json(err)
        })
})

router.get('/message/:id', (req, res) => {
    Message.findById(req.params.id)
        .then(message => {
            res.json(message)
        })
        .catch(err => {
            res.json(err)
        })
})

router.post('/message', (req, res) => {
    Message.create(req.body, (err, message) => {
        if (err) {
            res.json(err)
        } else {
            res.json(message)
        }
    })
})

router.put('/message/:id', (req, res) => {
    Message.findOneAndUpdate({ _id: req.params.id }
        , {
            $set: {
                title: req.body.title,
                poster: req.body.poster,
                start_time: req.body.start_time,
            }
        }, {
            new: true
        })
        .then(message => res.json(message))
        .catch(err => res.json(err))
})

router.delete('/message/:id', (req, res) => {
    Message.findOneAndRemove({
        _id: req.params.id
    })
        .then(message => res.send(`${message.title}删除成功`))
        .catch(err => res.json(err))
})

module.exports = router