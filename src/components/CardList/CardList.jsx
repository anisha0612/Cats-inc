import React from "react";
import EachCard from "../EachCard/EachCard.jsx";
import "./CardList.css";

const CardList = (props) => {
  return (
    <div className="CardList">
      {props.monsters.map((monster) => {
        return <EachCard key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
