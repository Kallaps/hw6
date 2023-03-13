import React from "react";
import Cards from "../Cards/Cards";
import boots from "../Images/boots.png";

let products = [
  {
    title: "Speedracer multifunction watch with Ferrari FXX K 1:43 scale model",
    image:
      "https://i.pinimg.com/236x/b2/55/29/b25529c6240a578275e24d2881933cff.jpg",
    price: "175",
    id: 1,
  },
  {
    title: "Matt black Aspire chronograph watch with steel strap",
    image:
      "https://i.pinimg.com/236x/bf/25/04/bf2504f3817a0af3763d35f2489d70d5.jpg",
    price: "295",
    id: 2,
  },
  {
    title: "Matt grey Aspire chronograph watch with steel strap",
    image:
      "https://i.pinimg.com/236x/1c/63/d2/1c63d274fa70ffaa88b4f9eba86f0e0e.jpg",
    price: "150",
    id: 3,
  },
  {
    title: "Matt black Aspire chronograph watch with rose gold details",
    image:
      "https://i.pinimg.com/236x/4d/c2/ad/4dc2ad2c8ed2bc381fd3651e70b7c37d.jpg",
    price: "200",
    id: 4,
  },
];
const CardList = () => {
  return (
    <div>
      <div className="d-flex justify-content-between container mt-5">
        {products.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
