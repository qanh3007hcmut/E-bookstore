const { getOrders } = require('../models/order');

const getOrder = async (req, res) => {
    const { username } = req.query;
    if (!username) {
        return res.status(400).json({ success: false, message: "Username error" });
    }
    try {
        const orders = await getOrders(username);
        if (!orders.length) {
            return res.status(404).json({ success: false, message: "No orders found." });
        }
        res.status(200).json({ success: true, orders: orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    getOrder,
};