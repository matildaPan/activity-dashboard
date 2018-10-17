const reducer = (accumulator, currentValue) => {
  accumulator[currentValue.id] = currentValue;
  return accumulator;
}

export const normalizer = (data) => { 
  let allIds = data.map(item => item.id);
  let byId = data.reduce(reducer, {});
  return { allIds, byId };
}

