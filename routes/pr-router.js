const express = require('express')
const router = express.Router()

const {prController} = require('../controllers/pr-controller')


router.get("/",prController)


module.exports = router