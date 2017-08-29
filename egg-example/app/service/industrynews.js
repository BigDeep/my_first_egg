'use strict'

module.exports = app => {
	return class Industrynews extends app.Service {
		* addIndustrynews (title , newsLink) {
			yield this.ctx.model.Industrynews.create({
				NewsName : title ,
				NewsLink : newsLink 
			})
		}

		* deleteIndustrynewsById(Id) {
			yield this.ctx.model.Industrynews.destory({
				where :{
					Id : Id 
				}
			})
		}
	}
}