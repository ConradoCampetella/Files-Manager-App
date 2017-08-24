'use strict';

var router = require('express').Router();

var config = require('../config'),
    allowOnly = require('../services/routesHelper').allowOnly,
    AuthController = require('../controllers/authController'),
    UserController = require('../controllers/userController'),
    AdminController = require('../controllers/adminController'),
    FolderController = require('../controllers/folderController');

var APIRoutes = function (passport) {
    // POST Routes.
    router.post('/signup', AuthController.signUp);
    router.post('/authenticate', AuthController.authenticateUser);

    // GET Routes.
    router.get('/profile', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, UserController.index));
    router.get('/admin', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.admin, AdminController.index));

    //GET FOLDER FILE LIST
    router.get('/folder', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, FolderController.list));

    //GET Downloaf File
    router.post('/file', passport.authenticate('jwt', { session: false }), allowOnly(config.accessLevels.user, FolderController.files));
    return router;
};

module.exports = APIRoutes;