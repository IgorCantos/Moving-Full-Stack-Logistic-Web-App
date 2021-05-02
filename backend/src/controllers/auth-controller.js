require('dotenv-safe').config();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let authController = {

    isAuth: async (req, res) => {
        // const userId = req.user.id;

        // if (!userId) res.status(401).json({ error: 'Usuário não autenticado.' })

        res.status(200).json({ message: 'Usuário Auternticado.' })
    },

    login: async (req, res) => {

        try {
            const { email, password } = req.body;

            const user = await User.findOne({ email }).select('+password');

            if (!user || !await bcrypt.compare(password, user.password))
                return res.status(400).json({ error: 'Usuário e/ou senha inválidos.' })

            user.password = undefined;

            const id = user.id;
            const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
                expiresIn: 30000000
            })

            res.cookie('moving_token', token, { httpOnly: true })
            
            res.send({
                user,
                message: 'Login efetuado com sucesso',
                token: token
            });
        } catch (error) {
            return res.status(400).json('Error: ' + error)
        }
    },

    createNewUser: async (req, res) => {
        const { username, email, password } = req.body;

        try {
            const newUser = await new User({ username, email, password });

            if (await User.findOne({ email }))
                return res.status(400).json({
                    "emailError": "Esse e-mail já está sendo utilizado."
                })

            newUser.save()

            const id = newUser.id;

            const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
                expiresIn: 30000000
            })

            res.cookie('moving_token', token, { httpOnly: true })

            res.send({
                auth: true,
                token: token,
                message: 'Usuário criado com sucesso.'
            });

        } catch (error) {
            return res.status(400).json('Error: ' + error);
        }
    }
}

module.exports = {
    authController
}