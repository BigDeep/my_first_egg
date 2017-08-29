'use strict' 

module.exports = app =>{
	const {INTEGER,STRING} = app.Sequelize;
	const Productimage = app.model.define('Productimage' , {
		Id : {
			type : INTEGER(8),
			primaryKey : true,
			autoIncrement : true
		},
		ProductId :{
			type : STRING,
			comment: '所属产品id'
		},
		ImageLink :{
			type : STRING ,
			comment : '图片地址'
		}

	},{
		timeStamps : false
	});

	return Productimage ;
}