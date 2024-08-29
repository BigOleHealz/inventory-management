import React from 'react';
import { FaHome, FaBox, FaChartBar, FaCog } from 'react-icons/fa';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
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
import './Dashboard.css';

// Register elements and scales
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
  // Dummy data for charts and tables
  const doughnutData = {
    labels: ['Low Stock', 'In Stock'],
    datasets: [
      {
        data: [33, 67],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  const lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Stock Levels',
        fill: false,
        lineTension: 0.1,
        backgroundColor: '#ff6384',
        borderColor: '#ff6384',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const barData = {
    labels: ['Item A', 'Item B', 'Item C', 'Item D'],
    datasets: [
      {
        label: 'Stock',
        backgroundColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        data: [65, 59, 80, 81],
      },
    ],
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <ul>
          <li><FaHome /> Home</li>
          <li><FaBox /> Inventory</li>
          <li><FaChartBar /> Reports</li>
          <li><FaCog /> Settings</li>
        </ul>
      </div>
      <div className="content">
        <div className="header">
          <h2>Local Inventory</h2>
        </div>
        <div className="widgets">
          <div className="widget">
            <h3>Inventory Status</h3>
            <Doughnut data={doughnutData} />
          </div>
          <div className="widget">
            <h3>Stock Levels</h3>
            <Line data={lineData} />
          </div>
          <div className="widget">
            <h3>Low Stock Products</h3>
            <Bar data={barData} />
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
              <tr>
                <td>Product A</td>
                <td>Category 1</td>
                <td>20</td>
                <td>In Stock</td>
              </tr>
              <tr>
                <td>Product B</td>
                <td>Category 2</td>
                <td>5</td>
                <td>Low Stock</td>
              </tr>
              <tr>
                <td>Product C</td>
                <td>Category 3</td>
                <td>50</td>
                <td>In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
