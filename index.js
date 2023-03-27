const cors = require("cors");
const express = require("express");
const routerAPI = require("./routes");
const { logErrors, errorHandler, boomHandler } = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = [
    'https://localhost:8080',
    'https://myapp.com'
];
const options = {
    origin: (origin, callback) => {
        if(whitelist.includes(origin)) callback(null, true);
        else callback(new Error("CORS not enabled for this site"))
    } 
}
app.use(cors(options));

routerAPI(app);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: www.localhost:${port}`));
