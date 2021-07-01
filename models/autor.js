//DataTypes es parte de sequelize, nos permite asignar datos y tipos.
//autor: nombre de la tabla
module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('autor', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreCompleto: DataTypes.STRING(100)
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    Autor.associate = (models) => {
        Autor.hasMany(models.libro);
    };        
    return Autor;
}