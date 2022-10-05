module.exports = (sequelize, dataTypes) => {
    let alias = "UserProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        users_id: {
            type: dataTypes.INTEGER,
            primaryKey: true

        },
        product_id: {
            type: dataTypes.INTEGER,
            primaryKey: true
        }

    };
    let config = {
        tableName: "users_products",
        timestamps: false
    };


    const UserProducts = sequelize.define(alias, cols, config);

    UserProducts.associate = function (models) {


        UserProducts.belongsTo(models.User, {
            as: "Users",
            foreignKey: "users_id"
        })
        ,

        UserProducts.belongsTo(models.Product, {
                as: "Products",
                foreignKey: "product_id"
            })

    }
    return UserProducts;
}