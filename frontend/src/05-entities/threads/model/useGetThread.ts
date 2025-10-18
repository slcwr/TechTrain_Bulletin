import { useQuery } from '@tanstack/react-query';
import { getThreads } from '../api/getThreads';

export const useGetThreads = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['threads'],
    queryFn: () => getThreads(),
  });
  return {
    data,
    isLoading,
    error,
  };
};
