module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
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


    const Category = sequelize.define(alias, cols, config);

    return Category;
}