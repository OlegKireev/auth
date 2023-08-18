import { useState } from 'react';
import { type MutationOptions, type MutationFunction } from '..';

interface UseMutationResult<TData, TVariables> {
  mutate: MutationFunction<TData, TVariables>;
  data: TData | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | undefined;
}

export const useMutation = <TData = unknown, TVariables = void>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: MutationOptions<TData>,
): UseMutationResult<TData, TVariables> => {
  const [data, setData] = useState<TData | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error>();

  const mutate: MutationFunction<TData, TVariables> = async (
    variables: TVariables,
  ) => {
    setError(undefined);
    setIsLoading(true);
    try {
      const response = await mutationFn(variables);
      setData(response);
      return response;
    } catch (err) {
      if (err instanceof Error) {
        setError(err);
      }
      throw err;
    } finally {
      options?.onSettled(data);
      setIsLoading(false);
    }
  };

  return {
    mutate,
    data,
    isLoading,
    isError: Boolean(error),
    error,
  };
};
