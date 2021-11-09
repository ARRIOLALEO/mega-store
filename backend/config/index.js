require("dotenv").config();

const config = {
  dev: process.env.NODE_ENV !== "production",
  port: process.env.PORT || 3000,
  portRedis: process.env.REDISPORT || 6379,
  cors: process.env.CORTS,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  authJwkSecret: process.env.AUTH_JWT_SECRET,
};

module.exports = { config };
