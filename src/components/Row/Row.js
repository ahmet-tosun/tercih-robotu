import React, { useContext } from 'react';
import Column from '../Column';

import { DirectiveContext } from '../../App';

function Row({ data }) {
  const directives = useContext(DirectiveContext);

  const filteredData = Object.entries(data).filter(([key, value]) => {
    if (directives.includes(key)) {
      return true;
    } else {
      return false;
    }
  });
  console.log(filteredData);
  return (
    <tr>
      {filteredData.map((data) => (
        <Column data={data} key={data[1]} />
      ))}
    </tr>
  );
}

export default Row;

// ['Üniversite Adı', 'Program Kodu']
// {
//   "Program Kodu": "100290102",
//   "Üniversite Türü": "DEVLET",
//   "Üniversite Adı": "ADIYAMAN ÜNİVERSİTESİ",
//   "Meslek Yüksekokul Adı": "Besni Ali Erdemoğlu Meslek Yüksekokulu",
//   "Program Adı": "Bankacılık ve Sigortacılık",
//   "Puan Türü": "TYT",
//   "Genel Kont.": "68",
//   "Genel Yerl.": "70",
//   "En Küçük Puan": "234.01185",
//   "En Büyük Puan": "322.13615",
//   "OB Kont.": "2",
//   "OB Yer.": "0",
//   "OBK En Küçük Puan": "--",
//   "OBK En Büyük Puan": "--"
// }
