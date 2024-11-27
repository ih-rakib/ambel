const Trial = () => {
  return (
    <div className="bg-[#F5FFFD] mx-8 sm:mx-16 md:mx-32 lg:mx-64 -mt-[100px] mb-[50px] md:mb-[100px]">
      <div className="flex flex-col md:flex-row gap-7 md:gap-0 items-start md:items-center justify-between p-10">
        <div className="flex flex-col">
          <h3 className="text-2xl text-[#19525A] font-semibold">
            Start your 30-day free trial
          </h3>
          <span className="text-md text-[#19525A]">
            Join over 100+ practitioner and organization already growing with
            Ambel
          </span>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-transparent py-2 px-4 border border-gray-200 rounded-lg text-[#19525A]">
            Learn More
          </button>
          <button className="bg-[#19525A] py-2 px-4 rounded-lg text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trial;
