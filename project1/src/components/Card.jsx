import { MdSubdirectoryArrowRight } from "react-icons/md";

const Card = ({ title, description, img, bgColor, textColor, index }) => {
  return (
    <div
      className={`relative flex flex-col md:flex-row items-center gap-10 p-6 rounded-lg ${bgColor} sticky top-20 z-[${
        index + 1
      }]`}
      style={{
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Text Content */}
      <div className={`flex-1 ${textColor} flex flex-col justify-center`}>
        <h4 className="text-2xl font-semibold mb-4">{title}</h4>
        <span className="block mb-4">{description}</span>
        <div className="flex items-center gap-1">
          <button className="underline">Learn More</button>
          <MdSubdirectoryArrowRight />
        </div>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center md:justify-end overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full max-h-[300px] object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card;
