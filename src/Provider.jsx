import { useState } from "react";
import { MyContext } from "./MyContext";

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(1234);
  const updateData = (response) => {
    setData(response)
  }
  console.log(children)
  return (
    <MyContext.Provider value={{data, updateData}}>
      {children}
    </MyContext.Provider>
  );
};