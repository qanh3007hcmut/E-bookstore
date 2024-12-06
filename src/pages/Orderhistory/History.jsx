/* eslint-disable no-unused-vars */
import React, { useMemo } from "react";
import PropTypes from "prop-types";

const History = ({orders}) => {

    const groupedOrders = useMemo(() => {
        const grouped = {};
        orders.forEach((order) => {
            if (!grouped[order.order_id]) {
                grouped[order.order_id] = [];
            }
            grouped[order.order_id].push(order);
        });
        return Object.entries(grouped); // Convert to an array of [order_id, items[]]
    }, [orders]);

    return (
        <div className="pt-20 p-4 flex flex-col h-screen mx-8">
            {groupedOrders.map(([orderId, items]) => {
                // Calculate total price for the order
                const totalSumPrice = items.reduce((sum, item) => sum + item.book_price * item.quantity, 0);

                return (
                    <div key={orderId} className="mb-6 p-4 border rounded-lg shadow-md bg-white">
                        {/* Order Header */}
                        <div className="flex justify-between items-center mb-4 p-4 border-b-2">
                            <h2 className="text-2xl font-black">Order ID: {orderId}</h2>
                            <span
                                className={`px-3 py-1 text-base font-extralight rounded-full ${
                                    items[0].status === "Pending Payment"
                                        ? "bg-red-500 text-white"
                                        : items[0].status === "Completed"
                                        ? "bg-green-500 text-white"
                                        : items[0].status === "Shipping"
                                        ? "bg-pink-500 text-white"
                                        : items[0].status === "Awaiting Delivery"
                                        ? "bg-violet-500 text-white"
                                        : items[0].status === "Canceled"
                                        ? "bg-gray-700 text-white"
                                        : items[0].status === "Refund"
                                        ? "bg-yellow-700 text-white"
                                        : ""
                                }`}
                            >
                                {items[0].status}
                            </span>
                        </div>

                        {/* Order Items */}
                        <div className="mb-4">
                            {items.map((item) => (
                                <div key={item.book_id} className="flex justify-between items-center py-2">
                                    {/* Book Name and Quantity */}
                                    <div className="flex items-center space-x-5">
                                        <img src={item.image_name} alt="item image" className="w-auto h-32 object-cover rounded-md" />
                                        <div className="text-gray-700">
                                            <span className="font-medium">{item.book_name}</span>{" "}
                                            <span className="text-sm text-gray-500">x {item.quantity}</span>
                                        </div>
                                    </div>
                                    {/* Book Price */}
                                    <div className="text-gray-900 font-semibold">${item.book_price}</div>
                                </div>
                            ))}
                        </div>

                        {/* Total Price */}
                        <div className="flex justify-end border-t pt-2">
                            <span className="text-lg font-bold">Total: ${totalSumPrice.toFixed(2)}</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

History.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.shape({
            order_id: PropTypes.number.isRequired,
            status: PropTypes.string.isRequired,
            discount_id: PropTypes.number.isRequired,
            discount_amount: PropTypes.number.isRequired,
            invoice_id: PropTypes.number.isRequired,
            invoice_date: PropTypes.string.isRequired,
            payment_method: PropTypes.string.isRequired,
            money_paid: PropTypes.number.isRequired,
            book_id: PropTypes.number.isRequired,
            book_name: PropTypes.string.isRequired,
            image_name: PropTypes.string.isRequired,
            book_price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
            order_history_id: PropTypes.number.isRequired,
        })
    ).isRequired,

}
export default History