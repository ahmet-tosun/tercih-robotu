import { createContext } from 'react';

import FilterTable from './components/FilterTable/FilterTable';
import data from './mocks/data2.json';

const directives = {
  fieldNames: ['Üniversite Adı', 'Program Kodu', 'Puan Türü', 'Program Adı'],
  headers: ['Ad', 'Program Kodu', 'Puan Türü', 'Program Adı'],
};

const DataContext = createContext();
const DirectiveContext = createContext();

const DataProvider = DataContext.Provider;
const DirectiveProvider = DirectiveContext.Provider;

function App() {
  return (
    <div className='App'>
      <DataProvider value={data}>
        <DirectiveProvider value={directives}>
          <FilterTable />
        </DirectiveProvider>
      </DataProvider>
    </div>
  );
}

export { DataContext, DirectiveContext };

export default App;
