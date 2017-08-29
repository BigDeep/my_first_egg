'use strict'

module.exports = app =>{
	return class CompanyController extends app.Controller {
		* company() {
			 yield this.ctx.render('Company.tpl');
		}

		* updateCompany() {
			const ctx = this.ctx ;
			console.log(JSON.parse(this.ctx.query.company));
			const company = JSON.parse(this.ctx.query.company);
			const user = yield this.ctx.service.company.updateCompany(company);
		}
	}
}