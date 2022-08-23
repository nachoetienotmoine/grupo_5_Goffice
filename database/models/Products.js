module.exports = (sequelize, dataTypes) => {
    let alias = "Products";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        name: {
            type: dataTypes.VARCHAR,
            allowNull: false

        },
        description: {
            type: dataTypes.VARCHAR,
            allowNull: false

        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        discount: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        image: {
            type: dataTypes.VARCHAR,
            allowNull: false

        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false

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
            foreignkey: "id_category_products"
        })
        return Products;
    }
}
