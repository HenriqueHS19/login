const connection = require('./database');

function create(sql) {
    connection.query(sql, function(err, results, fields){
        if (err) {
            return console.log('Error: ' + err);
        }
        return console.log('Created tables');
    });
}

module.exports = {
    createTables() {
        let sql = "Create table if not exists tbUser ( \n"
                        + "idUser int Primary Key AUTO_INCREMENT \n"
                        + ",emailUser varchar(40) not null \n"
                        + ",nameUser varchar(40) not null \n"
                        + ",passwordUser varchar(40) not null \n"
                  + ");";

        create(sql);
    }
}