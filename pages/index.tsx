import Blog from "./blog";
import TailwindCss from "./tailwindcss";

const Home = () => {
  return (
    <>
      <div className="text-3xl font-bold underline">Home</div>
      <div className="m-1 flex flex-col gap-y-5 md:flex-row md:flex-wrap md:gap-x-2 md:w-[60%] justify-center md:m-auto">
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
        <TailwindCss />
      </div>
      {/* <Blog /> */}
    </>
  );
};

export default Home;
