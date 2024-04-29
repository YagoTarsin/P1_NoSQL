const UserModel = require('../models/user.model');

class UserRepository {
    async findByCredentials(username, password) {
        return UserModel.findOne({ username, password }).exec();
    }

    async createUser(userData) {
        const user = new UserModel(userData);
        await user.save();
        return user;
    }
}

module.exports = new UserRepository();
