'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data_payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Data_payment.init({
    nama_barang: DataTypes.STRING,
    jumlah_barang: DataTypes.INTEGER,
    harga_barang: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Data_payment',
  });
  return Data_payment;
};