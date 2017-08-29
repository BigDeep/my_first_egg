module.exports = app => {
	return class User extends app.Service {
		* addUser() {
			const USER_ID = this.ctx.query.USER_ID;
			const USER_NAME = this.ctx.query.USER_NAME;
			const PASSWORD = this.ctx.query.PASSWORD;
			const USER_EMAIL = this.ctx.query.USER_EMAIL;
			
			const result = yield this.app.mysql.insert('t_user',{'USER_ID':USER_ID,'USER_NAME':USER_NAME,'USER_PASSWORD':PASSWORD,'USER_EMAIL':USER_EMAIL});
			if(result.serverStatus == 2){
                return "success";
           }else{
               return "fail";
           }
		}
	}
}