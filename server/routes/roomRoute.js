const express = require("express") ;
const Router =  express.Router();
const passport = require('../middleware/passport');
const asyncHandler = require('express-async-handler');
const Auth = require('../middleware/adminAuth').isAdminOrPorter ;
const  roomController = require('../controllers/roomController') ; 
const Room =  require('../models/roomModel')
Router.route('/')
.get(passport.authenticate('jwt' ,  {session:false}) , Auth  , asyncHandler(roomController.getAllRooms ))

Router.route('/members')
.get(passport.authenticate('jwt' ,  {session:false}) ,Auth , asyncHandler(roomController.getMembers ))
.post(passport.authenticate('jwt' ,  {session:false}) ,Auth  ,asyncHandler( roomController.addMember))


Router.route('/members/:Membersid')
.delete(passport.authenticate('jwt' ,  {session:false}) ,Auth , asyncHandler(roomController.deleteMember) )
module.exports =  Router;