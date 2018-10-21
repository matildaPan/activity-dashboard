import React from 'react';
import PropTypes from 'prop-types';

export const ActivityFeed = ({
  data
}) => {
  return (
    <div>{data}</div>
  )

}

ActivityFeed.propTypes = {
  data: PropTypes.array.isRequired
}