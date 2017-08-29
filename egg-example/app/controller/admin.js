'use strict';

module.exports = app => {
	return class AdminController extends app.Controller {

		//添加管理员用户
		* addAdmin(ctx) {
			const id = this.ctx.query.admin;

			const password = this.ctx.query.password;

			const user = yield this.ctx.service.admin.addAdmin(id,password);

			this.ctx.body = user;
		}
		//管理员修改密码
		* updatePassword() {
			//获取旧密码
			
			const oldPassword = this.ctx.query.oldPassword;
			//获取新密码
			const newPassword = this.ctx.query.newPassword;
			//确认新密码 
			const newPasswordSure = this.ctx.query.newPasswordSure;
			//判断

		}

		//管理员登录
		* loginAdmin() {
			const id = this.ctx.query.admin ; 
			const password = this.ctx.query.password;
			const result = yield this.ctx.service.admin.loginAdmin(id , password);
			if(result === '登录成功') {
				this.ctx.admin = id ;
			}
			this.ctx.body = result;
			console.log(this.ctx.admin);
		}
	}
}

