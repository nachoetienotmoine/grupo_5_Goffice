module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategory";
    let cols = {

        id_category_products: {
            type: dataTypes.INTEGER
        },
        id_products: {
            type: dataTypes.INTEGER,

        },
        Category: {
            type: dataTypes.VARCHAR,

        }
    };
    let config = {
        tableName:"category_products",
        timestamps: false
    };


    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product, {
            as: "Products",
            foreignKey: "id_products"
        })
    }
    return ProductCategory;
}