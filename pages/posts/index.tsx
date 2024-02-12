import PostF from "@/components/PostsF";

type propsType = {
  posts: [{}];
};

const Posts = (props: propsType) => {
  const { posts } = props;
  return (
    <>
      {posts.map((post, index, posts) => {
        return <PostF post={post} key={index} />;
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default Posts;
