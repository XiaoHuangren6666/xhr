class UserController {
    async registerUser(req, res) {
        const { username, password } = req.body;
        // 这里添加用户注册逻辑，例如验证和保存用户到数据库
        res.status(201).json({ message: 'User registered successfully' });
    }

    async loginUser(req, res) {
        const { username, password } = req.body;
        // 这里添加用户登录逻辑，例如验证用户凭据
        res.status(200).json({ message: 'User logged in successfully' });
    }
}

export default new UserController();