module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory";
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

    const UserCategory = sequelize.define(alias, cols, config);
    UserCategory.associate = function(models){
        UserCategory.hasMany(models.Users, {
            as: "Users",
            foreignKey: "id_category_user"
        })
    }
    
    return UserCategory;
}