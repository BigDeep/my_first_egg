'use strict'

module.exports = app => {
	const {INTEGER , STRING , DATE} = app.Sequelize ;
	const Recruitment = app.model.define('Recruitment',{
		Id : {
			type : INTEGER(8),
			primaryKey : true,
			autoIncrement : true
		},
		Position : {
			type : STRING(255) ,
			comment : '招聘职位'
		},
		Numbers : {
			type : INTEGER(8),
			comment : '招聘人数'
		},
		PositionResponse :{
			type : STRING(2000),
			comment : '岗位职责'
		},
		PositionSkill : {
			type : STRING(2000),
			comment : '岗位技能'
		},
		Deadline : {
			type : DATE ,
			comment : '截止日期'
		},
		Salary : {
			type : STRING(255),
			comment : '薪资范围'
		},
		PoseDate : {
			type : DATE , 
			comment : '发布日期'
		}

	},{
		timeStamps : false
	});
	return Recruitment;
}