'use strict';


module.exports = app => {
  app.get('/', 'home.index');
  app.get('/addUser','home.addUser');
  app.get('/addAdmin','admin.loginAdmin');
  app.get('/company','company.company');
  app.get('/test','admin.loginAdmin');
  app.get('/company/updateCompany', 'company.updateCompany');
  app.get('/companynews/companynewsEditor','companynews.companynewsEditor');
  app.post('/companynews/addCompanynews','companynews.addCompanynews');
  app.post('/companynews/deleteCompanynews','companynews.deleteCompanynews');
  app.get('/elite' ,'elite.elite');
  app.post('/elite/addElite' ,'elite.addElite');
  app.get('/industrynews','industrynews.industrynews');
  app.post('/industrynews/addIndustrynews','industrynews.addIndustrynews');
};