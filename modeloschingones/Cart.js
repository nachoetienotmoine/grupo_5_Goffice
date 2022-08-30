// module.exports = (sequelize, dataTypes) => {
//     let alias = "Cart";
//     let cols = {

//         id: {
//             type: dataTypes.INTEGER,
//             primaryKey: true
            
//         },
//        total_products: {
//             type: dataTypes.INTEGER,
           

//         },
//         total_price: {
//             type: dataTypes.INTEGER,
//             primaryKey: true
            
//         },
//        payment_methods_id: {
//             type: dataTypes.INTEGER,
           

//         },
//         users_id: {
//             type: dataTypes.INTEGER,
//             primaryKey: true
            
//         }
//     };
//     let config = {
// tableName:"carts",
// timestamps: false
//     };

//     const Cart = sequelize.define(alias, cols, config);
//     Cart.associate = function(models){
//       Cart.belongsTo(models.PaymentMethods, {
//             as: "PaymentMethods",
//             foreignKey: "payment_methods_id"
//         }),
//         Cart.belongsTo(models.User, {
//             as: "Users",
//             foreignKey: "user_id"
//         }),
//         Cart.belongsToMany(models.Product,{
//             as:'Products',
//             through:'carts_products',
//             foreignKey:'cart_id',
//             otherKey:'product_id',
//             timestamps: false
//         })
        
//     }
    
//     return Cart;
// }