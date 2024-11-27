import { useState } from "react";

const Banner = () => {
  const [selected, setSelected] = useState("Yearly");

  return (
    <section className="bg-[#F5FFFA] h-[calc(100vh - 90px)] xs:h-screen px-7">
      <div className="flex flex-col items-center sm:gap-7 gap-5 pt-8">
        <span className="bg-[#F9F5FF] px-4 py-1 rounded-xl text-[#19525A] font-semibold">
          Pricing Plans
        </span>
        <h1 className="text-3xl text-[#307D33] text-center font-semibold">
          Let’s Get Started. <br />
          We’ve got a Plan that’s perfect for you.{" "}
        </h1>
        <span className="text-sm text-[#0089C9]">
          Simple, transparent pricing that grows with you. Try any plan free for
          30 days.
        </span>

        <div className="flex gap-3 bg-[#ECECEC] p-1 rounded-lg">
          <button
            onClick={() => setSelected("Monthly")}
            className={`font-semibold text-md px-4 py-1 rounded-md ${
              selected === "Monthly" ? "bg-[#F5FFFA]" : "bg-transparent"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setSelected("Yearly")}
            className={`font-semibold text-md px-4 py-1 rounded-md ${
              selected === "Yearly" ? "bg-[#F5FFFA]" : "bg-transparent"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
