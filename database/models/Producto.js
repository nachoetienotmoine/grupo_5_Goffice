module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let config = {
            

    };


    const Producto = sequelize.define(alias, cols, config);

    return Producto;
}