var List = require('../modules/list');

module.exports = function(app){
  app.get('/', function(req, res, next) {
    List.get(function(err,list){
      if(err){
        console.log('加载失败');
        return ;
      }
      res.render('index', {
        title: '首页',
        list : list,
      });
    });

  });
  app.post('/', function(req, res, next) {

  });
  app.get('/view/:name/:title/:time', function(req, res, next) {
    var name = req.params.name;
    List.getOne(name,req.params.time,req.params.title,function(err,doc){
      if(err){
        console.log('error',err);
        return res.redirect('/list');
      }
      console.log(doc);
      res.render('view',{
        title : doc.title,
        post : doc,
      })
    })
  });
}



