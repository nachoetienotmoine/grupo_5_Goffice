module.exports = (sequelize, dataTypes) => {
    let alias = "Role";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true
            
        },
        role: {
            type: dataTypes.STRING(100),
           

        }
    };
    let config = {
tableName:"roles",
timestamps: false
    };

    const Role = sequelize.define(alias, cols, config);
    Role.associate = function(models){
        Role.hasMany(models.User, {
            as: "Users",
            foreignKey: "id_roles"
        })
    }
    
    return Role;
}