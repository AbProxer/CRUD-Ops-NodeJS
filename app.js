//include modules to build express app.
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var expressvalidator = require('express-validator');
var mongojs = require('mongojs');
db = mongojs('customerapp', ['users']);
var ObjectId = mongojs.ObjectId;

//1. setup to initialize express app.
app = express();

//4. set view engine (ejs files)
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//3. adding middleware
app.use(bodyParser.json());//bodayparser module has its own middleware
//global vars.
app.use(function(req, res, next){
res.locals.errors = null;
next();
});
// express validator middleware
app.use(expressvalidator());
app.use(bodyParser.urlencoded({extended: false}));
//use function is just to use that middleware.
app.use(express.static(path.join(__dirname, 'public')));//use for static files to load.

/*var logger = function(req, res, next){
    console.log('logging...');
    next();
}
app.use(logger);
*/

//2. set the "route" through GET request. to show something on the browser.
//route handler.
app.get('/', function(req, res){
//res.send('Hello G !'); // send funtion only dispalys what is written in the braces.

db.users.find(function(err, docs){
    
res.render('index',{
    heading: 'Customers',
    users: docs
    });
})

});
app.post('/users/add', function(req, res){

    req.checkBody('first_name', 'Fisrt Name is required').notEmpty();
    req.checkBody('last_name', 'Last Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    var errors = req.validationErrors();
    if(errors){
        res.render('index',{
            heading: 'Customers',
            users: users,
            errors: errors
            });
    }else{
        var newUser = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        }
        db.users.insert(newUser, function(err, result){
            if(err){
                console.log(err);
            }else{
                res.redirect('/');
            }
        });
    }

});
app.delete('/users/delete/:id', function(req, res){
    db.users.remove({_id: ObjectId(req.params.id)}, function(err, result){
        if(err){
            console.log(err);
        }
        res.redirect('/');
    });
})
//1.
app.listen(3000, function(){
    console.log('server started on port 3000...');
})
