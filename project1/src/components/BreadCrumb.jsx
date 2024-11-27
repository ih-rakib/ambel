import { useState } from "react";

const BreadCrumb = () => {
  const [selected, setSelected] = useState("Doctor");

  const items = [
    "Doctor",
    "Lawyer",
    "Spa & Salon",
    "Therapist",
    "Fitness",
    "Instructor",
    "Consultancy",
  ];

  return (
    <div className="lg:border border-gray-400 flex flex-wrap items-center justify-center sm:justify-between gap-3 sm:gap-7 rounded-full my-7 font-semibold">
      {items.map((item) => (
        <span
          key={item}
          className={`cursor-pointer px-4 py-2 rounded-full text-center ${
            selected === item
              ? "bg-[#19525A] text-white"
              : "hover:bg-gray-200 text-gray-700"
          }`}
          onClick={() => setSelected(item)}
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default BreadCrumb;
