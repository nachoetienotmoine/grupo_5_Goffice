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
            type: dataTypes.INTEGER,
            
        },
        gender: {
            type: dataTypes.STRING(1),
            
        },
        image: {
            type: dataTypes.STRING(200),
            
        },
        id_roles: {
            type: dataTypes.INTEGER,
            
        }

    };
    let config = {
        tableName:"users",
        timestamps: false
    };


    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.Role, {
            as: "Roles",
            foreignkey: "id_roles"
        })
       
    }
    return User;
}