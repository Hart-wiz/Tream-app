import React from "react";
import cards_data from "../assets/cards/Cards_data";
import Image from "next/image";

const Titlecards = ({ category }) => {
  return (
    <div className="px-9 pt-9">
      <h2 className="text-white font-semibold p-3">
        {category ? category : "popular on Tream"}
      </h2>
      <div className="flex gap-7 overflow-x-scroll mx-4  w-[90vw] scrollhide">
        {cards_data.map((card, index) => {
          return (
            <div
              className=" relative h-50 min-w-[300px] text-white bg-red-600"
              key={index}
            >
              <Image src={card.image} alt="cardimage" className="size-full" />
              <p className="absolute bottom-4 pl-4">{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
