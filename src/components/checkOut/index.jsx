import CheckOutItem from 'components/checkOutItem';
import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems, selectCartTotal } from 'redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
// import PropTypes from 'prop-types';
import './styles.scss';

CheckOutPage.propTypes = {};

function CheckOutPage({ cartItems, total }) {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckOutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">${total}</div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);