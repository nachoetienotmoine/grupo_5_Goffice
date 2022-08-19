module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let config = {

        id: {
            type: dataTypes.INTEGER
        },
        products_name: {
            type: dataTypes.VARCHAR,

        },
        description: {
            type: dataTypes.VARCHAR,

        },
       price: {
            type: dataTypes.INTEGER,

        },
        discount: {
            type: dataTypes.INTEGER,

        },
      image: {
            type: dataTypes.VARCHAR,

        },
        stock: {
            type: dataTypes.INTEGER,

        }
    };


    const Producto = sequelize.define(alias, cols, config);

    return Producto;
}