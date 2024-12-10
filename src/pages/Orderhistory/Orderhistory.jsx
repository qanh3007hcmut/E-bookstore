/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'
import Navigation from '../../component/Nav'
import Content from './History'

const Orderhistory = () => {
    // Initialize
    const location = useLocation();
    const [cart_list, setCart_list] = useState([])
    const [cart_num, setCart_num] = useState(0);
    useEffect(() => {
        if (location.state && location.state.cartList && location.state.cartNum !== undefined) {
            const { cartList, cartNum } = location.state;
            setCart_list(cartList);
            setCart_num(cartNum);
        }
    }, [location.state]); 

    // main function
    const [orders, setOrders] = useState([])
    const username = localStorage.getItem("username");  

    const fetchOrder = async (un) => {
        try {
            const result = await axios.get(`http://localhost:3000/api/order/all?username=${un}`, 
                {headers: { 'Content-Type': 'application/json' } } )
            if(result.status === 200) setOrders(result.data.orders)
            else console.log(result.data.message)
        } catch (error) {
            console.log('Error fetching orders:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchOrder(username);
        console.log(orders)
    },[])

    return (
        <div>
            <Navigation 
                cartNum={cart_num} 
                cartList={cart_list} 
                nametag="Order History"
            />
            <Content orders={orders}/>

        </div>
    )
}

export default Orderhistory