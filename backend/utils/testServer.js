const express = require("express");
const suppertest = require("supertest");

function testServer(route) {
  const app = express();
  route(app);
  return suppertest(app);
}

module.exports = testServer;
