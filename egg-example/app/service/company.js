'use strict' 

module.exports = app => {
	return class Company extends app.Service {
		* updateCompany(company) {
			console.log(company);
			const result = yield this.ctx.model.Company.update(company , {
				where : {
					Id : 0
				}
			});
			console.log(result);
		}
	}
}