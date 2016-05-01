module.exports = function(app){
  app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });
  app.get('/view', function(req, res, next) {
    res.render('view', { title: '内容' });
  });
}



