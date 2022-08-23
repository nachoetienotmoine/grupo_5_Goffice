module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategory";
    let cols = {

        id_category_products: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_products: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        Category: {
            type: dataTypes.VARCHAR,
            allowNull: false
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
           
        })
    }
    return ProductCategory;
}