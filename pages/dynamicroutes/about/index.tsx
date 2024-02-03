import { useRouter } from "next/router";

const About = () => {
  const route = useRouter();
  console.log(route);
  return <div>Dynamic Route about page</div>;
};

export default About;
