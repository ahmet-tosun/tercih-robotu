import React from 'react';

function Column({ data, isHead }) {
  console.log('column type', isHead);
  return isHead === true ? <th>{data}</th> : <td>{data}</td>;
}

export default Column;
