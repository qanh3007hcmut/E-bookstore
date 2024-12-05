/* eslint-disable no-undef */
const customers = require('../models/customer')

async function login(req, res, next) {
    const { username, password } = req.body;
    const user = await customers.find(username, password);
    console.log(user)
    if (user === 2) {
        return res.status(200).json({ message: 'Login successful', user: { username } });
    } else if (user === 1) {
        return res.status(402).json({ message: 'Invalid password' });
    } else {
        return res.status(401).json({ message: 'Invalid username' });
    }
}

module.exports = {
    login
};