import React, { useContext } from 'react';
import Row from '../Row';

import styles from './styles.module.css';

import { DataContext } from '../../App';

function FilterTable() {
  const dataList = useContext(DataContext);

  return (
    <table id={styles.myTable}>
      <thead>{/* <Row /> */}</thead>
      <tbody>
        {dataList.map((data) => (
          <Row data={data} key={data['Program Kodu']} />
        ))}
      </tbody>
    </table>
  );
}

export default FilterTable;
