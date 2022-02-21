/**pauqetes */

const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const validator = require("mongoose-unique-validator");


/**creacion de esquema */
const equipoSchema = new mongoose.Schema({
  id: {
    type: "number",
    required: true,
    unique: true
  },
  nombre: {
    type: "String",
    required: true

  },
  escudo: {
    type: "String",
    required: true
  },
  estadio: {
    type: "String",
    required: true
  },
  pais: {
    type: "String",
    required: true
  },
  ciudad: {
    type: "String",
    required: true
  },
});

/**exportacion */
equipoSchema.plugin(validator);
module.exports = equipoSchema;
