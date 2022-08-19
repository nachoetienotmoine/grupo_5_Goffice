module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let config = {
            

    };


    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}