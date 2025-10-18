import type { ThreadsResponse, ApiErrorResponse } from '../model/types';

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const createThread = async (title: string): Promise<ThreadsResponse> => {
  const url = `${API_BASE_URL}/threads`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title: title }),
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
