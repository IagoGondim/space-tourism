import { createContext, useState } from "react";
import PageData from "../data/PageData";
const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [data, setData] = useState(PageData);

  return (
    <PageContext.Provider value={{ data }}>{children}</PageContext.Provider>
  );
};

export default PageContext;
