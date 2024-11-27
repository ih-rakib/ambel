import { useState } from "react";
import {
  MdSearch,
  MdOutlineLocationOn,
  MdClose,
  MdOutlinePowerSettingsNew,
  MdArrowRightAlt,
} from "react-icons/md";

const SearchBox = ({ icon: Icon, placeholder }) => (
  <div className="flex items-center border rounded-full px-4 py-2 md:min-w-[400px]">
    <Icon className="text-gray-500 text-xl" />
    <input
      type="text"
      placeholder={placeholder}
      className="bg-transparent flex-grow outline-none border-none ml-2 placeholder-gray-500"
    />
  </div>
);

const Filter = ({ categories, removeCategory }) => (
  <div className="flex gap-4 mt-4 flex-wrap">
    {categories
      .filter((category) => category.selected)
      .map((category) => (
        <div
          key={category.name}
          className={`flex items-center gap-2 py-1 px-3 rounded-full bg-[#EFF8FF] text-[#175CD3]`}
        >
          <span>{category.name}</span>
          <MdClose
            className="cursor-pointer"
            onClick={() => removeCategory(category.name)}
          />
        </div>
      ))}
  </div>
);

const Search = () => {
  const categoryNames = [
    "Doctor",
    "Lawyer",
    "Therapist",
    "Barber",
    "Spa",
    "Psychiatrist",
    "Consultancy Firm",
    "More",
  ];

  const initialCategories = categoryNames.map((name) => ({
    name,
    selected: false,
  }));

  const [categories, setCategories] = useState(initialCategories);

  const toggleCategorySelection = (categoryName) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.name === categoryName
          ? { ...category, selected: !category.selected }
          : category
      )
    );
  };

  return (
    <section className="w-5/6 mx-auto p-4 sm:p-8 md:p-12 flex flex-col items-center justify-center border-b-2 border-gray-300 rounded-xl">
      <h2 className="font-semibold text-2xl text-center mb-8">
        Find and Book Appointments with Local <br /> and International
        Professionals
      </h2>

      <div className="flex gap-4 mt-7 flex-col lg:flex-row">
        <SearchBox
          icon={MdSearch}
          placeholder={"Search Doctor, Therapist, Consultant, Spa"}
        />
        <SearchBox
          icon={MdOutlineLocationOn}
          placeholder={"Select your location"}
        />
        <button className="rounded-full px-4 py-2 text-white bg-[#0D99FF]">
          Search
        </button>
      </div>

      <span className="mt-8 text-xl w-full text-center">
        Are you looking for
      </span>

      <div className="flex gap-6 mt-4 justify-center flex-wrap">
        {categories
          .filter((category) => category.name !== "More")
          .map((category) => (
            <div
              key={category.name}
              className={`flex items-center gap-2 cursor-pointer py-1 px-3 rounded-full ${
                category.selected
                  ? "bg-[#EFF8FF] text-[#175CD3]"
                  : "bg-transparent text-gray-500"
              }`}
              onClick={() => toggleCategorySelection(category.name)}
            >
              <span>{category.name}</span>
            </div>
          ))}

        <div className="flex items-center gap-4 cursor-pointer">
          <span className="bg-[#EFF8FF] text-[#175CD3] px-2 rounded-md">
            More
          </span>
          <MdOutlinePowerSettingsNew className="text-xl" />
        </div>
      </div>

      <Filter
        categories={categories}
        removeCategory={toggleCategorySelection}
      />

      <span className="text-center text-[#0D99FF] mt-4 cursor-pointer flex items-center gap-2">
        Explore Advanced Search
        <MdArrowRightAlt className="text-xl" />
      </span>
    </section>
  );
};

export default Search;
