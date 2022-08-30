module.exports = (sequelize, dataTypes) => {
    let alias = "PaymentMethod";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

            
        },
      method: {
            type: dataTypes.STRING(20),
           
        }
    };
    let config = {
tableName:"payment_methods",
timestamps: false
    };

    const PaymentMethod = sequelize.define(alias, cols, config);
    PaymentMethod.associate = function(models){
        PaymentMethod.hasMany(models.Cart, {
            as: "Carts",
            foreignKey: "payment_methods_id"
        })
        
    }
    
    return PaymentMethod;
}