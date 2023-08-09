export type QueryFunction<TData = unknown, TVariables = unknown> = (
  variables?: TVariables,
) => Promise<TData>;

export type MutationFunction<TData = unknown, TVariables = unknown> = (
  variables: TVariables,
) => Promise<TData>;
