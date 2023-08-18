import { useCallback, useEffect, useState } from 'react';
import { type QueryFunction } from '..';

interface UseQueryResult<TData, TVariables> {
  data: TData | undefined;
  refetch: QueryFunction<TData, TVariables>;
  isLoading: boolean;
  isError: boolean;
}

export const useQuery = <TData = unknown, TVariables = void>(
  serviceFn: QueryFunction<TData, TVariables>,
): UseQueryResult<TData | Promise<TData>, TVariables> => {
  const [data, setData] = useState<TData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const refetch: QueryFunction<TData, TVariables> = useCallback(async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await serviceFn();
      setData(response);
      return response;
    } catch (err) {
      setIsError(true);
      throw new Error('Downloading error');
    } finally {
      setIsLoading(false);
    }
  }, [serviceFn]);

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    refetch,
    isLoading,
    isError,
  };
};
