var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , index = require('./routes/index')
  , path = require('path')
  , neo4j = require('./routes/neo4j')
  , login = require('./routes/login')
  , redis = require('./routes/redis')
  , register = require('./routes/register');
  var productsrender = require('./routes/productrendering');
  var productsRenderWomen = require('./routes/productRenderingWoman');
  
var app = express();
var bodyParser = require('body-parser');
var session = require('client-sessions');

app.use(session({   
	  
	cookieName: 'session',    
	secret: 'shopping_cart',    
	duration: 30 * 60 * 1000,    
	activeDuration: 5 * 60 * 1000,  }));


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/index',index.index);
app.get('/account',index.account);
app.get('/contact',index.contact);
app.get('/products',index.products);
app.get('/productsNew',index.productsNew);
app.get('/MenProducts',index.MenProducts);
app.get('/womenproducts',index.womenproducts);
app.get('/kidproducts',index.kidproducts);
app.get('/register',index.register);
app.get('/single',index.single);
app.get('/typography',index.typography);

app.post('/registerUser');

app.post('/signup', login.signup);
app.post('/login',login.login);

app.get('/getData',login.getData);
app.get('/getData1',login.getData1);

app.get('/logout',login.logout);

app.get('/getProductsMenTees',productsrender.getProductsMenTees);
app.get('/TeesProducts',productsrender.renderMenTeesPage);


app.get('/getProductsMenJeans',productsrender.getProductsMenJeans);
app.get('/JeansProducts',productsrender.renderMenJeansPage);

app.get('/getProductsMenHoods',productsrender.getProductsMenHoods);
app.get('/HoodsProducts',productsrender.renderMenHoodsPage);


app.get('/getProductsKidShorts',productsrender.getProductsKidShorts);
app.get('/ShortsProducts',productsrender.renderKidShortsPage);

app.get('/getProductsKidShirt',productsrender.getProductsKidShirt);
app.get('/ShirtProducts',productsrender.renderKidShirtPage);

app.post('/addProductIdToRedis',redis.addProductIdToRedis);
app.get('/getAllProductsInCart',redis.getAllProductsInCart);
app.get('/deleteAllFromCart',redis.deleteAllFromCart);
app.get('/checkout',redis.checkout);

app.post('/getRecommendations', neo4j.getRecommendations);

app.get('/getWomenTopsProducts',productsRenderWomen.getWomenTopsProducts);
app.get('/TopsProducts',productsRenderWomen.renderWomenTopsPage);

app.get('/getWomenJeansProducts',productsRenderWomen.getWomenJeansProducts);
app.get('/WomenJeansProducts',productsRenderWomen.renderWomenJeansPage);

app.get('/getWomenDressProducts',productsRenderWomen.getWomenDressProducts);
app.get('/WomenDressProducts',productsRenderWomen.renderWomenDressPage);




app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

app.post('/register',register.register);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
