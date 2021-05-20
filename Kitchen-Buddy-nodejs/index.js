const express = require("express");
const cors = require("cors");

const customer = require("./routes/customer")
const ingredients = require("./routes/ingredients")
const category = require("./routes/category")
const location = require("./routes/location")
const confectionType = require("./routes/confectionType")

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/users", customer);
app.use("/api/ingredients", ingredients);
app.use("/api/category", category);
app.use("/api/location", location);
app.use("/api/confectionType", confectionType);

// set port, from environment variable or 5000
app.set('port', (process.env.PORT || 5000));

// listining on port
const port = app.get('port');
app.listen(port, () => console.log(`app is running on port ${port}...`));
