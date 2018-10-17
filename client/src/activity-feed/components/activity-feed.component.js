import React from 'react';
import PropTypes from 'prop-types';

export const ActivityFeed = ({
  feed
}) => {
  return (
    <div>{feed.template}</div>
  )

}

ActivityFeed.propTypes = {
  feed: PropTypes.object.isRequired
}