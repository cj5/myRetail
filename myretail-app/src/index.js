import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

import data from './item-data.json'

const apiClient = {
  loadProduct: async () => {
    return data.CatalogEntryView[0]
  }
}

ReactDOM.render(<App apiClient={apiClient} />, document.getElementById('root'));
registerServiceWorker();
