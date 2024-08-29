const express = require('express');
const router = express.Router();
const UserInformationController = require('../controllers/userInformationController');


router.route('/').post( UserInformationController.createUser);
router.get('/user/:user_id', UserInformationController.getUserById);
router.put('/user/:user_id', UserInformationController.updateUser);
router.delete('/user/:user_id', UserInformationController.deleteUser);
router.get('/users', UserInformationController.getAllUsers);

module.exports = router;
