const router = require('express').Router();

router.route('/')
    .get((req, res) => {
        res.render('pages/home', {pageTitle: 'Homepage'});
    });


router.route('/login')
    .get((req, res) => {
        res.render('pages/login', {pageTitle: 'Login'});
    })
    .post((req, res) => {
        res.send("Logon Request");
    });

router.route('/signup')
    .get((req, res) => {
        res.send("Signup Page");
    })
    .post((req, res) => {
        res.send("Sigunp Request")
    })

router.get('/profile', (req, res) => {
    res.send("Profile Page")
});

module.exports = router;