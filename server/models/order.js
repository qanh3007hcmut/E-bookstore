const database = require('../db/database');

const getOrders = async (username) => {
    const query = `
        SELECT
            o.order_id,
            o.status,
            o.discount_id,
            d.amount AS discount_amount,
            o.invoice_id,
            i.invoice_date,
            i.payment_method,
            i.money_paid,
            oi.book_id,
            b.book_name,
            b.book_price,
            oi.quantity,
            oh.order_history_id
        FROM
            Customer_account ca
        JOIN
            Order_history oh ON ca.username = oh.username
        JOIN
            \`Order\` o ON oh.order_history_id = o.order_history_id
        LEFT JOIN
            Discount d ON o.discount_id = d.discount_id
        LEFT JOIN
            Invoice i ON o.invoice_id = i.invoice_id
        JOIN
            Order_item oi ON o.order_id = oi.order_id
        JOIN
            Book b ON oi.book_id = b.book_id
        WHERE
            ca.username = ?;
    `;
    const [rows] = await database.query(query, [username]);
    return rows;
};

/* Order request
{
    "customer_id": "user1",
    "discount_id": "abc",
    "payment_method": "abc",
    "money_paid" : 500,
    "order_items": [
        {
            "book_id" : 1,
            "quantity" : 2
        },
        {
            "book_id" : 2,
            "quantity" : 1
        }
    ]
}
*/

const createOrder = async (orderData) => {
    try {
        await database.beginTransaction();
        const [orderHistoryResult] = await database.query(
            'INSERT INTO Order_history (customer_id) VALUES (?)',
            [orderData.customer_id]
        );
        const orderHistoryId = orderHistoryResult.insertId;
        const [invoiceResult] = await database.query(
            `INSERT INTO Invoice (invoice_date, customer_id, payment_method, money_paid)
            VALUES (CURDATE(), ?, ?, ?)`,
            [orderData.customer_id, orderData.payment_method, orderData.money_paid]
        );
        const invoiceId = invoiceResult.insertId;
        const [orderResult] = await database.query(
            `INSERT INTO \`Order\` (customer_id, status, discount_id, order_history_id, invoice_id)
            VALUES (?, ?, ?, ?, ?)`,
            [orderData.customer_id, orderData.status || 'Pending', orderData.discount_id, orderHistoryId, invoiceId]
        );
        const orderId = orderResult.insertId;
        const orderItemsData = orderData.order_items.map((item) => [item.book_id, orderId, item.quantity]);
        await database.query(
            `INSERT INTO Order_item (book_id, order_id, quantity) VALUES ?`,
            [orderItemsData]
        );
        await database.commit();
        return { orderId };
    } catch (error) {
        await database.rollback();
        throw error;
    }
};

module.exports = {
    getOrders,
    createOrder,
};