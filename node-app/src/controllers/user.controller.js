const userRepository = require('../repositories/user.repository');

class UserController {
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userRepository.findByCredentials(username, password);
            if (user) {
                // Login bem-sucedido, redirecionar para Flask
                res.json({ success: true, redirectUrl: "http://localhost:5000/" });
            } else {
                res.status(401).json({ success: false, message: "Credenciais inválidas" });
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: "Erro interno do servidor" });
        }
    }
}

module.exports = new UserController();
