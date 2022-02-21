/**paquetes */
const mongoose = require("mongoose");
const db = require("../db-connections/mongodb");


/**esquemas usados */
const schema = require("../schema/equipo.schema");
db();

schema.static = {
  create: function (data, cb) {
    let doc = new this(data);
    doc.save(cb);
  },
  getAll: function (query, cb) {
    this.find(query, cb);
  },
  getById: function (query, cb) {
    this.find(query, cb);
  },
  update: function (query, data, cb) {
    this.findOneAndUpdate(query, { set: data }, { new: true }, cb);
  },
  delete: function (query, cb) {
    this.findOneAndDelete(query);
  },
};
const dto = mongoose.model("coll_equipo", schema);
module.exports=dto;
