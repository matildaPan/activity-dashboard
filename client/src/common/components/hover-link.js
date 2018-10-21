import React from 'react';
import './hover-link.css';

const HoverLink = ({
  name,
  path,
  mouseHovering,
  mouseLeaving
}) => {
  return (
    <span className="hover-link" onMouseOver={() => { mouseHovering(path); }} onMouseLeave={mouseLeaving}>{name}</span>
  )
}

export default HoverLink;