'use strict';

var dir = require('node-dir');
var path = require('path');
// The Folder controller.
var FolderController = {

    list: function (req, res) {
        var folderList = [];
        dir.files('./downloads/' + req.user.username, (error, files) => {
            
            console.log(files);
            folderList = files;
            res.status(200).json({ folderList: files });
        });

    },

    files: function (req, res) {
        var directory = req.body.directory;
        var fileName = req.body.fileName;
        console.log(path.join(__dirname +'/../../downloads/'+req.user.username+'/'+ directory+'/'+fileName));
        res.sendFile(path.join(__dirname +'/../../downloads/'+req.user.username+'/'+ directory+'/'+fileName));
    }
};

module.exports = FolderController;