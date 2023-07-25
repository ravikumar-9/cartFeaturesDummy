// Write your code here
import './index.css'

import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const getTotalPrice = () => {
        let totalPrice = 0
        cartList.forEach(eachItem => {
          if (eachItem.price > 0) {
            totalPrice += parseInt(eachItem.price * eachItem.quantity)
            console.log(totalPrice)
          }
        })
        return totalPrice
      }
      const totalOrderPrice = getTotalPrice()

      console.log(totalOrderPrice)

      return (
        <div className="cart-summary">
          <h1 className="order-total-text">
            Order Total:
            <span className="total-price"> RS {totalOrderPrice}</span>
          </h1>
          <p className="items-count">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
