module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let config = {

        id: {
            type: dataTypes.INTEGER
        },
        first_name: {
            type: dataTypes.VARCHAR,

        },
        last_name: {
            type: dataTypes.VARCHAR,

        },
        email: {
            type: dataTypes.VARCHAR,

        },
        password: {
            type: dataTypes.VARCHAR,

        },
        gender: {
            type: dataTypes.VARCHAR,

        },
        image: {
            type: dataTypes.VARCHAR,

        }
    };


    const Producto = sequelize.define(alias, cols, config);

    return Producto;
}