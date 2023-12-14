const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config()


async function hashPassword(plaintextPassword) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(plaintextPassword, salt);
}

async function comparePasswords(userEnteredPassword, storedHash) {
    return await bcrypt.compare(userEnteredPassword, storedHash);
}

const verifyToken = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: Token not provided' });
    }

    try {
        console.log(process.env.JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded)
        req.userID = decoded.id;
        req.username = decoded.username;
        next();
    } catch (error) {
        return res.status(401).json(error);
    }
};

module.exports = {
    hashPassword,
    comparePasswords,
    verifyToken
};
