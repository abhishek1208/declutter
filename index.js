#!/usr/bin/env node
const exec = require('child_process').exec;
const fs = require('fs');
const os=require('os');
var path=os.homedir();

function moveFile(){
	exec('mv '+path+'/Desktop/*.png '+path+'/Desktop/screenshots', function(error,stdout,stderr){
		if (error) {
			console.error(`exec error: ${error}`);
            return;
		}

	})
}
function makedir(){
	exec('mkdir '+ path + '/Desktop/screenshots',function (error, stdout, stderr) {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        
        moveFile();
	})
}
if (!fs.existsSync(path+'/Desktop/screenshots')) {
	makedir();
}
else{
	moveFile();
}

