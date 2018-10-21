import React from 'react';
import PropTypes from 'prop-types';
import './single-feed.css';

export const SingleFeed = ({
  data
}) => {
  return (
    <div className="single-feed">{data}</div>
  )

}

SingleFeed.propTypes = {
  data: PropTypes.array.isRequired
}