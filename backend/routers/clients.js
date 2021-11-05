const express = require("express");
const ClientsService = require("../services/clients");

function clientsAPI(app) {
  const router = express.Router();
  const clientsService = new ClientsService();

  router.get("/", async (req, res, next) => {
    try {
      const clients = await clientsService.getClients();
      res.status(200).json({
        data: clients,
        message: "all clients",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:clientId", async (req, res, next) => {
    const { clientId } = req.params;
    try {
      const client = await clientsService.getClient(clientId);
      res.status(200).json({
        data: client,
        message: "retrived client",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/", async (req, res, next) => {
    const { body: data } = req;
    try {
      const createClientId = await clientsService.createClient(data);
      res.status(200).json({
        data: createClientId,
        message: "Client create",
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:clientId", async (req, res, next) => {
    const { body: data } = req;
    const { clientId } = req.params;
    try {
      const updateCustomerId = await clientsService.updateClient(clientId, data);
      res.status(200).json({
        data: updateCustomerId,
        message: "client was updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:clientId", async (req, res, next) => {
    const { clientId } = req.params;
    const { body: data } = req;
    try {
      const deleteCleintId = await clientsService.deleteClient(clientId);
      res.status(200).json({
        data: deleteCleintId,
        message: "client was deleted",
      });
    } catch (err) {
      next(err);
    }
  });

  app.use("/api/v1/clients", router);
}

module.exports = clientsAPI;
