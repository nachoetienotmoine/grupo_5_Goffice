module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let config = {
        id: {
            type: dataTypes.INTEGER
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


    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;
}