const controller = require("../controller/logic/equipo.controler");

module.exports = (app) => {

    app.get("/equipo", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.post("/equipo", (req, res, next) => {
    controller.createEquipo(req, res, next);
  });

  app.delete("/equipo", (req, res, next) => {
    controller.delete(req, res, next);
  });

  app.put("/equipo", (req, res, next) => {
    controller.updateEquipo(req, res, next);
  });

};
