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


    const Users = sequelize.define(alias, cols, config);

    Users.associate = function (models) {
        Users.belongsTo(models.UserCategory, {
            as: "UsersCategory",
            foreignkey: "id_category_users"
        })
        return Users;
    }
    return Users;
}