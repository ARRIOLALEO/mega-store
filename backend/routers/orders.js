const express = require("express");
const OrdersService = require("../services/orders");
function ordersApi(app) {
  const router = express.Router();
  const ordersService = new OrdersService();
  router.get("/", async (req, res, next) => {
    const { clientId } = req.query;
    try {
      const orders = await ordersService.getOrders({ clientId });
      res.status(200).json({
        data: orders,
        message: "all orders",
      });
    } catch (err) {
      next(err);
    }
  });

  app.use("/api/v1/orders", router);
}

module.exports = ordersApi;
