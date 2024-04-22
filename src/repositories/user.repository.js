const UserModel = require('../models/user.model');

class UserRepository {
    async createUser(userData) {
        const user = new UserModel(userData);
        await user.save();
        return user;
    }

    async findByCredentials(username, password) {
        const user = await UserModel.findOne({ username });
        if (!user) {
            throw new Error('Usuário não encontrado!');
        }

        const isMatch = (user.password === password);
        if (!isMatch) {
            throw new Error('Senha inválida!');
        }
        return user;
    }
}

module.exports = new UserRepository();
