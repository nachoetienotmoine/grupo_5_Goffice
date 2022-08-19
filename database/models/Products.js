module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {

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
    let config = {
        tableName:"Products",
        timestamps: false
    };



    const Products = sequelize.define(alias, cols, config);

    Products.associate = function (models) {
        Products.belongsTo(models.ProductCategory, {
            as: "ProductCategory",
            foreignkey: "id_products"
        })
        return Products;
    }
}
