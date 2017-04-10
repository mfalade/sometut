module.exports = {
  port: 3000,
  log: "debug",
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
  session: {
    secure: true
  },
  db: {
    provider: "mongoose",
    connection: "mongodb://localhost/jobify"
  },
  redis: {
  }
};