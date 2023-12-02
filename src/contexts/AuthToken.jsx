import React, { createContext, useEffect, useState } from 'react';

export const tokenAuthContext = createContext();

function AuthToken({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }
  }, [isAuth]);

  return (
    <tokenAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </tokenAuthContext.Provider>
  );
}

export default AuthToken;
