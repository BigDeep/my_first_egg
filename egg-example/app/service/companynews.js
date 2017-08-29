'use strict'

module.exports = (app) => {
	return class Companynews extends app.Service {
		*addCompanynews (newsTitle , newsContent , Editor) {
			const DATE = new Date().toISOString().split("T")[0];
			var newsContent = newsContent.toString();
			const result = yield this.ctx.model.Companynews.create({ NewsTitle: newsTitle , NewsContent:newsContent , Editor : Editor , PoseDate : DATE});
			return result;
		}

		*findCompanynewsById(CompanynewsId) {
			const result = yield this.ctx.model.Companynews.findById(CompanynewsId);
			
			return result;
		}
		*deleteCompanynewsById(CompanynewsId) {
			const result = yield this.ctx.model.Companynews.destroy({
				where :{
					Id : CompanynewsId
				}
			})
		}
	}
}