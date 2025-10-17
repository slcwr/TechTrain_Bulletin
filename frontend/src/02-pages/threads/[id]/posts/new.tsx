import { useParams } from 'react-router-dom';

export default function PostCreatePage() {
  const { id } = useParams();

  return (
    <div>
      <h1>∞èï?\</h1>
      <p>πÏ√…ID: {id}</p>
      {/* <PostCreateForm threadId={id} /> */}
    </div>
  );
}
