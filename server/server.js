const path = require("path");
const express = require("express");
const session = require("express-session");
const sequelize = require("./config/connection");
//Initalizing app variable
const app = express();

const SequelizeStore = require("connect-session-sequelize")(session.Store);
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SECRET || "supersecretpassword",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session(sess));

//Listening
sequelize.sync({ force: false }).then(() => {
  http.listen(PORT, () =>
    console.log(`Now listening http://localhost:${PORT}/`)
  );
});
