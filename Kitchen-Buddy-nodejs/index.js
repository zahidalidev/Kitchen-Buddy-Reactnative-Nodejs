const express = require("express");
const cors = require("cors");

const customer = require("./routes/customer")

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/users", customer);

// set port, from environment variable or 5000
app.set('port', (process.env.PORT || 5000));

// listining on port
const port = app.get('port');
app.listen(port, () => console.log(`app is running on port ${port}...`));
