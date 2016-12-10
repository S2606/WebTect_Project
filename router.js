//var Proj            = require('./Proj');
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================

     app.get('/', function(req, res) {
        res.render('proyecto.ejs'); // load the starting file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form

    app.get('/navbar', function (req,res) {
        res.render('navbar.ejs');
    });

    app.get('/leftbar', function (req,res) {
       res.render('leftbar.ejs');
    });

    app.get('/start', function (req,res) {
       res.render('start.ejs');
    });


    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs');
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('sign.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('afterloginstart.ejs');
            //user : req.user // get the user out of session and pass to template);
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/login', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        //failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/profile', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/afterloginnavbar.ejs', function (req, res) {
        res.render('afterloginnavbar.ejs');
    });

    app.get('/afterloginleftbar.ejs', function (req,res) {
        res.render('afterloginleftbar.ejs');
    });

    app.get('/afterloginrightbar.ejs', function (req, res) {
       res.render('afterloginrightbar.ejs');
    });

    app.get('/afterlogin.ejs',function (req,res) {
        res.render('afterlogin.ejs', {
           user :req.user
         });
    });

    app.get('/discover.ejs',function (req,res) {
        res.render('discover.ejs');
    });

    app.get('/create_a_project.ejs', function (req,res) {
       res.render('create_a_project.ejs');
    });

    /*app.get('/project', function (req,res) {
       var dom=req.body.maindomain.value;
       var tit=req.body.projecttitle;
       var file=req.body.projectimage.value;
       var des=req.body.projectdes;
       var newProj = new Proj();
        newProj.topicname=tit;
        newProj.topicdes=des;
        newProj.domain=dom;
        newProj.img=file;
        newProj.save();
    });*/

    app.get('/invite_friends.ejs', function (req,res) {
        res.render('invite_friends.ejs');
    });

    app.get('/viewproject.ejs', function (req,res) {
        res.render('viewproject.ejs');
    });

    app.get('/about', function (req,res) {
       res.render('about.ejs');
    });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}