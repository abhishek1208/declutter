#!/usr/bin/env node
const exec = require('child_process').exec;
const fs = require('fs');
const os=require('os');
var path=os.homedir();

function moveFile(){
	exec('mv '+path+'/Desktop/"Screen Shot"'+'*.png '+path+'/Desktop/screenshots', function(error,stdout,stderr){
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

function checkFileExists(){
	exec('ls -lR '+ path + '/Desktop/"Screen Shot"'+'*.png'+ '| wc -l',function(error,stdout,stderr){
		if(error){
			console.error(`exec error: ${error}`);
            return;
		}

		if(stdout==0){
			return;
		}
		
		if (!fs.existsSync(path+'/Desktop/screenshots')) {
			makedir();
		}		
		
		else{
			moveFile();
		}


	})
}


checkFileExists();


