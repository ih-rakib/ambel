import collaboration1 from "../assets/collaborations/collaboration1.png";
import collaboration2 from "../assets/collaborations/collaboration2.png";
import collaboration3 from "../assets/collaborations/collaboration3.png";
// import collaboration4 from "../assets/collaborations/collaboration4.png";
import collaboration5 from "../assets/collaborations/collaboration5.png";
import collaboration6 from "../assets/collaborations/collaboration6.png";

const Collaboration = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 md:py-10 flex flex-col items-center">
      <span className="text-gray-500 text-center text-sm md:text-base px-4">
        Join 10k+ Users, 35+ Solo Practitioners, and 60+ Businesses all over the
        World
      </span>
      <div className="flex flex-wrap items-center justify-center gap-7 px-4 mt-6">
        <img
          src={collaboration1}
          alt="Collaboration 1"
          className="object-contain max-h-[50px]"
        />
        <img
          src={collaboration2}
          alt="Collaboration 2"
          className="object-contain max-h-[50px]"
        />
        <img
          src={collaboration3}
          alt="Collaboration 3"
          className="object-contain max-h-[50px]"
        />
        <img
          src={collaboration1}
          alt="Collaboration 1 Duplicate"
          className="object-contain max-h-[50px]"
        />
        <img
          src={collaboration5}
          alt="Collaboration 5"
          className="object-contain max-h-[50px]"
        />
        <img
          src={collaboration6}
          alt="Collaboration 6"
          className="object-contain max-h-[50px]"
        />
      </div>
    </section>
  );
};

export default Collaboration;
