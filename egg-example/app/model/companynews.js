'use strict'

//公司新闻model;
module.exports = app =>{
	const {INTEGER , STRING , DATE} = app.Sequelize;
	const Companynews = app.model.define('Companynews',{
		Id : {
			type : INTEGER(8),
			primaryKey : true,
			autoIncrement : true
		},
		NewsTitle : {
			type : STRING(255),
			comment: '新闻标题'
		},
		NewsContent : {
			type : STRING(5000),
			comment : '新闻内容'
		},
		PoseDate : {
			type : DATE,
			comment : '发布时间'
		},
		Editor : {
			type : STRING(100),
			comment : '新闻编辑'
		}
	},{
		timestamps : false 

	}) ;
	return Companynews;
}