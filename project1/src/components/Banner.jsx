import { MdCheckCircleOutline, MdSearch } from "react-icons/md";
import banner from "../assets/banner.png";

const Banner = () => {
  return (
    <section className="flex items-center justify-center h-full md:py-12 px-6 lg:px-12">
      <div className="max-w-4xl text-center space-y-8">
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
          Looking for a{" "}
          <span className="text-[#FF2323]">
            Business Solution <br />
            for{" "}
          </span>
          appointments?
        </h2>
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
          Ambel simplifies business management by providing tools for scheduling
          appointments, managing bookkeeping, accepting payments, sharing
          resources with customers, sending reminders, and running email
          marketing campaigns.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="bg-[#19525A] px-4 py-2 rounded-md text-white hover:bg-[#134045] transition">
            Start A Free Trial
          </button>
          <div className="flex gap-2 items-center bg-[#F87316] px-4 py-2 rounded-md text-white hover:bg-[#e26312] transition">
            <MdSearch className="text-xl" />
            <button>Find Professionals</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="flex gap-2 items-center bg-green-200 px-3 py-1 rounded-md text-green-800">
            <MdCheckCircleOutline className="text-green-600" />
            <span>No credit card required</span>
          </div>
          <div className="flex gap-2 items-center bg-green-200 px-3 py-1 rounded-md text-green-800">
            <MdCheckCircleOutline className="text-green-600" />
            <span>Try one month for free</span>
          </div>
        </div>
        <div>
          <img
            src={banner}
            alt="Banner"
            className="w-full max-h-[400px] object-cover rounded-md mt-12"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
