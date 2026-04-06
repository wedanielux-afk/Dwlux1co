import { useEffect, useState } from "react";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Orders 📦</h1>

      {orders.map(order => (
        <div key={order._id} style={{
          border: "1px solid #ccc",
          margin: "10px",
          padding: "10px"
        }}>
          <p><strong>Total:</strong> ${order.amount}</p>
          <p><strong>Status:</strong> {order.status}</p>

          <ul>
            {order.items.map((item, i) => (
              <li key={i}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Dashboard;