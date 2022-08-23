module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(45),
            allowNull: false

        },
        last_name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        gender: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        image: {
            type: dataTypes.STRING(45),
            allowNull: false
        }

    };
    let config = {
        tableName:"users",
        timestamps: false
    };


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.UserCategory, {
            as: "UsersCategory",
            foreignkey: "id_category_users"
        })
       
    }
    return User;
}