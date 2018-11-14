const express = require('express')
const router = express.Router()
const Bike = require('../models/bike')

router.get('/bike', (req, res) => {
    Bike.find({})
        .sort({ updated_at: -1 })
        .then(bikes => { res.json(bikes) })
        .catch(err => { res.json(err) })
})

router.get('/bike/:id', (req, res) => {
    Bike.findById(req.params.id)
        .then(bike => { res.json(bike) })
        .catch(err => { res.json(err) })
})

router.post('/bike', (req, res) => {
    Bike.create(req.body, (err, bike) => {
        if (err) { res.json(err) }
        else { res.json(bike) }
    })
})

router.put('/bike/:id', (req, res) => {
    Bike.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            longitude: req.body.longitude,
            latitude: req.body.latitude
        }
    }, { new: true })
        .then(bike => res.json(bike))
        .catch(err => res.json(err))
})

router.delete('/bike/:id', (req, res) => {
    Bike.findByIdAndRemove({
        _id: req.params.id
    })
        .then(bike => res.send(`{bike.id}删除成功`))
        .catch(err => { res.json(err) })
})

module.exports = router
