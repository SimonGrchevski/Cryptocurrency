import React from 'react';
import PropTypes from 'prop-types';

const Header = (props) => {
  const { currentView } = props;
  return (
    <div className="header">
      <div className="header-year">
        2021
      </div>
      <div className="header-current-view">
        {currentView}
      </div>
      <div className="header-options" />
      <p>
        <span className="material-icons-outlined">
          settings
        </span>
      </p>
    </div>
  );
};

Header.propTypes = {
  currentView: PropTypes.string.isRequired,
};

export default Header;
