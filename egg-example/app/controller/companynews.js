'use strict'
var co = require('co');
const fs = require('fs');
const cheerio = require('cheerio');
module.exports = app => {
	return class Companynews extends app.Controller {
		* companynewsEditor() {
			yield this.ctx.render('companynews.tpl');
		}
		* addCompanynews () {			
			const timeStamp = Date.parse(new Date());
			const title = this.ctx.request.body.newsTitle ;
			const $ = cheerio.load(this.ctx.request.body.html);
			const imgPath = 'app/public/image/newsImage/';	
			const _Editor = this.ctx.request.body.editor;	
			var _this = this;
			let images = $('img');	
			var _html = $.html();
			function writeImg(imgpath,image) {
				return new Promise(function(resolve,reject) {
					let img =   Buffer.from($(image).attr('src').replace(/.*base64+\,/,"") ,'base64');
					let random = Math.random().toString().substring(2);
					fs.writeFile(`${imgPath}${title}_${random}.jpg`, img ,(err) => {
						 if (err) throw err;
						  console.log('The file has been saved!');
						  $(image).attr('src' ,`/public/image/newsImage/${title}_${random}.jpg`);
						  console.log($(image).attr('src'));
						 

						  resolve();
					});
					
				});
			}
			if(images.length==0){
				const rs = yield _this.ctx.service.companynews.addCompanynews(title , _html ,_Editor);
				console.log(rs);	
			}
			else{
				var promise = [];
				for(let i = 0 ; i <images.length ; i++) {
					promise[i] =  writeImg(imgPath,images[i]);
				}
				let P4 = Promise.all(promise)
				P4.then(co.wrap(function * (value){
					_html = $.html() ;
					console.log(_html);
					const rs = yield _this.ctx.service.companynews.addCompanynews(title , _html ,_Editor);
					console.log(rs);			
				}));
			}
		}
		//从数据库清除数据， 删除文件夹中的图片
		* deleteCompanynews () {
			var _this = this;	
			const  Id = 44;
			const rs = yield _this.ctx.service.companynews.findCompanynewsById(Id);
			console.log(rs.NewsContent);
			const $ = cheerio.load(rs.NewsContent);
			let images = $('img');	
			
			function deleteImg(image) {
				return new Promise(function(resolve,reject) {
					var src = 'app' + $(image).attr('src');
					console.log(src);
					fs.unlink(src , function(err){
					if(err){
					  console.log(err);
					}
					 console.log('文件:'+src+'删除成功！');
					 resolve();
					})			
				});
			}
			if(images.length === 0) {
				
			}
			else{
				var promise = [];
				for(let i = 0 ; i <images.length ; i++) {
					promise[i] =  deleteImg(images[i]);
				}
				let P4 = Promise.all(promise)
				P4.then(co.wrap(function * (value){
					const rs = yield _this.ctx.service.companynews.deleteCompanynewsById(Id);
					/*console.log(rs);	*/		
				}));
			}
		}

		
	}
}