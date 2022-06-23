const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');
const user = require('../controllers/user');
const getUserbyId = require('../controllers/getSingle_user');
const getFlights = require('../controllers/get_all_flight');
const removeFlight = require('../controllers/delete_flight');
const updateflight = require('../controllers/updateflight');



 router.get('/', controller.example)
 router.post('/user', user.newUser)
 router.post('/user/:id', getUserbyId.getUserbyId)
 router.get('/allflight', getFlights.getAllFlights)
 router.delete('/deleteflight/:id', removeFlight.deleteSingleFlight)
 router.put('/update/id', updateflight.updateSingleFlight)


module.exports = router;

