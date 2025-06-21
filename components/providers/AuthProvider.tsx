'use client';
import { getUser } from '@/shared/api/user/getUser';
import { useAuthStore } from '@/store/AuthStore';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IProps> = ({ children }) => {
  const { checkAuth } = useAuthStore();

  // const { data, isLoading, isError, isSuccess } = useQuery({
  //   queryKey: ['auth'],
  //   queryFn: getUser,
  //   retry: false,
  // });

  // useEffect(() => {
  //   setIsLoading(isLoading);
  //   if (data && isSuccess) {
  //     setUser(data);
  //     setIsAuth(true);
  //   }

  //   if (isError) {
  //     setUser(null);
  //     setIsAuth(false);
  //   }
  // }, [data, isError, isLoading, isSuccess, setIsAuth, setIsLoading, setUser]);

  useEffect(() => {
    checkAuth();
  }, [])

  return <>{children}</>;
};
export default AuthProvider;
