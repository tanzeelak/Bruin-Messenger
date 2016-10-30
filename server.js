// Pull in everything we need to use, including Express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Set the view engine to handlebars
app.use(express.static('public'))
app.set('view engine', 'hbs')

// TODO: Serve up the login page
//app.get('/', (req, res, next) => {
    // TODO
//})
let user = null;
app.get('/', (req, res) => {
	if (!user)
		return res.redirect('/login.html');
	return res.redirect('/library');
});

/**
 * Handle POST request from the login form (note, this is different than
 * showing the login form, which is done by sending back public/login.html).
 * Set the global `user` variable to whatever was sent to us by the form
 * (the attribute "name" had value "name", so the information was put into
 * `res.body.name` by the body parser)
 */
app.post('/login', (req, res) => {
	user = req.body.name || null;
	res.redirect('/');
});
// TODO: Serve up the rooms page
app.get('/rooms', (req, res, next) => {
    // TODO
})

// TODO: 404 for all unregistered routes
app.use((req, res, next) => {
})

app.listen(port, () => {
  console.log('BruinMessenger running on port: ', port)
})
