/* eslint-disable no-undef */
const { getOrders, createOrder } = require('../models/order');

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

const saveOrder = async (req, res) => {
    try {
        const orderData = req.body;
        if (!orderData.customer_id || !orderData.order_items || orderData.order_items.length === 0) {
            return res.status(400).json({ message: 'Invalid order data' });
        }
        const result = await createOrder(orderData);
        res.status(201).json({ message: 'Order created successfully', orderId: result.orderId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating order', error: error.message });
    }
};

module.exports = {
    getOrder,
    saveOrder,
};