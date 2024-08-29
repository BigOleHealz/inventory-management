import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import './Dashboard.css';

// Register the necessary Chart.js components
ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [doughnutData, setDoughnutData] = useState(null);
  const [lineData, setLineData] = useState(null);
  const [barData, setBarData] = useState(null);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('/api/inventory-status')
      .then(response => response.json())
      .then(data => setDoughnutData(data))
      .catch(error => console.error('Error fetching inventory status:', error));

    fetch('/api/stock-levels')
      .then(response => response.json())
      .then(data => setLineData(data))
      .catch(error => console.error('Error fetching stock levels:', error));

    fetch('/api/low-stock-products')
      .then(response => response.json())
      .then(data => setBarData(data))
      .catch(error => console.error('Error fetching low stock products:', error));

    fetch('/api/inventory-details')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching inventory details:', error));
  }, []);

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li>Home</li>
          <li>Inventory</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h2>Local Inventory</h2>
        </div>
        <div className="widgets">
          <div className="widget">
            <h3>Inventory Status</h3>
            {doughnutData ? <Doughnut data={doughnutData} /> : <p>Loading...</p>}
          </div>
          <div className="widget">
            <h3>Stock Levels</h3>
            {lineData ? <Line data={lineData} /> : <p>Loading...</p>}
          </div>
          <div className="widget">
            <h3>Low Stock Products</h3>
            {barData ? <Bar data={barData} /> : <p>Loading...</p>}
          </div>
        </div>
        <div className="inventory-table">
          <h3>Inventory Details</h3>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.length > 0 ? (
                tableData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.product}</td>
                    <td>{item.category}</td>
                    <td>{item.stock}</td>
                    <td>{item.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;