// src/components/SalesGrid.jsx

import salesData from "../data/salesData";

function SalesGrid() {
  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Region</th>
          <th>Sales</th>
          <th>Orders</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((item) => (
          <tr key={item.product}>
            <td>{item.product}</td>
            <td>{item.region}</td>
            <td>{item.sales}</td>
            <td>{item.orders}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SalesGrid;