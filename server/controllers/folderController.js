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
        var fileUrl = req.url.replace('/download', '');
        console.log(fileUrl);
        console.log(path.join(__dirname +'/../../downloads/'+req.user.username+'/'+ fileUrl));
        res.sendFile(path.join(__dirname +'/../../downloads/'+req.user.username+'/'+ fileUrl));
    }
};

module.exports = FolderController;