module.exports = (sequelize, dataTypes) => {
    let alias = "usersCategory";
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


    const userCategory = sequelize.define(alias, cols, config);

    return userCategory;
}