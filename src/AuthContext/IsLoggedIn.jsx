import { createContext, useState } from "react";

export const IsLoggedIn = createContext(null);

export const IsLoggedInProvider = ({ children }) => {
  const getUser = JSON.parse(localStorage.getItem("user")) || {};
  const [logUser, setLogUser] = useState(getUser);
  return (
    <IsLoggedIn.Provider
      value={{
        getUser,
      }}
    >
      {children}
    </IsLoggedIn.Provider>
  );
};
