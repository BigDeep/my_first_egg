'use strict'

module.exports = app => {
	const { INTEGER , STRING ,DATE } = app.Sequelize;
	const Product = app.model.define('Product' , {
		Id :{
			type : INTEGER ,
			primaryKey : true ,

		},
		ProductName : {
			type : STRING(100) ,
			comment : '产品名称'
		},
		ProductInfo : {
			type : STRING(5000) ,
			comment : '产品信息'
		},
		ProductInfoImage : {
			type: STRING ,
			comment : '产品信息图片'
		},
		ProductFeatures :{
			type : STRING(5000),
			comment : '产品特征'
		},
		productPoseTime : {
			type : DATE,
			comment : '产品发布日期'
		}
	},{
		timeStamps : false 
	});

	return Product ;
}