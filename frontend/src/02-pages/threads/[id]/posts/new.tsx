import { useParams } from 'react-router-dom';

export default function PostCreatePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>���?\</h1>
      <p>����ID: {id}</p>
      {/* <PostCreateForm threadId={id} /> */}
    </div>
  );
}
