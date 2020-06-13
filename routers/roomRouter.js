const express = require('express');
const router = express.Router();
const RoomControllers = require('../controllers/roomControllers');

router.get('/fetchAllRooms', RoomControllers.getRooms);

router.get('/fetchAvailableRooms', RoomControllers.getAvailableRooms);

router.get('/fetchARoom/:id', RoomControllers.getARoom);

router.post('/addARoom', RoomControllers.createARoom);

router.put('/updateARoom/:id', RoomControllers.updateARoom);

router.delete('/deleteARoom/:id', RoomControllers.deleteARoom);

router.use((req, res) => {
    res.status(404).json({
        error: true,
        message: 'Error 404 - Route Not Found' 
    });
});

router.use((err, req, res) => {
    res.status(err.status || 500).json({
        error: true,
        body: err.message,
        message: 'Error in app'
    });
});

module.exports = router;


