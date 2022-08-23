import React from 'react';

const GlobalContext = React.createContext(null);

const GlobalProvider = ({children}) => {
  const [searchKey, setSearchKey] = React.useState('');
  const [searchResult, setSearchResult] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [imageDetails, setImageDetails] = React.useState({});
  const [currentPage, setCurrentPage] = React.useState(1);
  const [refresh, setRefresh] = React.useState(false);
  return <GlobalContext.Provider 
  value={{
    searchKey,
    setSearchKey,
    searchResult,
    setSearchResult,
    isLoading,
    setIsLoading,
    imageDetails,
    setImageDetails,
    currentPage,
    setCurrentPage,
    refresh,
    setRefresh
  }}>{children}</GlobalContext.Provider>;
};

export {GlobalContext, GlobalProvider};
