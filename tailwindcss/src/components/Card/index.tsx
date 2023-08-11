import React from "react";
import Button from "../Button";

type CardProps = {
  shoeColor: string;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className={`bg-${props.shoeColor.toLowerCase()}-100`}>
        <img
          src="https://www.freeiconspng.com/thumbs/running-icon/running-shoe-icon-31.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <Button outlined text={"Buy Now"} />
        </div>
      </div>
    </div>
  );
};

export default Card;
