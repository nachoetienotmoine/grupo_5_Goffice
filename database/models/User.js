module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        first_name: {
            type: dataTypes.STRING(100),


        },
        last_name: {
            type: dataTypes.STRING(100),

        },
        email: {
            type: dataTypes.STRING(100),

        },
        password: {
            type: dataTypes.STRING(200),

        },
        phone_number: {
            type: dataTypes.STRING(200),

        },
        gender: {
            type: dataTypes.STRING(10),

        },
        image: {
            type: dataTypes.STRING(200),

        },
        id_roles: {
            type: dataTypes.INTEGER,

        }

    };
    let config = {
        tableName: "users",
        timestamps: false
    };


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {


        User.belongsTo(models.Role, {
            as: "Roles",
            foreignKey: "id_roles"
        })
        ,

            User.hasMany(models.Cart, {
                as: 'Carts',
                foreignKey: 'users_id'
            }),
            User.hasMany(models.UserProducts, {
                as: "UserProducts",
                foreignKey: "users_id"
            })

    }
    return User;
}