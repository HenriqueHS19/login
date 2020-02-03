const User = require('../models/User');
const connection = require('../database/database');

module.exports = {

    async create(req, res) {

        const { emailUser, nameUser, passwordUser } = req.body;

        const user = new User();
        user.setEmailUser(emailUser);
        user.setNameUser(nameUser);
        user.setPasswordUser(passwordUser);
        
        const sql = "Insert into tbUser (emailUser, nameUser, passwordUser) \n"
                    + " Values ( "
                            + "'" + user.getEmailUser() + "'" 
                            + ", '" + user.getNameUser() + "'"
                            + ", '" + user.getPasswordUser() + "'"
                    + " );";

        connection.query(sql, function (err) {
            if (err) {
                return res.json({ ok: err });
            }
            return res.json({ ok: true });
        });
    },

    async read(req, res) {

        const sql = "Select idUser, emailUser, nameUser, passwordUser from tbUser";

        connection.query(sql, function (err, results) {
            if (err) {
                return res.json({ error: err });
            }
            return res.json(results);
        });

    },

    async readOne(req, res) {

        const { idUser } = req.params;

        const sql = "Select nameUser from tbUser \n"
                        + "Where \n"
                            + "idUser = " + idUser ;

        connection.query(sql, function (err, results) {
            if (err) {
                return res.json({ error: err });
            }
            return res.json(results);
        });

    }

   
}