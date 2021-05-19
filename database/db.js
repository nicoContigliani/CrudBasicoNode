const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jesus6388',
    database: 'crud'

});
conexion.connect((error) => {
    if (error) {
        console.error('el error es :' + error);
        return
    } else {
        console.log("conectado correctamente")
    }
});

module.exports=conexion;