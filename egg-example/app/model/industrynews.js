'use strict' 

module.exports = app => {
	const{ INTEGER,STRING } =  app.Sequelize ;
	const Industrynews = app.model.define('Industrynews',{
		Id : {
			type: INTEGER,
			primaryKey : true , 
			autoIncrement : true ,
		} ,
		NewsName : {
			type : STRING(255),
			comment : '新闻名称'
		} ,
		NewsLink : {
			type : STRING(255),
			comment : '新闻链接'
		}
	},{
		timestamps : false 

	});
	return Industrynews;
	
}