module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let config = {
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


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        Usuario.belongsTo(models.Category, {
            as: "categoryUser",
            foreignkey: "id_users"
        })
        return User;
    }
    return User;
}