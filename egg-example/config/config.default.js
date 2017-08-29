'use strict';


module.exports = appInfo => {
  const config = {
      view: {
          defaultViewEngine: 'nunjucks',
          mapping: {
              '.tpl': 'nunjucks',
          },
      },
      sequelize : {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        dialectOptions: {
          charset: 'utf8mb4'
        },
        database: 'rztofficalwebsite',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'mysql',
      },
      bodyParser : {
        formLimit : '10mb' ,
        jsonLimit : '10mb'
      },
      multipart :{
        fileSize: '50mb'
      },
      oss : {
        client: {
          accessKeyId: '123123123',
          accessKeySecret: '123123123',
          bucket: '123',
          endpoint: 'oss-cn-hongkong.aliyun.com',
          timeout: '60s',
        } ,
      }
  };
  config.keys = appInfo.name + '_1502959280278_371';
  return config;
};

