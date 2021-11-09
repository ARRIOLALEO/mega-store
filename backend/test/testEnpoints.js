const assert = require("assert");
const proxyquire = require("proxyquire");

const { productsMock, ProductServicesMock } = require("../utils/mocks/products");
const testServer = require("../utils/testServer");

describe("routes - products", function () {
  const route = proxyquire("../routers/products", {
    "../services/products": ProductServicesMock,
  });

  const request = testServer(route);
  describe("GET /products", function () {
    it("should respond with status 200", function (done) {
      request.get("/api/v1/products/").expect(200, done);
    });
    it("should respond with the list of movies", function (done) {
      request.get("/api/v1/products").end((err, res) => {
        assert.deepEqual(res.body, {
          data: productsMock,
          message: "all products",
        });
        done();
      });
    });
  });
});
