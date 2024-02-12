type postType = {
  post: {
    userId?: number;
    id?: number;
    title?: string;
    body?: string;
  };
};

const PostF = (props: postType) => {
  console.log(props);
  const { post } = props;
  return (
    <>
      <div>{post.userId}</div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </>
  );
};

export default PostF;
