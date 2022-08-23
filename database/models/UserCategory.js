module.exports = (sequelize, dataTypes) => {
    let alias = "UserCategory";
    let cols = {

        id_category_users: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        id_users: {
            type: dataTypes.INTEGER,
            allowNull: false

        },
        category: {
            type: dataTypes.VARCHAR,
            allowNull: false

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
            
        })
    }
    
    return UserCategory;
}