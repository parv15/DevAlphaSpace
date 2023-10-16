// src/App.js
import React, { useState } from 'react';

// import Map from './Map';
import Task1 from './Task1';
// import Selection from './Selection';

function App() {
  // const apiKey = 'AucCPLQ_TZk56zGb66Q4W50biNHmd4mJL4Db05C8ztcm1oeVNhJW9djmOZnzfLYR'; // Replace with your API key
  // const [selectedArea, setSelectedArea] = useState(null);

  // const handleAreaSelect = (area) => {
  //   setSelectedArea(area);
  // };

  return (
    // <div className="App">
    //   <h1>Select an Area from a Satellite Image</h1>
    //   <div className="map-container">
    //     <Map apiKey={apiKey} />
    //   </div>
    //   <div className="selection-container">
    //     <Selection onAreaSelect={handleAreaSelect} />
    //   </div>
    //   {selectedArea && (
    //     <div className="selected-area-info">
    //       <h2>Selected Area:</h2>
    //       <p>Latitude: {selectedArea.lat}</p>
    //       <p>Longitude: {selectedArea.lng}</p>
    //       <p>Width: {selectedArea.width} meters</p>
    //       <p>Height: {selectedArea.height} meters</p>
    //     </div>
    //   )}
    // </div>
    <Task1/>
  );
}

export default App;
