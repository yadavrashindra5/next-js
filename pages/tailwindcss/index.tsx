import Link from "next/link";

const TailwindCss = () => {
  return (
    <Link href={""} className="md:w-[33%]">
      <div className="rounded-[10px] h-28 relative overflow-hidden shadow-[0_10px_15px_rgba(0,0,0,0.3)]">
        <img
          src="https://images.pexels.com/photos/20145984/pexels-photo-20145984/free-photo-of-a-black-and-white-photo-of-sand-dunes.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="science and technology"
          className="w-full h-[inherit] object-cover"
        />
        <h1 className="absolute top-[40%] text-white left-2 text-[20px] font-bold">
          Science and Technology
        </h1>
      </div>
    </Link>
  );
};

export default TailwindCss;
