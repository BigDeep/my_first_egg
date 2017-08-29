'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    *index() {
      yield this.ctx.render('index.tpl');
    }

    *addUser(ctx) {
    	const data = ctx.query;

    	const result = yield this.service.userService.addUser();
    	if(result) {
    	this.ctx.body = "success";
    	}
    }
  }
  return HomeController;
};
