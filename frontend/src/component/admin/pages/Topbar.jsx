import React, { Fragment } from 'react';
// import { Admin, Resource } from 'react-admin';
// import PostList from './PostList';
import './styles/topbar.scss';
// import { NotificationsNoneIcon } from '@mui/icons-material';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
const Topbar = () => {
  return (
    <Fragment>
      <div className="topbar">
        <div className="topbarWrapper">
          <div className="topLeft">
            <span className="dashLogo">Ltreda Dashboard</span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <NotificationsNone fontSize="large" />
              <span className="topIconBag">3</span>
            </div>
            <div className="topbarIconContainer">
              <Language fontSize="large" />
              <span className="topIconBag">3</span>
            </div>
            <div className="topbarIconContainer">
              <Settings fontSize="large" />
            </div>
            <img
              src="https://picsum.photos/200"
              alt="avatar"
              className="topAvatar"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Topbar;
