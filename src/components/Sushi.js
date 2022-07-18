import React, { useState } from "react";

function Sushi({ id, name, imgURL, price, onEaten, budget, totalCostEaten }) {
  const [isEaten, setIsEaten] = useState(false)

  function handleEaten(){
    if((budget - (totalCostEaten + price)) > 0){
      setIsEaten(true)
      onEaten(price)
    } else {
      alert("You don't have enough money!")
    }
    
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {/* Tell me if this sushi has been eaten! */}
        {isEaten ? null : (
          <img
            src={imgURL}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
