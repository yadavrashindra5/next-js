import Link from "next/link";
import style from "./style.module.scss";
import { useRouter } from "next/router";

const Card = ({ user }) => {
  const route = useRouter();
  const path = route.pathname;
  return (
    <main className={style.mainContainer}>
      <div>{user.userId}</div>
      <div>{user.id}</div>
      <div>{user.title}</div>
      <div>{user.body}</div>
      <Link href={{ pathname: `${path}/${user.id}`, query: user }}>
        Details
      </Link>
    </main>
  );
};

export default Card;
