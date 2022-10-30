const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');
const adminController =  require('../controllers/adminController');
const isAdmin =  require('../middleware/adminAuth');
const asyncHandler = require('express-async-handler');
const passport = require('../middleware/passport');
const router = express.Router();

router.route('/:id') 
.get(isAdmin.isAdmin , asyncHandler(adminController.AddPorter)) 
.delete(isAdmin.isAdmin , asyncHandler(adminController.deletePorter));




module.exports =  router;