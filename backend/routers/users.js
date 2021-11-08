const express = require("express");
const passport = require("passport");
const { createUserSchema } = require("../utils/schemas/users");

const validationHandler = require("../utils/middleware/validationHandler");
const UsersServices = require("../services/users");

// JWT strategy
//
require("../utils/auth/authjwt");

function usersAPI(app) {
  const router = express.Router();
  const usersService = new UsersServices();

  router.get("/", async (req, res, next) => {
    try {
      const users = await usersService.getUsers();
      res.status(200).json({
        data: users,
        message: "all users",
      });
    } catch (err) {
      next(err);
    }
  });

  router.get("/:userId", async (req, res, next) => {
    const { userId } = req.params;
    try {
      const user = await usersService.getUser(userId);
      res.status(200).json({
        data: user,
        message: "retrived user",
      });
    } catch (err) {
      next(err);
    }
  });

  router.put("/", validationHandler(createUserSchema), async (req, res, next) => {
    const { body: data } = req;
    try {
      const createUser = await usersService.createUser(data);
      res.status(200).json({
        data: createUser,
        message: "user create",
      });
    } catch (err) {
      next(err);
    }
  });

  router.patch("/:userId", async (req, res, next) => {
    const { body: data } = req;
    const { userId } = req.params;
    try {
      const updateUserId = await usersService.updateUser(userId, data);
      res.status(200).json({
        data: updateUserId,
        message: "user updated",
      });
    } catch (err) {
      next(err);
    }
  });

  router.delete("/:userId", async (req, res, next) => {
    const { userId } = req.params;
    try {
      const deleteUserId = await usersService.deleteUser(userId);
      res.status(200).json({
        data: deleteUserId,
        message: "user was deleted",
      });
    } catch (err) {
      next(err);
    }
  });

  app.use("/api/v1/users", router);
}

module.exports = usersAPI;
