
class User {

    // definig all attributes of the model
    constructor() {
        this.idUser;
        this.emailUser;
        this.nameUser;
        this.passwordUser;
    }

    // getters and setters
    getIdUser() {
        return this.idUser;
    }
    setIdUser(idUser) {
        this.idUser = idUser;
    }

    getEmailUser() {
        return this.emailUser;
    }
    setEmailUser(emailUser) {
        this.emailUser = emailUser;
    }

    getNameUser() {
        return this.nameUser;
    }
    setNameUser(nameUser) {
        this.nameUser = nameUser;
    }

    getPasswordUser() {
        return this.passwordUser;
    }
    setPasswordUser(passwordUser) {
        this.passwordUser = passwordUser;
    }

}

module.exports = User;