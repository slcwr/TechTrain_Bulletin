import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createThread } from '@/05-entities/threads/api/createThread';

// ✅ useMutation: POST
export const useCreateThread = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createThread,
    onSuccess: () => {
      // Thread一覧を再取得
      queryClient.invalidateQueries({ queryKey: ['threads'] });
    },
  });
};
