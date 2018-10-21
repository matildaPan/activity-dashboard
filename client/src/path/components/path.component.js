import React from 'react';
import PropTypes from 'prop-types';
import './path.css';

export const Path = ({
  link
}) => {
  return (
    <div className="path">
      <span>{link}</span>
    </div>
    
  )
};

  Path.propTypes = {
    slug: PropTypes.string
  }