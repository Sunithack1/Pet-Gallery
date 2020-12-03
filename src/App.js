import React from 'react';
import Home from './Home';
import Pets from './Pets';
import { GlobalProvider } from './GlobalState';

export const ConfigContext = React.createContext();

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Pets') return <Pets />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showPetsGallery: true,
};

const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <GlobalProvider>
          <div>{pageToShow(pageName)}</div>       
      </GlobalProvider>
    </ConfigContext.Provider>
  );
};

export default App;
