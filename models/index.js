const Sequelize = require('sequelize')
const sequelize = require('../config/sequelize')

const Curso = require('./curso')
const db = {}

const curso = Curso(sequelize, Sequelize.DataTypes)

db.curso = curso
db.sequelize = sequelize

module.exports = db
