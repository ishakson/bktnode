const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set("views", "./views"); 
const adminRoutes = require('./routes/admin-route');
const shopRoutes = require('./routes/shop-route');
const errorsController = require('./controllers/error-controller');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
       
// routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);


app.use(errorsController.get404);


app.listen(3000, () => {
    console.log('listening on port 3000');
});
