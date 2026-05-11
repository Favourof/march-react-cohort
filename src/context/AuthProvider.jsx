import React, { useState } from 'react'
import AuthContext from './authContext';

export const AuthProvider = ({children}) => {
    const name = "John Doe"
    const email = "john@gmail.com"
    const [cart, setCart] = useState(0);
  return (
    <AuthContext.Provider value={{name, email, cart, setCart}}>
      {children}
    </AuthContext.Provider>
  )
}

  

