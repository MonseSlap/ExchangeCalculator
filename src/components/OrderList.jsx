import React from "react";
import OrderItem from "./OrderItem";

function OrderList({ orders, searchTerm, onSearchTermChange, onRegisterOrder, onDeleteOrder }) {
  const filteredOrders = orders.filter((order) =>
    order.id.includes(searchTerm.toUpperCase())
  );

  return (
    <div id="orders-list">
   
      <h2>Lista de órdenes</h2>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Buscar por ID de orden"
      />
      <button onClick={onRegisterOrder}>Registrar Orden</button>
      <div id="order-list">
        {filteredOrders.map((order) => (
          <OrderItem
            key={order.id}
            order={order}
            onDeleteOrder={onDeleteOrder}
          />
          
        ))}
      </div>
    </div>
  );
}

export default OrderList;

