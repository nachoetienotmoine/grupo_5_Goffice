module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {

        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true

        },
        name: {
            type: dataTypes.STRING(225),
            

        },
        description: {
            type: dataTypes.STRING(400),
          

        },
        price: {
            type: dataTypes.INTEGER,
           

        },
        discount: {
            type: dataTypes.INTEGER,
            

        },
        image: {
            type: dataTypes.STRING(200),
            

        },
        stock: {
            type: dataTypes.INTEGER,
           

        },
        id_products_category: {
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName:"products",
        timestamps: false
    }



    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, {
            as: "ProductCategorys",
            foreignKey: "id_products_category"
        })
        ,
        Product.belongsToMany(models.Cart,{
            as:'Carts',
            through:'carts_products',
            foreignKey:'products_id',
            otherKey:'carts_id',
            timestamps: false
        }),
        Product.hasMany(models.UserProducts, {
            as: "UserProducts",
            foreignKey: "product_id"
        })
        
    }

    return Product;
};
