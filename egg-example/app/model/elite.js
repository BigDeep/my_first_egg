'use strict'
//精英员工model

module.exports = app => {
	const {STRING , INTEGER} = app.Sequelize;
	const Elite = app.model.define('Elite', {
		Id : {
			type: INTEGER,
			primaryKey : true , 
			autoIncrement : true ,
		},
		Name : {
			type : STRING(50) ,
			comment : '精英员工姓名'
		},
		Position : {
			type : STRING(60) , 
			comment : '精英员工职位'
		},
		PersonalInfo : {
			type : STRING(150) ,
			comment : '精英员工信息'
		},
		Image : {
			type : STRING(255) ,
			comment : '精英员工图片相对路径'
		},
		Contact : {
			type : STRING(255) ,
			comment : '精英员工联系方式'
		}
	},{
		timeStamps : false 

	});
	return Elite;
}