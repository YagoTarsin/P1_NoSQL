const userRepository = require('../repositories/user.repository');

class UserController {
    async register(req, res) {
        try {
            const user = await userRepository.createUser(req.body);
            res.status(201).send(user);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userRepository.findByCredentials(username, password);
            if (!user) {
                return res.status(401).send({ error: 'Login falhou! Verifique as credenciais e tente novamente.' });
            }
            res.send({ message: 'Login bem-sucedido!', user });
        } catch (error) {
            res.status(500).send(error);
        }
    }
}

module.exports = new UserController();
