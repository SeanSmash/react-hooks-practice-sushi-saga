import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushiList, onMoreSushi, onEaten, budget, totalCostEaten }) {
  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      {sushiList.map(sushi => (
        <Sushi 
          key={sushi.id}
          id={sushi.id}
          name={sushi.name}
          imgURL={sushi.img_url}
          price={sushi.price}
          onEaten={onEaten}
          budget={budget}
          totalCostEaten={totalCostEaten} />
      ))}
      <MoreButton onMoreSushi={onMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
