import React from 'react';
import usePetsDataManager from './usePetsDataManager';

export const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const {
    isLoading,
    petList,
    togglePetFavorite,
    hasErrored,
    error,
  } = usePetsDataManager();

  const provider = {
    isLoading,
    petList,
    togglePetFavorite,
    hasErrored,
    error,
  };

  return (
    <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>
  );
};
