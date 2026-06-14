import React, { useState, useEffect } from 'react';
import './Admin.css';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [clickCounts, setClickCounts] = useState({});

  useEffect(() => {
    const loggedIn = localStorage.getItem('isAdminLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
      loadClickCounts();
    }
  }, []);

  const loadClickCounts = () => {
    const counts = JSON.parse(localStorage.getItem('buttonClicks') || '{}');
    setClickCounts(counts);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const envUser = import.meta.env.VITE_ADMIN_USER;
    const envPass = import.meta.env.VITE_ADMIN_PASS;

    if (username === envUser && password === envPass) {
      localStorage.setItem('isAdminLoggedIn', 'true');
      setIsLoggedIn(true);
      loadClickCounts();
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all click data?')) {
      localStorage.removeItem('buttonClicks');
      setClickCounts({});
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="admin-container">
        <div className="admin-login-box">
          <h2>Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h2>Admin Dashboard</h2>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>

      <div className="admin-content">
        <section className="analytics-section">
          <h3>Button Click Analytics</h3>
          <p>This section shows the click count for every button pressed on the website.</p>
          
          <div className="actions-bar">
            <button onClick={loadClickCounts} className="refresh-btn">Refresh Data</button>
            <button onClick={handleClearData} className="clear-btn">Clear All Data</button>
          </div>

          {Object.keys(clickCounts).length > 0 ? (
            <table className="analytics-table">
              <thead>
                <tr>
                  <th>Button Name / Identifier</th>
                  <th>Click Count</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(clickCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([buttonName, count]) => (
                  <tr key={buttonName}>
                    <td>{buttonName}</td>
                    <td>{count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="no-data">No click data recorded yet.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Admin;
