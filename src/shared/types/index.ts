export type QueryFunction<TData = unknown, TVariables = unknown> = (
  variables?: TVariables,
) => Promise<TData>;

export type MutationFunction<TData = unknown, TVariables = unknown> = (
  variables: TVariables,
) => Promise<TData>;

export interface MutationOptions<TData = unknown> {
  onSettled: (data: TData | undefined) => unknown;
}

export interface NavigationLink {
  url: string;
  title: string;
}
