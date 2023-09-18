import React, { useContext } from 'react';
import Column from '../Column';

import { DirectiveContext } from '../../App';

function Row({ data }) {
  const directives = useContext(DirectiveContext);

  return (
    <tr>
      {Object.entries(data).map(([key, value]) => (
        directives['fieldNames'].includes(key) && <Column data={value} key={value} />
      ))}
    </tr>
  );
}

export default Row;


