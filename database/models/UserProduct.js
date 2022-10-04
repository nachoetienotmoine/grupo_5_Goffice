module.exports = (sequelize, dataTypes) => {
    let alias = "UserProducts";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        user_id: {
            type: dataTypes.INTEGER,


        },
        product_id: {
            type: dataTypes.INTEGER

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
            foreignKey: "user_id"
        })
        ,

        UserProducts.belongsTo(models.Product, {
                as: "Products",
                foreignKey: "product_id"
            })

    }
    return UserProducts;
}