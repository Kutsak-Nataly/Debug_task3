const {DataTypes} = require('sequelize');
const sequelize = require('../db');
const User = require('../models/user');

const Game = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },

    title: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },

    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    studio: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    esrb_rating: {
        type: DataTypes.CHAR(5),
        allowNull: false,
    },

    user_rating: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },

    have_played: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    }
});

Game.belongsTo(User, {
    foreignKey: 'owner_id',
    sourceKey: User.id,
});

module.exports = Game;
