const express = require("express");
const routerAPI = require("./routes");
const { logErrors, errorHandler, boomHandler } = require("./middlewares/errorHandler");

const app = express();
const port = 3000;

app.use(express.json());

routerAPI(app);

app.use(logErrors);
app.use(boomHandler);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: www.localhost:${port}`));
