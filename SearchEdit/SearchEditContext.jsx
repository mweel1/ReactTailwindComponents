import * as React from "react";

const SearchEditContext = React.createContext();

function SearchEditContextProvider({ children, status = "search" }) {
  const [myStatus, setStatus] = React.useState(status);
  const [myItem, setMyItem] = React.useState(null);

  const value = {
    status: myStatus,
    item: myItem,
    idleSelected(item) {
      setStatus("search");
    },
    setStatus: (status) => {
      setStatus(status);
    },
    itemSelected: (item) => {
      setMyItem(item);
    },
  };

  return (
    <SearchEditContext.Provider value={value}>
      {children}
    </SearchEditContext.Provider>
  );
}

export { SearchEditContextProvider, SearchEditContext };
