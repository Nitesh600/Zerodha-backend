const {model} = require("mongoose");

const positionSchema = require("../schemas/positionSchema");
const positionModel = model("position", positionSchema);

module.exports = {positionModel};