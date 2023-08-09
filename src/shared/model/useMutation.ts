import { useState } from 'react';
import { type MutationFunction } from '..';

interface UseMutationResult<TData, TVariables> {
  mutate: MutationFunction<TData, TVariables>;
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
}

export const useMutation = <TData = unknown, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
): UseMutationResult<TData, TVariables> => {
  const [data, setData] = useState<TData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const mutate: MutationFunction<TData, TVariables> = async (
    variables: TVariables,
  ) => {
    setIsError(false);
    setIsLoading(true);
    try {
      const response = await mutationFn(variables);
      setData(response);
      return response;
    } catch (err) {
      setIsError(true);
      throw new Error('Downloading error');
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate,
    data,
    isLoading,
    isError,
  };
};
