import { QueryClientProvider as ReactQueryProvider } from '@tanstack/react-query';
import { type FC, type PropsWithChildren } from 'react';
import { queryClient } from '@/shared';

export const QueryClientProvider: FC<PropsWithChildren> =
  function QueryClientProvider({ children }) {
    return (
      <ReactQueryProvider client={queryClient}>{children}</ReactQueryProvider>
    );
  };
