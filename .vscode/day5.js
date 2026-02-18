const jwt = require('jsonwebtoken');

const key = 'qwerty';

const createToken = () => {
    const userData = {
        id: 1,
        username: 'xyz'
    };

    return jwt.sign(userData, key);
};

const verifyToken = (token) => {
    return jwt.verify(token, key);
};

let token = createToken();
verifyToken(token);