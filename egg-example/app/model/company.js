'use strict';
//公司model
module.exports = app => {
	const {INTEGER , STRING} = app.Sequelize;
	const Company = app.model.define('Company',{
		Id:{
			type : INTEGER(8),
			primaryKey : true,
			autoIncrement : true
		},
		CompanyName : {
			type : STRING(32),
			comment : '公司名称'
		},
		CompanyInfo : {
			type : String(2000),
			comment : '公司介绍'
		},
		CompanyPhone : {
			type : INTEGER(15),
			comment : '公司电话'
		},
		CompanyAddress : {
			type : String(50),
			comment : '公司地址'
		},
		CompanyCulture :{
			type : String(1024),
			comment : '公司文化'
		},
		CompanyMail : {
			type : String(20),
			comment : '公司邮箱'
		}

	},{
		timestamps: false,

	});

	return Company;
}