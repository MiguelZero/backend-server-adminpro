var jwt = require('jsonwebtoken');

var SEED = require('../config/config').SEED;

// ==========================================================
//  Verificar TOKEN
// ==========================================================
exports.verificaToken = function(req, res, next) {

    let token = req.query.token;
    jwt.verify(token, SEED, (err, decoded) => {
        if (err){
            return res.status(401).json({
                ok: false,
                mensaje: 'Token incorrecto',
                errors: err
            });
        }

        req.usuario = decoded.usuario;
        next();
    });
};