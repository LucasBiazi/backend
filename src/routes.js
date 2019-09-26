const { Router } = require("express");
const express = require("express");
const routes = express.Router();
const UsuariosController = require("./Controllers/UsuariosControllers");

routes.post("/Usuarios", UsuariosController.store);
routes.get("/Usuarios/:email", UsuariosController.index);
module.exports = routes;
