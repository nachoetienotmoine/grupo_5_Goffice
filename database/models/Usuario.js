module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type: dataTypes.VARCHAR,

        },
        last_name: {
            type: dataTypes.VARCHAR,

        },
        email: {
            type: dataTypes.VARCHAR,

        },
        password: {
            type: dataTypes.VARCHAR,

        },
        gender: {
            type: dataTypes.VARCHAR,

        },
        image: {
            type: dataTypes.VARCHAR,

        }

    };
    let config = {
        tableName:"users",
        timestamps: false
    };


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        Usuario.belongsTo(models.UserCategory, {
            as: "categoryUser",
            foreignkey: "id_users"
        })
        return User;
    }
    return User;
}