import React from "react";

const WeatherResult = ({ dataFetched }) => {
  // destructiring data
  const { name, main } = dataFetched;

  if (!name) return null;

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Weather in {name} is:</h2>
        <p className="temperature">
          {parseFloat(main.temp, 10).toFixed(1)} <span>&#xb0;C</span>
        </p>
        <p>
          Max temp: {parseFloat(main.temp_max, 10).toFixed(1)} <span>&#xb0;C</span>
        </p>
        <p>
          Min temp: {parseFloat(main.temp_min, 10).toFixed(1)} <span>&#xb0;C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherResult;
