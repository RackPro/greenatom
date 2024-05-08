const sequelize = require("../../db");
const {DataTypes} = require("sequelize");

const Roles = sequelize.define("tokens", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    roles: {type: DataTypes.STRING, unique: true}
}, {timestamps: false});

const Users = sequelize.define("users",{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: true},
    id_roles: {type: DataTypes.INTEGER}
},{timestamps: false});

const Tokens = sequelize.define("tokens", {
    id: {type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true},
    id_user: {type: DataTypes.INTEGER, unique: true},
    accessToken: {type: DataTypes.STRING, unique: true},
    refreshToken: {type: DataTypes.STRING, unique: true}
},{timestamps: false})

Users.hasMany(Roles);
Roles.belongsTo(Users);
Users.hasOne(Tokens, { onDelete: "cascade"});

module.exports = {
    Users,
    Roles,
    Tokens
}