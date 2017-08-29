'use strict'

module.exports = (app) => {
	return class Elite  extends app.Service {
		* addElite (eliteName,name,position,personalInfo,contact) {
			const newElite = yield this.ctx.model.Elite.create({
				Name : eliteName ,
				Position : position ,
				personalInfo : personalInfo ,
				Image : name ,
				Contact :contact
			});
			return newElite;
		}

		* deleteEliteById() {
			

		}
	}
}