module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let config = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,

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

    Producto.associate = function (models) {
        Producto.belongsTo(models.Category, {
            as: "categoryProducts",
            foreignkey: "id_products"
        })
        return Producto;
    }
}
