module.exports = (sequelize, dataTypes) => {
    let alias = "usersCategory";
    let cols = {

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
    let config = {
tableName:"user_category",
timestamps: false
    };

    const userCategory = sequelize.define(alias, cols, config);

    return userCategory;
}