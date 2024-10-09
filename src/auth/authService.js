const { createHash } = require("crypto");
const jsonwebtoken = require("jsonwebtoken")
const {UserAlreadyExists } = require("./errors/UserAlreadyExists");
const { WrongCredentials } = require("./errors/WrongCredentials");
class AuthService {
    constructor(repository) {
        this.repository = repository;
    }

    async createUser(name, surname, email, password){
        const findUser = await this.repository.findUserByEmail(email);
        let hashpassword = createHash('sha256').update(password).digest('hex');
        if(findUser.rows.length){
            throw new UserAlreadyExists();
        }
        else{
            const user = await this.repository.createNewUser(name, surname, email, hashpassword)
            return user;
        }
        
    }

    async loginUser(email, password){
        let hashpassword = createHash('sha256').update(password).digest('hex');
        let userLogin = await this.repository.findUserByEmail(email)
        if (userLogin.password === hashpassword){
            return {
                token: jsonwebtoken.sign({
                    id: userLogin.id
                }, 'secret')
            };
        }
        else{
            throw new WrongCredentials();
        }
    }

    
}

module.exports = { AuthService };