import { useParams } from 'react-router-dom';

export default function ThreadDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>����s0</h1>
      <p>����ID: {id}</p>
      {/* <PostList threadId={id} /> */}
      {/* <PostCreateForm threadId={id} /> */}
    </div>
  );
}
