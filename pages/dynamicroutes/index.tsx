import { useEffect, useState } from "react";

const DynamicRoute = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    response.json().then((data) => setData(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* <div>Dynamic routes</div> */}
      {/* first approach */}
      {/* <Link href={"/dynamicroutes/about"}>about page</Link> */}
      {/* <br /> */}
      {/* as is used to change the route of the page */}
      {/* <Link href={"/dynamicroutes/about"}>about page</Link> */}
      {/* <br /> */}
      {/* second approach to pass rotue parameter */}
      {/* <Link href={{ pathname: "dynamicroutes/about", query: { id: "123" } }}>
        about page
      </Link> */}
    </>
  );
};

export default DynamicRoute;
