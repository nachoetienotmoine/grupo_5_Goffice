module.exports = (sequelize, dataTypes) => {
    let alias = "ProductCategory";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
          
        },
        category: {
            type: dataTypes.STRING(100),
          
        }
    };
    let config = {
        tableName:"products_category",
        timestamps: false
    };


    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function(models){
        ProductCategory.hasMany(models.Product, {
            as: "Products",
            foreignKey: "id_products_category"
        });
    }
    return ProductCategory;
}