const express = require('express')

const food = require('../controllers/foodCont')

const router = express.Router()

router.post('/food', food.createFood)
router.put('/food/:id', food.updateFood)
router.delete('/food/:id', food.deleteFood)
router.get('/food/:id', food.getFoodById)
router.get('/foods', food.getFoods)

module.exports = router