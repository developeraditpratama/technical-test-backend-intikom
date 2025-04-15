const { Sequelize } = require('sequelize');

// Konfigurasi untuk koneksi MySQL
const sequelize = new Sequelize('technical-test-intikom', 'root', '', {
    host: '127.0.0.1', // atau alamat host yang sesuai
    dialect: 'mysql',  // pastikan sesuai dengan database yang digunakan
    logging: false     // nonaktifkan logging jika tidak diperlukan
});

module.exports = sequelize;
