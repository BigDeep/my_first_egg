'use strict';
//管理员model
module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;

  const Admin = app.model.define('Admin', {
    id : {
      type: INTEGER(20),
      primaryKey: true,
      autoIncrement: true,
    },
    password : STRING(30),
  },{
  	timestamps: false,
    classMethods: {
      * findByEmail(email) {
        return yield this.findOne({ email });
        }
    }
  });
  Admin.prototype.findByadmin = function* (id) {
    return yield this.findOne({id : id});
  }



  return Admin;
};


