module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategory";
    let cols = {

        id_category_products: {
            type: dataTypes.BIGINT(11).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        Category: {
            type: dataTypes.STRING(45),
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
            foreignkey: "id_category_products"
        })
    }
    return ProductCategory;
}