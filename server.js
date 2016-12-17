// Pull in everything we need to use, including Express
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// Set the view engine to handlebars
app.use(express.static('public'))
app.set('view engine', 'hbs')

// TODO: Serve up the login page
app.get('/', (req, res, next) => {
    res.render('login');
})

// TODO: Serve up the rooms page
app.get('/rooms', (req, res, next) => {
    // TODO
    res.render('rooms');
})

// TODO: 404 for all unregistered routes
app.use((req, res, next) => {
  res.status(404).render('404')
})

app.listen(port, () => {
  console.log('BruinMessenger running on port: ', port)
})
