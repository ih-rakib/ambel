import { MdSubdirectoryArrowRight } from "react-icons/md";
import popular1 from "../assets/popular/popular1.png";
import popular2 from "../assets/popular/popular2.png";
import popular3 from "../assets/popular/popular3.png";
import popular4 from "../assets/popular/popular4.png";
import popular5 from "../assets/popular/popular5.png";
import popular6 from "../assets/popular/popular6.png";
import popular7 from "../assets/popular/popular7.png";

const PopularCard = () => {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mx-auto max-w-7xl">
        {/* Main Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 bg-[#19525A] rounded-xl p-6 w-full lg:w-2/5">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-4 w-full lg:w-2/3">
            <h3 className="bg-white px-2 rounded-xl w-fit text-sm sm:text-base">
              Doctor
            </h3>
            <h4 className="text-white text-md font-semibold">
              Business solution for healthcare providers
            </h4>
            <span className="text-white text-xs">
              Our software allows Doctors and Medical Professionals to book
              appointments, manage their patients, provide online prescriptions,
              overview their medical charts, and automatically send reminders
              for treatments.
            </span>
            <div className="flex items-center gap-2 text-white">
              <button className="underline">Learn More</button>
              <MdSubdirectoryArrowRight size={20} />
            </div>
          </div>

          {/* Main Image */}
          <div className="flex justify-center items-center w-full lg:w-1/3 h-48 sm:h-56 lg:h-full">
            <img
              src={popular1}
              alt="Popular 1"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 w-full lg:w-3/5">
          {[popular2, popular3, popular4, popular5, popular6, popular7].map(
            (image, index) => (
              <img
                key={index}
                src={image}
                alt={`Popular ${index + 2}`}
                className="rounded-lg object-cover w-full h-48 sm:h-56 lg:h-full"
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
