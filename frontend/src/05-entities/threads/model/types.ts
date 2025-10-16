export interface Threads {
 id: string;
 title: string;
}

export interface Post {
  id: string;
  post: string;
}

export interface Posts {
  threadId: string;
  posts: Post[];
}

export interface ThreadsResponse {
  threads: Threads[];
}

export interface ApiErrorResponse {
  ErrorCode: number;
  ErrorMessageJP: string;
  ErrorMessageEN: string;
}
