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

  router.get("/:orderId", async (req, res, next) => {
    const { orderId } = req.params;
    try {
      const order = await ordersService.getOrder(orderId);
      res.status(200).json({
        data: order,
        message: "order retrived",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/", async (req, res, next) => {
    const { body: data } = req;

    try {
      const createProductId = await ordersService.createOrder(data);
      res.status(200).json({
        data: createProductId,
        message: "Order created",
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:orderId", async (req, res, next) => {
    const { orderId } = req.params;
    const { body: data } = req;
    try {
      const updateOrderId = ordersService.updateOrder(orderId, data);
      res.status(200).json({
        data: updateOrderId,
        message: "order was updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:orderId", async (req, res, next) => {
    const { orderId } = req.params;
    try {
      const removedOrderId = await ordersService.deleteOrder(orderId);
      res.status(200).json({
        data: removedOrderId,
        message: "the order was deleted",
      });
    } catch (err) {
      next(err);
    }
  });

  app.use("/api/v1/orders", router);
}

module.exports = ordersApi;
