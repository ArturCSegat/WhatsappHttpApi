import sequelize from "../lib/sequelize";
import { DataTypes } from "@sequelize/core";


const Client = sequelize.define('client', {
    clientId: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    qrCode: DataTypes.STRING,
    ready: DataTypes.BOOLEAN,
    name: DataTypes.STRING,

    webHook: DataTypes.STRING
});

export default Client
