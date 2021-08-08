'use strict';
const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Student extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Student.init({
        id: {type: DataTypes.INTEGER, primaryKey: true},
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false}
    }, {
        sequelize,
        modelName: 'Student',
    });
    return Student;
};