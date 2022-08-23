module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {

        id_products: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false

        },
        description: {
            type: dataTypes.STRING(200),
            allowNull: false

        },
        price: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            allowNull: false

        },
        discount: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            allowNull: false

        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: false

        },
        stock: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            allowNull: false

        }
    };
    let config = {
        tableName:"products",
        timestamps: false
    }



    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, {
            as: "ProductCategory",
            foreignkey: "id_category_products"
        });
        
    }

    return Product;
};
