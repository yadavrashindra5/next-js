import { useRouter } from "next/router";
import style from "./style.module.scss";
const Slug = () => {
  const route = useRouter();
  console.log(route);
  const { query } = route;
  const { userId, id, title, body } = query;
  return (
    <main className={style.mainContainer}>
      <main className={style.innerContainer}>
        <div>UserId:{userId}</div>
        <div>Id:{id}</div>
        <div>Title:{title}</div>
        <div>body:{body}</div>
      </main>
    </main>
  );
};

export default Slug;
