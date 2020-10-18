import React from "react"

import OrderBtn from "../../Buttons/OrderBtn"

import readyForOrderStyles from "./readyfororder.module.scss"

const ReadyForOrder = () => {
  return (
    <div className={readyForOrderStyles.readyForOrder}>
      <h2>Уже готовы сделать заказ?</h2>
      <h3>Свяжитесь с нами всего в один клик!</h3>
      <OrderBtn />
    </div>
  )
}

export default ReadyForOrder
