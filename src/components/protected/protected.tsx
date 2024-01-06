"use client"

import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import { Loader } from '../loader/loader';

interface Props {
  children: ReactNode;
}

export const Protected = ({ children }: Props) => {
  const { isAuthenticated, isSessionChecked } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isSessionChecked && isAuthenticated === false) {
      router.push('/api/auth/signin');
    }
  }, [isAuthenticated, isSessionChecked, router]);

  if (!isSessionChecked || !isAuthenticated) {
    return <Loader />;
  }

  return <>{children}</>
};
