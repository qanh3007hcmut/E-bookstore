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

module.exports = {
    getOrders,
};