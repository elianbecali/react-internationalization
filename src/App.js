import { i18next } from './i18n';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{i18next.t('title')}</h1>
        <p>{i18next.t('paragraph', { name: 'Elian' })}</p>
      </header>
    </div>
  );
}

export default App;
