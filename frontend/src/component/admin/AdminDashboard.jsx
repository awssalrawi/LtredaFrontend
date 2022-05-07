import React, { Fragment } from 'react';

import Sidebar from './pages/Sidebar';
import Topbar from './pages/Topbar';
import DashHome from './pages/DashHome';
import './admin-dashboard.scss';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <Fragment>
      <Topbar />
      <div className="board-container">
        <Sidebar />
        {/* <DashHome /> */}
        <Outlet />
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
