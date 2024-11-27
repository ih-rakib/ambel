import { BsLightningCharge, BsDatabase, BsDatabaseAdd } from "react-icons/bs";

import Card from "./Card";

const cardData = [
  {
    icon: <BsLightningCharge />,
    h3: "Pay As You Go",
    h1: "10%",
    span: "10% from your customer payment",
    listItems: [
      { text: "Only pre-paid booking" },
      { text: "Both practitioner and Organization" },
      { text: "Up to 5 practitioners in organization" },
      { text: "2 staff members are allowed" },
      { text: "Basic chat and email support" },
    ],
  },
  {
    icon: <BsDatabase />,
    h3: "Practitioner",
    h1: "$49",
    span: "1 practitioner license/monthly",
    listItems: [
      { text: "All booking options" },
      { text: "All schedule Feature" },
      { text: "Individual single practitioner license" },
      { text: "3 staff members are allowed" },
      { text: "Unlimited email marketing" },
    ],
  },
  {
    icon: <BsDatabaseAdd />,
    h3: "Enterprise",
    h1: "$39",
    span: "Practioner Number",
    listItems: [
      { text: "All booking options" },
      { text: "Only for Organization" },
      { text: "Unlimited practitioners and staff" },
      { text: "Customizable 6 page website" },
      { text: "E-commerce functionality" },
    ],
  },
];

const Cards = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-12 sm:gap-16 px-5 sm:px-8 lg:px-16 w-full relative xs:-top-[250px] md:-top-[300px]">
      {cardData.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default Cards;
