const jwt = require('jsonwebtoken');
const secrets = require('../../config/secret')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    const secret = secrets.jwtSecret;

   if (token) {
    jwt.verify(token,secret, (err, decodedToken) => {
        if (err) {
            res.status(401).json('Unauthorized')
        } else {
            req.decodedJwt = decodedToken;
            next();
        }
    });
   } else {
    res.status(401).json({message: 'You don not have high enough security clearance to access this information'});
   }
};