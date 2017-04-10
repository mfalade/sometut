module.exports = {
  port: process.env.PORT,
  cookie: {
    secret: process.env.COOKIE_SECRET_KEY,
  },
  session: {
    secure: true
  },
  db: {
    provider: "mongoose",
    connection: "mongodb://mayor:jobify@ds149800.mlab.com:49800/jobify"
  },
  redis: {
  },
  log: "debug"
};