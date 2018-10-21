
export const actionTypes = {
  MOUSE_HOVERING: 'MOUSE_HOVERING',
  MOUSE_LEAVING: 'MOUSE_LEAVING',
};

export const mouseHovering = (link) => {
  return{
    type: actionTypes.MOUSE_HOVERING,
    link
  }
}

export const mouseLeaving = (link) => {
  return{
    type: actionTypes.MOUSE_LEAVING,
    link
  }
}