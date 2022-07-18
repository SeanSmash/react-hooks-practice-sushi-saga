import React, { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [allSushi, setAllSushi] = useState([])
  const [fourSushi, setFourSushi] = useState(0)
  const [totalCostEaten, setTotalCostEaten] = useState(0)
  const [plates, setPlates] = useState([])
  const budget = 50

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => setAllSushi(data))
  }, [])

  const sushiToDisplay = allSushi.filter(sushi => {
    if (sushi.id > fourSushi) {
      if (sushi.id <= fourSushi+4){
        return true
      } else {
        return false
      }
    } 
  })

  function handleMoreSushi(){
    setFourSushi(fourSushi+4)
  }

  function handleEaten(price){
    if ((budget - (totalCostEaten + price)) > 0){
      setTotalCostEaten(totalCostEaten + price)
      setPlates([...plates, price])
    } 
  }

  return (
    <div className="app">
      <SushiContainer 
        sushiList={sushiToDisplay} 
        onMoreSushi={handleMoreSushi}
        onEaten={handleEaten}
        budget={budget}
        totalCostEaten={totalCostEaten} />
      <Table 
        totalCostEaten={totalCostEaten} 
        budget={budget}
        plates={plates} />
    </div>
  );
}

export default App;
