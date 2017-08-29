'use strict'

module.exports = (app) => {
	return class IndustrynewsController extends app.Controller {
		* industrynews() {
			yield this.ctx.render('industrynews.tpl');
		}

		* addIndustrynews() {
			const title = this.ctx.query.newsTitle ;
			const newsLink = this.ctx.query.newsLink ;
			console.log(title);
			console.log(newsLink);
			yield this.ctx.service.industrynews.addIndustrynews(title,newsLink);
			
		}
	}
}