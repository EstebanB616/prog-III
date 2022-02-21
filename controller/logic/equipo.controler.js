/**dto */
const dto = require("../../model/dto/equipo.dto");

const notHelper = require("../helpers/notification.helper");


exports.createEquipo = (req, res, next) => {
  let eq = {
    id: req.body.id,
    nombre: req.body.nombre,
    escudo: req.body.escudo,
    estadio: req.body.estadio,
    pais: req.body.pais,
    ciudad: req.body.ciudad,
  };
  dto.save(eq, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    notHelper.sendSMS();
    res.status(201).json({
      info: data
    });
  });
};

exports.updateEquipo = (req, res, next) => {
  let eq = {
    id: req.body.id,
    nombre: req.body.nombre,
    escudo: req.body.escudo,
    estadio: req.body.estadio,
    pais: req.body.pais,
    ciudad: req.body.ciudad,
  };
  dto.update({ _id: req.body.id }, eq, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(201).json({
      info: data
    });
  });
};

exports.getAll = (req, res, next) => {
  dto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json(
          {
            error: err
          }
      );
    }
    res.status(200).json({
      info: data
    });
  });
};

exports.getByCode = (req, res, next) => {
  dto.getByCode({ id: req.params.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(200).json({
      info: data
    });
  });
};

exports.delete = () => {
  dto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    res.status(204).json();
  });
};
