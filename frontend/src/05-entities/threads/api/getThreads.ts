import type { ThreadsResponse,ApiErrorResponse } from '../model/types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const getThreads = async (offset = 0): Promise<ThreadsResponse> => {
  const url = `${API_BASE_URL}/threads?offset=${offset}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    // エラーレスポンスボディを取得
    const errorData: ApiErrorResponse = await response.json();
    throw new Error(`[${response.status}] ${errorData.ErrorMessageJP || errorData.ErrorMessageEN}`);
  }

  // APIは配列を直接返すので、ThreadsResponseの形式に変換
  const threads = await response.json();
  return { threads };
};
