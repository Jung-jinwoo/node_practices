const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql' // 사용하는 DB 종류
});

// Import Mapping Object
const User = require('./User')(sequelize);
//const Board = require('./Board')(sequelize);
const Guestbook = require('./Guestbook')(sequelize);

// DB에 반영(DDL)
User.sync({
    force: process.env.TABLE_CREATE_ALWAYS === 'true',
    alter: process.env.TABLE_ALTER_ALWAYS === 'true'
});

// Guestbook.sync({

// });

// Export Mapping Object
module.exports = {User, Guestbook};