import { createContext, useState } from "react";

const ListContext = createContext();

export function ListProvider({ children }) {
  const [listProperties, setListProperties] = useState([]);

  return (
    <ListContext.Provider value={[listProperties, setListProperties]}>
      {children}
    </ListContext.Provider>
  );
}

export default ListContext;
