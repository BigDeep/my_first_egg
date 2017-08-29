'use strict'
const fs = require('fs');
const co = require('co');
const sendToWormhole = require('stream-wormhole');
const path = require('path');
module.exports = app => {
	return class EliteController extends app.Controller {
		* elite() {
			this.render
			yield this.ctx.render('elite.tpl');
		}

		* addElite (ctx) {

			const stream = yield this.ctx.getFileStream();
			const eliteName = stream.fields.name;
			const name = 'app/public/image/eliteImage/' + stream.fields.name;
			const position = stream.fields.position;
			const personalInfo = stream.fields.position;
			const contact = stream.fields.contact;
 			function saveStream(stream, filepath) {
			  return new Promise((resolve, reject) => {
			    if (filepath.indexOf('/read-error-') > 0) {
			      stream.once('readable', () => {
			        const buf = stream.read(10240);
			        console.log('read %d bytes', buf.length);
			        setTimeout(() => {
			          reject(new Error('mock read error'));
			        }, 1000);
			      });
			    } else {
			      const ws = fs.createWriteStream(filepath);
			      stream.pipe(ws);
			      stream.on('error', reject);
			      stream.on('end', function(){
			      	console.log(123);
			      	resolve()});
			    }
			  });
			}
			let promise = saveStream(stream,name);
			promise.then(co.wrap(function * (value){
				console.log(value);
				yield this.ctx.service.elite.addElite(eliteName,name,position,personalInfo,contact)
			})).catch(function(err){
				console.log(err);
			})

			  
		}

		* dropElite() {
			let Id = this.ctx.request.body.EliteId;
			let src = this.ctx.request.body.imageSrc;
			function deleteImg(src) {
				return new Promise(function(resolve,reject) {
					fs.unlink(src , function(err){
					if(err){
					  console.log(err);
					  reject();
					}
					 console.log('文件:'+src+'删除成功！');
					 resolve();
					})			
				});
			}
			let promise = deleteImg(src);
			promise.then(co.wrap(function * (value){
				console.log(value);
				yield this.ctx.service.elite.deleteEliteById(Id);
			})).catch(function(err){
				console.log(err);
			})
		}

		* updateElite(){

		}
	}
}

			
			/*const rs = yield this.ctx.getFileStream();
			let img = rs._readableState.buffer;
			console.log(rs._readableState.buffer);
			console.log(rs.fields);
			let _this = this;
			console.log(_this.ctx.oss);*/
			
/*			function writeImg(img,eliteName) {
				return new Promise(co.wrap(function * (resolve,reject) {
					result = yield _this.ctx.oss.put(`app/public/image/eliteImage/${eliteName}.jpg`,rs);
				}));
			}

			var promise =writeImg(img,eliteName);
			promise.then(co.wrap(function * (value){
					
					const rs = yield _this.ctx.service.elite.addElite(eliteName);
								
				}));*/