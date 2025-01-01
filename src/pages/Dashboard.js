import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <div className="row">
        <div className="col-md-4">
          <div className="section-card">
            <h3>Quick Summary</h3>
            <p>Overview of your recent activity.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="section-card">
            <h3>Analytics</h3>
            <p>Visualize your data trends.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="section-card">
            <h3>Notifications</h3>
            <p>Stay updated with real-time alerts.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
