'use strict';

module.exports = app => {
	return class Admin extends app.Service{

		//增加管理员
		* addAdmin(admin,password){
			console.log(this.ctx.model.Admin);
			const newAdmin = yield this.ctx.model.Admin.create({ id: admin, password: password});
			

		}

		* loginAdmin(admin , password){
			const login = yield this.ctx.model.Admin.findById(admin);
			console.log(login.id+'*************'+login.password);
			if(login == null) {
				return '此账户不存在';
			}
			else{
				if(password === login.password){
					return '登录成功';
				}
				else{
					return '密码错误,请重新输入';
				}
			}
		}

		* dropAdmin(admin) {
			const result = yield this.ctx.model.Admin;
		}
	}
}