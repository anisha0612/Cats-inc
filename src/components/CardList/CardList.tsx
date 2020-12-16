import React from "react";
import EachCard from "../EachCard/EachCard";
import "./CardList.css";
import {ICats } from "../../App"

const CardList = ({monsters}:{monsters:Array<ICats>}) => {
  return (
    <div className="CardList">
     {monsters.map((monster) => {
        return <EachCard key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
