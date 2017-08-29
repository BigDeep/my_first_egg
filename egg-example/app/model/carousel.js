'use strict'


module.exports = app => {
	const {INTEGER , STRING} = app.Sequelize;
	const Carousel = app.model.define('Carousel' , {
		Id : {
			type : INTEGER(8),
			primaryKey : true,
			autoIncrement : true
		},
		Image : {
			type : STRING(255),
			comment : '图片的存放地址'
		},
		ImageLink : {
			type : STRING(255) ,
			comment : '图片绑定的地址'
		}
	});

	return Carousel;
}