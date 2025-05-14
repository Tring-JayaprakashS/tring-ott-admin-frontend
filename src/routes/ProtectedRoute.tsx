import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAUth } from '../context/Authcontext';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser, loading } = useAUth();

  if (loading) {
    return <div className='text-center mt-10'>Loading...</div>;
  }

  if (!currentUser) {
    return <Navigate to='/signin' replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
