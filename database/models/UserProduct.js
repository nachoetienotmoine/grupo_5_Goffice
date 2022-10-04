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
        products_id: {
            type: dataTypes.INTEGER

        }

    };
    let config = {
        tableName: "users_products",
        timestamps: false
    };


    const UserProducts = sequelize.define(alias, cols, config);

    UserProducts.associate = function (models) {


        UserProducts.hasMany(models.User, {
            as: "Users",
            foreignKey: "user_id"
        })
        ,

        UserProducts.hasMany(models.Product, {
                as: 'Products',
                foreignKey: 'products_id'
            })

    }
    return UserProducts;
}