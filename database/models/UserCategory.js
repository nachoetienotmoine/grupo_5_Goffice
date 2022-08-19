module.exports = (sequelize, dataTypes) => {
    let alias = "userCategory";
    let config = {

        id_category_products: {
            type: dataTypes.INTEGER
        },
        id_users: {
            type: dataTypes.INTEGER,

        },
        category_users: {
            type: dataTypes.VARCHAR,

        }
    };


    const usercategory = sequelize.define(alias, cols, config);

    return usercategory;
}