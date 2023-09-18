import React, { useContext } from 'react';
import Row from '../Row';
import Column from '../Column';

import styles from './styles.module.css';

import { DataContext } from '../../App';
import { DirectiveContext } from '../../App';

function FilterTable() {
  const dataList = useContext(DataContext);
  const directives = useContext(DirectiveContext);

  return (
    <table id={styles.myTable}>
      <thead>
        <tr>
          {directives['headers'].map((value) => (
            <Column data={value} key={value} isHead={true} />
          ))}
        </tr>
      </thead>

      <tbody>
        {dataList.map((data) => (
          <Row data={data} key={data[0]} /> //data[1] or others can be used too, depends on uniqueness
        ))}
      </tbody>
    </table>
  );
}

export default FilterTable;
