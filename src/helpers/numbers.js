import React from 'react';
export const formatNumber = (number) => {
  //return toString (new Intl.NumberFormat().format(number));
  return (number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'))
};
