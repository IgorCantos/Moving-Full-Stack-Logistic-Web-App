const jwt = require('jsonwebtoken');

let verifyJWT = {
    isValidOrNot: (req, res, next) => {
        
        const tokenWithName = req.headers.cookie;

        if (!tokenWithName) return res.status(401).json({ error: 'Usuário não logado' })

        const token = tokenWithName.split('=')[1]

        jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
            if (err) return res.status(500).json({ error: 'Falha na autenticação do Token' })

            req.user = decoded;
            next()
        });
    }
}

module.exports = {
    verifyJWT
}