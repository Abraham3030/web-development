const express   = require('express');
const path      = require('path');

const app   = express();
const PORT  = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, './public');

app.use( express.static( publicPath ) );

app.get( '/', (req, res) => {
    res.sendFile( path.resolve( __dirname, './views/shopping-page.html'));
});


app.listen( PORT, () => {
    console.log('Servidor corriendo en el puerto: ', PORT);
});
