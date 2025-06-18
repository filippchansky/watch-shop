'use client'
import React from 'react'

interface IProps {
  children: React.ReactNode;
}

const AuthProvider:React.FC<IProps> = ({children}) => {

  

  return (
    <>
    {children}
    </>
  )
}
export default AuthProvider;