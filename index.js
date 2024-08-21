const express = require("express");
const path = require("path");
const env = require("dotenv").config();
const router = require("./routes/index.js");

const app = express();
const port = process.env.PORT || 3000;
const reqPath = path.join(__dirname, '/views')

app.set('view engine', 'ejs');
app.set('views', reqPath);

app.use(express.static(reqPath));
app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Example app listening at http://localhost:${port}`);
    }
});

