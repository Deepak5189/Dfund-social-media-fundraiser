import React, { ReactNode } from 'react'
import { AuthProvider } from './AuthContext';

interface ContextWrapperProps{
  children: ReactNode;
};

const ContextWrapper = ({children}: ContextWrapperProps) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default ContextWrapper