import { IoIosCheckmark } from "react-icons/io";

const Card = ({ card }) => {
  return (
    <>
      <div className="bg-white shadow-lg rounded-xl py-8 px-7 w-full md:w-1/3 lg:w-1/4 xl:w-1/5 flex flex-col items-center gap-4 max-w-xs">
        <span className="text-[#19525A] text-xl bg-[#E6E6E6] rounded-full p-2">
          {card?.icon}
        </span>
        <div className="text-lg text-[#19525A] font-bold">{card.h3}</div>
        <div className="text-3xl text-[#101828] font-bold">{card.h1}</div>
        <div className="text-sm text-[#475467]">{card.span}</div>

        <ul className="list-none">
          {card.listItems?.map((item, index) => (
            <li key={index} className="flex items-center mb-2 gap-2">
              <span className="text-[#19525A] text-xl bg-[#E6E6E6] rounded-full">
                <IoIosCheckmark />
              </span>
              <span className="text-xs text-[#475467]">{item.text}</span>
            </li>
          ))}
        </ul>

        <button className="bg-[#19525A] w-full mt-4 text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-[#163d48] transition">
          Get Started
        </button>
      </div>
    </>
  );
};

export default Card;
