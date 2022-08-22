module.exports = (sequelize, dataTypes) => {
    let alias = "Users";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.VARCHAR,
            allowNull: false

        },
        last_name: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        email: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        password: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        gender: {
            type: dataTypes.VARCHAR,
            allowNull: false
        },
        image: {
            type: dataTypes.VARCHAR,
            allowNull: false
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
       
    }
    return Users;
}