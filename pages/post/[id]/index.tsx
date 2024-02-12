type postType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const Post = (props) => {
  const { post } = props;
  return (
    <main>
      <div>{post.userId}</div>
      <div>{post.id}</div>
      <div>{post.title}</div>
      <div>{post.body}</div>
    </main>
  );
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return { props: { post } };
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  console.log(paths);
  return { paths, fallback: false };
}

export default Post;
