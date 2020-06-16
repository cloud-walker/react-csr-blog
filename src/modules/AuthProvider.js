import React from 'react'

const AuthContext = React.createContext()

export const AuthProvider = props => {
  const value = React.useMemo(() => {}, [])
  return <AuthContext.Provider value={value} {...props} />
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}
