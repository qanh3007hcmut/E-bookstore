/* eslint-disable no-unused-vars */
import React from 'react'
import PropTypes from 'prop-types'
import TopNav from '../../component/TopNav'
import Gallery from '../../component/Gallery'

const Dashboard = ({ onLogout }) => {
    localStorage.setItem('num_cart', 0)
    return (
        <div>
            <TopNav/>
            <div className="pt-20">
                <Gallery className="mt-10"/>
            </div>
        </div>
    )
}

Dashboard.propTypes = {
    onLogout: PropTypes.func.isRequired, // Validate that onLogout is a required function
};

export default Dashboard
