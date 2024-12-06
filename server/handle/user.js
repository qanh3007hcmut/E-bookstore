/* eslint-disable no-undef */
const customers = require('../models/customer')

async function get_info(req, res) {
    const { username } = req.query;
    const user_info = await customers.info(username);

    if (user_info !== 0) {
        return res.status(200).json({ message: 'Get Info successful', info: user_info });
    } else {
        return res.status(404).json({ message: 'Fail to get INFO' });
    }
}

module.exports = {
    get_info
};