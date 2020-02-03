const connection = require('../database/database');
const User = require('../models/User');

module.exports = {

    async login(req, res) {
        
        const { nameUser, passwordUser } = req.body;

        const user = new User();
        user.setNameUser(nameUser);
        user.setPasswordUser(passwordUser);

        const sql = "Select idUser, emailUser, nameUser, passwordUser from tbUser \n"
                        + "Where \n"
                            + "nameUser LIKE '" + user.getNameUser() + "' AND passwordUser LIKE '" + user.getPasswordUser() + "'";

        connection.query(sql, function(err, results) {
            if (err) {
                return res.json({ error: err });
            }
            if (!results) {
                return res.json({ ok: false });
            }
            return res.json(results);
        })

    },

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

    async update(req, res) {

        const { emailUser, nameUser, passwordUser } = req.body;

        const user = new User();
        user.setEmailUser(emailUser);
        user.setNameUser(nameUser);
        user.setPasswordUser(passwordUser);

        const sql = "Update tbUser \n"
                        + "SET \n"
                            + "nameUser = '" + user.getNameUser() + "' \n"
                            + ",passwordUser = '" + user.getPasswordUser() + "' \n"
                                + " Where \n"
                                    + "emailUser LIKE '" + user.getEmailUser() + "';";

        connection.query(sql, function (err) {
            if (err) {
                return res.json({ error: err });
            }
            return res.json({ ok: true });
        })
    }
}