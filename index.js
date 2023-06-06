const express = require("express");
const app = express();
const cors = require("cors");
const { initDB } = require("./config/db-setup");
const bodyParser = require("body-parser");
const path = require("path");
const expressPinoLogger = require("express-pino-logger");
require("dotenv").config();

const routes = require("./routes/route");
const logger = require("./utils/logger");

app.use("/public", express.static(path.resolve(__dirname, "public")));

var whitelist = ["https://example.com"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const loggerMiddleware = expressPinoLogger({
  logger: logger,
  autoLogging: { ignorePaths: ["/favicon.ico"] },
});

app.use(loggerMiddleware);

app.use("/v1/api", routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || "server error";
  const data = err.data || null;
  res.status(status).json({ type: "error", message, data });
});

const port = process.env.PORT;

initDB((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
    app.listen(port, async () => {
      console.log(`Server started on port: ${port}`);
    });
  }
});
