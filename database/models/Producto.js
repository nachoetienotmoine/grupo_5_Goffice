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



    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, {
            as: "categoryProducts",
            foreignkey: "id_products"
        })
        return Product;
    }
}
