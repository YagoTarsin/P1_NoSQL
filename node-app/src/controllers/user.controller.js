const userRepository = require('../repositories/user.repository');

class UserController {
    constructor() {
    }
    async login(req, res) {
        try {
            const { username, password } = req.body;
            const user = await userRepository.findByCredentials(username, password);
            if (user) {
                // Sucesso no login, enviar URL de redirecionamento para a aplicação Flask
                res.json({ success: true, redirectUrl: "http://localhost:5000/" });
            } else {
                // Falha no login, enviar mensagem de erro
                res.status(401).json({ success: false, message: "Credenciais inválidas" });
            }
        } catch (error) {
            console.error("Error during login:", error);
            res.status(500).json({ success: false, message: "Erro interno do servidor" });
        }
    }
    async register(req, res) {
        try {
            const { username, password, email } = req.body;
            const newUser = await userRepository.createUser({ username, password, email });
            res.status(201).json({ success: true, message: "Usuário criado com sucesso", userId: newUser._id });
        } catch (error) {
            console.error("Error during registration:", error);
            res.status(500).json({ success: false, message: "Erro ao registrar usuário" });
        }
    }
}

module.exports = new UserController();
