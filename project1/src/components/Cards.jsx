import Card from "./Card";
import { cardData } from "../data/cardData";

const Cards = () => {
  return (
    <div className="w-5/6 mx-auto sm:p-8 md:p-12 flex flex-col gap-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          img={card.img}
          bgColor={card.bgColor}
          textColor={card.textColor}
          index={index}
        />
      ))}
    </div>
  );
};

export default Cards;
